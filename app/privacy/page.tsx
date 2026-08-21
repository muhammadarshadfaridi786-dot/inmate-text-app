import type { Metadata } from "next"
import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import Breadcrumb from "@/components/layout/Breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Inmate Text App collects, uses, and protects your information. We are committed to your privacy and do not sell personal data.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <div className="mt-4 max-w-2xl">
            <SectionHeading
              as="h1"
              title="Privacy Policy"
              subtitle="How Inmate Text App handles your information."
            />
            <p className="mt-2 text-xs text-muted-foreground">Last reviewed: June 2026</p>
          </div>
        </PageWrapper>
      </section>

      <section className="py-12">
        <PageWrapper>
          <div className="max-w-2xl space-y-10 text-sm leading-relaxed text-muted-foreground">

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Introduction</h2>
              <p>
                Inmate Text App is a free information directory. We help families and friends find
                communication options at correctional facilities across the United States. This
                Privacy Policy explains what information we collect, how we use it, and what
                choices you have.
              </p>
              <p>
                You do not need to create an account or provide any personal information to browse
                facilities, providers, guides, or any other content on this site. This policy
                applies to all visitors, whether they use the site as a guest or as a registered
                user.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Information Collected Automatically</h2>
              <p>
                When you visit this website, certain information is recorded automatically by our
                hosting infrastructure and analytics tools. This includes:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Your IP address and approximate location (country or city-level, not precise)</li>
                <li>The type of browser and device you are using</li>
                <li>Pages you visit, how long you spend on them, and which links you click</li>
                <li>The website that referred you to us</li>
                <li>The date and time of your visit</li>
              </ul>
              <p>
                This information is collected through server logs and analytics tools such as
                Google Analytics. It helps us understand how people use the site so we can improve
                it. It does not identify you personally unless you choose to provide personal
                information directly.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Information You Choose to Provide</h2>
              <p>
                You can use this website entirely without sharing personal information. If you
                choose to provide information, it may happen in the following ways.
              </p>

              <h3 className="text-sm font-semibold text-foreground pt-1">Email Subscriptions and Newsletter</h3>
              <p>
                If you subscribe to updates through our email signup form, we collect your email
                address. We use this to send you occasional updates about facility changes, new
                guides, and platform improvements. You can unsubscribe at any time using the link
                included in every email we send. We do not share subscriber lists with third
                parties for marketing purposes.
              </p>

              <h3 className="text-sm font-semibold text-foreground pt-1">Contact Forms</h3>
              <p>
                If you send us a message through a contact form or by direct email, we receive the
                information included in your message, such as your name and email address. We use
                this only to respond to your question and do not add you to any mailing list
                without your explicit consent.
              </p>

              <h3 className="text-sm font-semibold text-foreground pt-1">Account Creation</h3>
              <p>
                When account features become available, we will collect an email address and
                password to create your account. Additional profile information may be collected
                if you choose to provide it. We will update this policy with full details before
                those features go live.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Cookies</h2>
              <p>
                This website uses a small number of cookies. Cookies are small text files stored
                in your browser that help the site remember your preferences.
              </p>
              <p>We use cookies for:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Remembering your light or dark mode preference</li>
                <li>Analytics, to understand which pages are visited most often</li>
                <li>Session management if you create an account</li>
              </ul>
              <p>
                We do not use cookies to track you across other websites. We do not use
                advertising cookies and we do not sell cookie data to any third party. If you
                prefer not to allow cookies, you can disable them in your browser settings. Some
                features, such as your theme preference, may not work without them.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Analytics</h2>
              <p>
                We use analytics tools to understand how visitors use this site. This helps us
                identify which guides are most helpful, which facility pages get the most traffic,
                and where we can improve the platform.
              </p>
              <p>
                Analytics data is aggregated and does not identify individual visitors personally.
                If we use Google Analytics, it is configured to respect privacy settings and does
                not share data with third parties for advertising purposes.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Log Data</h2>
              <p>
                Our hosting provider automatically records standard server logs. These logs include
                IP addresses, browser information, pages visited, and timestamps. Log data is
                kept for a limited time for security and troubleshooting purposes and is not used
                for marketing or sold to any third party.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Third-Party Services</h2>
              <p>
                This website links to external services including JPay, CorrLinks, ConnectNetwork,
                GettingOut, Securus, and other inmate communication providers. When you follow a
                link to one of these services, you leave Inmate Text App. We do not control those
                websites and are not responsible for their privacy practices. Review the privacy
                policy of any external site before providing personal information to them.
              </p>
              <p>We use trusted third-party services to help operate this website, including:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Vercel (web hosting)</li>
                <li>Supabase (authentication and database, when account features are active)</li>
                <li>Mailchimp (email delivery for newsletter subscribers)</li>
                <li>Google Analytics (website usage analytics)</li>
              </ul>
              <p>
                Each of these providers has its own privacy policy and security practices. We
                select providers that meet reasonable data protection standards.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Operate and improve the website</li>
                <li>Understand how visitors use the platform</li>
                <li>Send email updates to subscribers who have consented</li>
                <li>Respond to questions or messages you send us</li>
                <li>Diagnose technical problems and maintain security</li>
              </ul>
              <p>
                We do not sell your personal information. We do not share your personal
                information with third parties for marketing purposes. We do not use your data to
                display targeted advertisements.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Data Retention</h2>
              <p>We keep personal information only as long as necessary for its purpose:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Analytics data: up to 26 months (or as configured in our analytics tool)</li>
                <li>Email subscriber data: until you unsubscribe</li>
                <li>Contact form messages: only as long as needed to respond</li>
                <li>Server logs: up to 30 days</li>
                <li>Account data: until you delete your account</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Your Rights and Opt-Out Options</h2>
              <p>You have the right to:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Know what personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Unsubscribe from emails at any time (via the link in any email we send)</li>
                <li>Opt out of analytics using your browser settings or a browser extension</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at the email address listed at the
                bottom of this page and we will respond within a reasonable time.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Data Protection</h2>
              <p>
                We take reasonable technical and organizational steps to protect the information
                we hold. These include using HTTPS encryption for all traffic, using trusted
                hosting providers, and limiting access to personal data to those who need it.
              </p>
              <p>
                No system connected to the internet is completely secure. While we work to protect
                your information, we cannot guarantee absolute security. If we become aware of a
                data breach that affects your personal information, we will notify you as required
                by applicable law.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Children&apos;s Privacy</h2>
              <p>
                This website is not directed at children under the age of 13. We do not knowingly
                collect personal information from children. If you believe a child has provided
                us with personal information, please contact us and we will delete it promptly.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">External Links</h2>
              <p>
                This website contains links to external websites including correctional facility
                directories, provider websites, and government resources. These links are provided
                for your convenience.
              </p>
              <p>
                We do not control the content or privacy practices of those websites. Clicking an
                external link takes you away from Inmate Text App. The destination site&apos;s own
                privacy policy applies once you leave our site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy as the platform grows or as laws and best
                practices change. When we make significant changes, we will update the date at the
                top of this page. For major changes that affect how we use personal data, we will
                notify email subscribers.
              </p>
              <p>
                We encourage you to review this policy from time to time. Continued use of this
                website after changes are posted means you accept the updated policy.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p>
                If you have questions about this Privacy Policy, want to make a data request, or
                need to report a concern, you can reach us at:
              </p>
              <p className="font-medium text-foreground">contact@inmatetextapp.com</p>
              <p>
                We aim to respond to all privacy-related inquiries within five business days.
              </p>
            </div>

            <div className="border-t pt-6 text-xs text-muted-foreground/70">
              <p>
                Related:{" "}
                <Link href="/terms" className="underline hover:text-foreground transition-colors">
                  Terms of Service
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
