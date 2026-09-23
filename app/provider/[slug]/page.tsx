import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PROVIDER_DETAILS } from "@/lib/data/providers"
import { generateProviderMetadata } from "@/lib/seo"
import { buildBreadcrumbSchema, buildProviderSchema, buildWebPageSchema, buildReviewSchema, buildFAQSchema, buildProviderHowToSchema, buildSoftwareAppSchema } from "@/lib/schema"
import JsonLd from "@/components/seo/JsonLd"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import RelatedLinks from "@/components/seo/RelatedLinks"
import StateIntro from "@/components/state/StateIntro"
import ProviderHero from "@/components/provider/ProviderHero"
import ProviderTrustMetrics from "@/components/provider/ProviderTrustMetrics"
import ProviderServices from "@/components/provider/ProviderServices"
import ProviderCoverage from "@/components/provider/ProviderCoverage"
import ProviderFacilities from "@/components/provider/ProviderFacilities"
import ProviderPricing from "@/components/provider/ProviderPricing"
import ProviderProscons from "@/components/provider/ProviderProscons"
import ProviderFaq from "@/components/provider/ProviderFaq"
import ProviderCompareWith from "@/components/provider/ProviderCompareWith"
import RelatedProviders from "@/components/provider/RelatedProviders"
import ProviderCTA from "@/components/provider/ProviderCTA"
import AdsterraBanner from "@/components/ads/AdsterraBanner"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(PROVIDER_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const provider = PROVIDER_DETAILS[slug]
  if (!provider) return {}
  return generateProviderMetadata(provider)
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params
  const provider = PROVIDER_DETAILS[slug]
  if (!provider) notFound()

  const breadcrumbItems = [
    { label: "Home",      href: "/"          },
    { label: "Providers", href: "/providers" },
    { label: provider.name },
  ]

  const relatedLinks = [
    { label: "All Providers",         href: "/providers"  },
    { label: "Compare Providers",     href: "/compare"    },
    { label: "Inmate Messaging",      href: "/messaging"  },
    { label: "Video Visitation",      href: "/video-calls" },
    { label: "Photo Sharing",         href: "/photo-sharing" },
    { label: "Phone Calls",           href: "/phone-calls" },
    { label: "Money Transfer",        href: "/money-transfer" },
    { label: "All Facilities",        href: "/facilities" },
    { label: "All States",            href: "/states"     },
    { label: "Communication Guides",  href: "/guides"     },
  ]

  return (
    <>
      {/* Structured data */}
      <JsonLd
        schema={buildWebPageSchema(
          provider.seoTitle ?? `${provider.name}: Inmate Communication Guide`,
          provider.seoDescription ?? provider.description,
          `/provider/${provider.slug}`
        )}
      />
      <JsonLd
        schema={buildProviderSchema({
          name: provider.name,
          description: provider.description,
          slug: provider.slug,
          website: provider.website,
        })}
      />
      <JsonLd schema={buildBreadcrumbSchema(breadcrumbItems)} />
      {provider.rating && (
        <JsonLd
          schema={buildReviewSchema({
            name: provider.name,
            slug: provider.slug,
            description: provider.description,
            ratingValue: provider.rating ?? 7.5,
            reviewCount: provider.reviewCount ?? 100,
          })}
        />
      )}
      {provider.faq && provider.faq.length > 0 && (
        <JsonLd
          schema={buildFAQSchema(
            provider.faq.map((f) => ({
              question: f.question,
              answer: f.answer,
            }))
          )}
        />
      )}
      {provider.slug === "city-tele-coin" && (
        <JsonLd
          schema={buildSoftwareAppSchema({
            name: "City Tele Coin (CTC) App",
            description: "City Tele Coin app for video visits, messaging, photo sharing, and payments at county jails. Available free on iOS and Android. Start, schedule, and receive video calls from incarcerated friends and family without leaving home.",
            slug: "city-tele-coin",
            operatingSystem: "Android, iOS",
            applicationCategory: "UtilitiesApplication",
            rating: 3.3,
            ratingCount: 342,
          })}
        />
      )}
      {provider.slug === "corrlinks" && (
        <JsonLd
          schema={buildProviderHowToSchema(
            "How to Set Up a CorrLinks Account for Federal Prison Email",
            "Step by step guide to creating a free CorrLinks account to receive messages from a federal Bureau of Prisons inmate.",
            [
              { name: "Ask the inmate to send a contact request", text: "The process must begin with the inmate. Your loved one logs in to a TRULINCS terminal at their federal facility, enters your name and email address, and sends you a contact request." },
              { name: "Check your email for the CorrLinks invitation", text: "CorrLinks sends you a free invitation email. Check your spam folder if it does not arrive within 48 hours." },
              { name: "Create your free CorrLinks account", text: "Go to corrlinks.com and follow the link in the invitation email. Create your free account by entering your personal information and creating a password." },
              { name: "Find your PIC number", text: "After creating your account go to your account settings to find your PIC number which stands for Personal Identification Code. Share this number with your loved one so they can add you on their TRULINCS terminal." },
              { name: "Begin exchanging messages", text: "Once the inmate adds you using your PIC number you can exchange messages through corrlinks.com. Consider upgrading to CorrLinks Premier for approximately $8 per year to receive push notifications when new messages arrive." },
            ]
          )}
        />
      )}
      {provider.slug === "pigeonly" && (
        <JsonLd
          schema={buildProviderHowToSchema(
            "How to Send a Letter or Photo to an Inmate Using Pigeonly",
            "Step by step guide to sending a printed letter or photo to any inmate using the Pigeonly print and mail service.",
            [
              { name: "Create a Pigeonly account", text: "Go to pigeonly.com or download the Pigeonly app for iOS or Android. Sign up for the Forever Free Plan at no cost or choose a paid unlimited plan. Create your account using your name and email." },
              { name: "Search for the facility and add the inmate", text: "Search for the correctional facility by name or state. Add the inmate by their full name and inmate ID number. Pigeonly shows facility-specific photo and content rules at this step to help you avoid rejection." },
              { name: "Type your message and upload photos", text: "Type your letter in the Pigeonly editor. Upload photos if desired. Pigeonly recommends no more than five photos per envelope unless the facility allows more. Review the facility rules shown on screen before adding content." },
              { name: "Submit your order", text: "Review your letter and submit your order. The Forever Free Plan covers a limited number of monthly letters at no charge. Additional letters use paid plan credits. You will receive an order confirmation." },
              { name: "Pigeonly prints and mails your letter", text: "Pigeonly prints your message on physical paper and mails it to the facility address on your behalf. Delivery typically takes three to seven business days after processing. Track your order through your Pigeonly account." },
            ]
          )}
        />
      )}
      {provider.slug === "textbehind" && (
        <JsonLd
          schema={buildProviderHowToSchema(
            "How to Send a Letter to an Inmate Using TextBehind",
            "Step by step guide to sending a printed letter or photo to any inmate at any correctional facility using TextBehind.",
            [
              { name: "Create a free TextBehind account", text: "Go to textbehind.com or download the TextBehind app for iOS or Android. Click Sign Up and create a free account using your name, email, and password." },
              { name: "Search for the facility and add the inmate", text: "Search for the correctional facility by name or location. Add the inmate by their full name and inmate ID number. Verify the facility address before proceeding." },
              { name: "Type your message and attach photos", text: "Type your message in the text editor. Attach photos if desired. Each page including photos counts as one page at approximately $0.49 per page. Review your message before submitting." },
              { name: "Pay and submit your order", text: "Pay per page using a credit or debit card. Review your order summary and submit. You will receive an order confirmation by email." },
              { name: "TextBehind prints and mails your letter", text: "TextBehind prints your message on physical paper and mails it to the facility address on your behalf. Delivery typically takes three to seven business days after processing." },
            ]
          )}
        />
      )}
      {provider.slug === "touchpay" && (
        <JsonLd
          schema={buildProviderHowToSchema(
            "How to Make a TouchPay Inmate Deposit at touchpaydirect.com",
            "Step by step guide to depositing funds to an inmate account using TouchPay at county jails and detention centers.",
            [
              { name: "Go to touchpaydirect.com", text: "Open a browser and go to touchpaydirect.com. Click Create Account to register a free account using your name, email, and password. If you already have an account click Log In." },
              { name: "Search for the facility", text: "Search for the county jail or detention center by name or state. Select the correct facility from the results. Confirm the facility address matches your loved one's location." },
              { name: "Find the inmate", text: "Search for the inmate by their full legal name or inmate ID number. Select the correct person from the results. Verify the name and ID before proceeding." },
              { name: "Select deposit type and amount", text: "Select the deposit type such as commissary account or phone account. Enter the amount you want to deposit. Review the transaction fee before confirming. TouchPay charges a fee per transaction." },
              { name: "Pay and confirm", text: "Pay by debit or credit card. Review the order summary and submit your payment. You will receive an email confirmation. For questions contact TouchPay customer service at 1-866-232-1899." },
            ]
          )}
        />
      )}

      {/* Breadcrumb */}
      <PageWrapper className="flex justify-center pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </PageWrapper>

      {/* Page sections */}
      <ProviderHero provider={provider} />
      <AdsterraBanner />
      <ProviderTrustMetrics provider={provider} />
      <StateIntro stateName={provider.name} intro={provider.overview} />
      <ProviderServices provider={provider} />
      <ProviderCoverage provider={provider} />
      <ProviderFacilities
        providerName={provider.name}
        facilities={provider.supportedFacilities}
      />
      <ProviderPricing providerName={provider.name} pricing={provider.pricing} />
      <ProviderProscons
        providerName={provider.name}
        pros={provider.pros}
        cons={provider.cons}
      />
      <ProviderFaq providerName={provider.name} faq={provider.faq} />
      {provider.slug === "city-tele-coin" && provider.appInfo && (
        <PageWrapper>
          <section className="py-8 border-t flex flex-col items-center text-center">
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-foreground mb-2">
                Download the City Tele Coin App
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The CityTeleCoin app is available free on iOS and Android. Use it to video visit, send messages, share photos, and manage your account from your smartphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={provider.appInfo.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-black/80 transition-colors"
                >
                  Download on the App Store
                </a>
                <a
                  href={provider.appInfo.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 text-white px-5 py-2.5 text-sm font-medium hover:bg-green-800 transition-colors"
                >
                  Get it on Google Play
                </a>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                <div className="rounded-lg border p-3">
                  <p className="text-xs font-medium text-foreground">iOS Version</p>
                  <p className="text-xs text-muted-foreground">Version 16.0.0, June 2026</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs font-medium text-foreground">Android Version</p>
                  <p className="text-xs text-muted-foreground">Available on Google Play</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs font-medium text-foreground">App Features</p>
                  <p className="text-xs text-muted-foreground">Video visits, messaging, photos, payments</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs font-medium text-foreground">Developer</p>
                  <p className="text-xs text-muted-foreground">City Tele-Coin Company, Inc., since 1986</p>
                </div>
              </div>
            </div>
          </section>
        </PageWrapper>
      )}
      <ProviderCompareWith
        providerSlug={provider.slug}
        providerName={provider.name}
        relatedSlugs={provider.relatedProviderSlugs}
      />
      <RelatedProviders slugs={provider.relatedProviderSlugs} />

      {/* Internal links */}
      <PageWrapper className="py-8">
        <RelatedLinks title="Related Pages" links={relatedLinks} />
      </PageWrapper>

      {/* CTA */}
      <ProviderCTA provider={provider} />
    </>
  )
}
