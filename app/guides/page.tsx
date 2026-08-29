import type { Metadata } from "next"
import Link from "next/link"
import { ALL_GUIDES, GUIDE_DETAILS } from "@/lib/data/guides"
import { buildItemListSchema, buildWebPageSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import GuidesDirectory from "@/components/guides/GuidesDirectory"

export const metadata: Metadata = {
  title: "Prison Communication Guides: How to Message, Call, Visit and Send Money to an Inmate",
  description:
    "Free step-by-step guides covering every aspect of inmate communication. Learn how JPay, CorrLinks, and ConnectNetwork work, how to set up phone calls, schedule video visits, send money, and navigate the prison communication system.",
  alternates: { canonical: "/guides" },
  openGraph: {
    url: "/guides",
    title: "Prison Communication Guides",
    description:
      "Step-by-step guides covering every aspect of inmate communication. Find the right platform, learn the rules, and stay connected with an incarcerated loved one.",
  },
}

const allGuidesForSchema = Object.values(GUIDE_DETAILS).map((g) => ({
  name: g.title,
  url: `/guides/${g.slug}`,
}))

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema(
          "Prison Communication Guides: Step-by-Step Help for Families",
          "Beginner-friendly guides explaining how inmate messaging, phone calls, video visitation, and photo sharing work.",
          "/guides"
        )}
      />
      <JsonLd schema={buildItemListSchema(allGuidesForSchema)} />

      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <div className="max-w-2xl">
            <SectionHeading
              as="h1"
              title="Prison Communication Guides"
              subtitle="Plain-language guides covering every aspect of inmate communication. Whether you are just getting started or trying to solve a specific problem, these guides are written for people with no prior experience."
            />
            <p className="mt-3 text-xs text-muted-foreground">
              All guides are written for beginners and assume no prior knowledge of the prison communication system.
            </p>
          </div>
        </PageWrapper>
      </section>

      {/* SEO content */}
      <section className="py-8 border-b">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">23+</div>
                <div className="text-sm text-muted-foreground mt-1">Free Guides</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Free to Read</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">2026</div>
                <div className="text-sm text-muted-foreground mt-1">Regularly Updated</div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                The prison communication system is confusing for families who are
                new to it. Providers, rules, costs, and processes differ by facility
                type, state, and contract. These guides explain how each part of the
                system works in plain language, without assuming any prior knowledge.
              </p>
              <p>
                Every guide is written based on real questions families ask and
                real problems they encounter. Topics include how to set up messaging
                accounts on JPay, CorrLinks, ConnectNetwork, and GettingOut, how
                phone call rates work under current FCC rules, how to schedule video
                visits, how to send money to an inmate trust account, and what to
                do when something goes wrong.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Start Here If You Are New</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/guides/inmate-communication-guide"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">Complete Inmate Communication Guide</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Start here if you are new. Covers every communication type
                    and what to do first.
                  </p>
                </Link>
                <Link href="/guides/how-to-find-an-inmate"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">How to Find an Inmate</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Find which facility your loved one is in before setting
                    up any communication accounts.
                  </p>
                </Link>
                <Link href="/guides/how-inmate-messaging-works"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">How Inmate Messaging Works</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learn how electronic messaging works at prisons and jails
                    and which platform to use.
                  </p>
                </Link>
                <Link href="/guides/how-to-set-up-inmate-email"
                   className="rounded-lg border p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium text-sm">How to Set Up Inmate Email</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Step-by-step setup instructions for JPay, CorrLinks,
                    ConnectNetwork, and GettingOut.
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </PageWrapper>
      </section>

      <section className="py-10" aria-label="Guides directory">
        <PageWrapper>
          <GuidesDirectory guides={ALL_GUIDES} />
        </PageWrapper>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t">
        <PageWrapper>
          <div className="max-w-3xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Are these guides free to read?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Yes. All guides on InmateTextApp.com are completely free to
                    read. No account, registration, or payment is required. We
                    do not charge for any information on this site.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">How often are the guides updated?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Guides are reviewed and updated regularly to reflect changes
                    in FCC regulations, provider pricing, platform updates, and
                    facility policies. Each guide shows a last updated date.
                    Key guides were updated in 2026 to reflect current FCC rate
                    caps and platform changes.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Which guide should I read first?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Start with the Complete Inmate Communication Guide if you
                    are new to the system. Then read the How to Find an Inmate
                    guide to locate the correct facility. After that, read the
                    specific platform guide for whichever provider serves your
                    loved one facility.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-medium text-sm">Can I suggest a topic for a new guide?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Yes. Contact us at contact@inmatetextapp.com with your
                    suggestion. We prioritize guides based on the questions
                    families ask most frequently and the topics that are hardest
                    to find clear information about elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>
    </>
  )
}
