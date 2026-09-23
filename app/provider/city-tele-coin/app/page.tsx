import type { Metadata } from "next"
import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "City Tele Coin App Download: iOS and Android Guide",
  description: "Download the City Tele Coin app free for iOS and Android. How to login, add money, and use CTC app for video visits and messaging at county jails.",
  alternates: { canonical: "/provider/city-tele-coin/app" },
}

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "City Tele Coin (CTC)",
  description: "City Tele Coin app for video visits, messaging, photo sharing and payments at county jails. Free on iOS and Android.",
  operatingSystem: "Android, iOS",
  applicationCategory: "UtilitiesApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.3",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "342",
  },
  downloadUrl: "https://play.google.com/store/apps/details?id=com.citytelecoin.mobile",
  installUrl: "https://apps.apple.com/us/app/city-tele-coin/id1144120270",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an app for City Tele Coin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The City Tele Coin app is available free for iOS on the Apple App Store and for Android on Google Play. Search for CityTeleCoin to find the official app published by City Tele-Coin Company Inc.",
      },
    },
    {
      "@type": "Question",
      name: "How do I download the City Tele Coin app for Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open Google Play Store on your Android device and search for CityTeleCoin. Select the app published by City Tele-Coin Company and tap Install. The app is free to download.",
      },
    },
    {
      "@type": "Question",
      name: "How do I download the City Tele Coin app for iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the Apple App Store on your iPhone or iPad and search for City Tele Coin. Select the app published by City Tele-Coin Company Inc and tap Get. The app is free to download.",
      },
    },
    {
      "@type": "Question",
      name: "How do I login to the City Tele Coin app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the CityTeleCoin app and enter your registered email address and password. If you forgot your password tap Forgot Password and follow the reset instructions. If you cannot login contact CTC customer service at 318-756-1114.",
      },
    },
    {
      "@type": "Question",
      name: "How do I put money on City Tele Coin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the CityTeleCoin app or go to citytelecoin.com. Log in to your account. Select Add Funds and choose the account type such as phone account or commissary. Enter the amount and pay by credit or debit card. Funds are typically credited within a few minutes to a few hours.",
      },
    },
    {
      "@type": "Question",
      name: "How much does City Tele Coin cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The City Tele Coin app is free to download. Charges apply for services used. Phone call rates are subject to FCC caps effective April 2026. Video visit costs vary by facility. Contact CTC at 318-756-1114 or visit citytelecoin.com for current rates at your specific facility.",
      },
    },
  ],
}

export default function CityTeleCoinAppPage() {
  const breadcrumbItems = [
    { label: "Providers", href: "/providers" },
    { label: "City Tele Coin", href: "/provider/city-tele-coin" },
    { label: "App Download" },
  ]

  return (
    <>
      <JsonLd schema={appSchema} />
      <JsonLd schema={faqSchema} />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              City Tele Coin App: Download for iOS and Android
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The CityTeleCoin app is free on iOS and Android. Use it to video visit, send messages, share photos, add money, and manage your account from your smartphone.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com/us/app/city-tele-coin/id1144120270"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-black/80 transition-colors"
              >
                Download on App Store (iOS)
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.citytelecoin.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 text-white px-6 py-3 text-sm font-semibold hover:bg-green-800 transition-colors"
              >
                Get it on Google Play (Android)
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Free to download. Rates apply for calls, video visits, and messages.
              Customer service: 318-756-1114
            </p>
          </div>
        </PageWrapper>
      </section>

      <section className="py-12">
        <PageWrapper>
          <div className="max-w-2xl space-y-10">

            {/* What is CTC App */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                What Is the City Tele Coin App?
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The City Tele Coin app (also called CityTeleCoin or CTC) is the official mobile app published by City Tele-Coin Company Inc, a corrections communication company founded in 1986. The app lets families of incarcerated people video visit, send messages, share photos, and add money to accounts at county jails and detention centers that contract with City Tele Coin.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                City Tele Coin serves county jails primarily in the South and Southeast United States including Louisiana, Texas, Tennessee, Alabama, and surrounding states. The app is available free for iPhone and Android. You pay only for the services you use such as phone call minutes, video visit sessions, and message credits.
              </p>
            </div>

            {/* How to Download iOS */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                How to Download City Tele Coin App for iPhone (iOS)
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>1. Open the App Store on your iPhone or iPad.</p>
                <p>2. Tap the Search tab and type <strong className="text-foreground">CityTeleCoin</strong>.</p>
                <p>3. Select the app published by City Tele-Coin Company Inc.</p>
                <p>4. Tap <strong className="text-foreground">Get</strong> to download. The app is free.</p>
                <p>5. Open the app and create a free account or log in.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/city-tele-coin/id1144120270"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-black/80 transition-colors"
              >
                Download CTC for iPhone
              </a>
            </div>

            {/* How to Download Android */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                How to Download City Tele Coin App for Android
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>1. Open the Google Play Store on your Android device.</p>
                <p>2. Search for <strong className="text-foreground">CityTeleCoin</strong>.</p>
                <p>3. Select the app published by City Tele-Coin Company.</p>
                <p>4. Tap <strong className="text-foreground">Install</strong>. The app is free.</p>
                <p>5. Open the app and create a free account or log in.</p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.citytelecoin.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 text-white px-5 py-2.5 text-sm font-medium hover:bg-green-800 transition-colors"
              >
                Download CTC for Android
              </a>
            </div>

            {/* How to Login */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                How to Login to the City Tele Coin App
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open the CityTeleCoin app and enter your registered email address and password. If you forgot your password tap Forgot Password and follow the reset instructions sent to your email. If you cannot access your account contact CTC customer service at 318-756-1114 between 7 AM and 7 PM Central time seven days a week. You can also log in through the website at citytelecoin.com.
              </p>
            </div>

            {/* How to Add Money */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                How to Put Money on City Tele Coin
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Adding money to a City Tele Coin account takes three steps. First, open the CityTeleCoin app or go to citytelecoin.com and log in. Second, tap Add Funds and select the account type: phone account for call credits or commissary for the inmate store account. Third, enter the amount and pay by credit or debit card. Funds are typically credited within a few minutes to a few hours depending on the facility.
              </p>
              <div className="rounded-lg border p-4 space-y-1">
                <p className="text-sm font-medium text-foreground">CTC Customer Service</p>
                <p className="text-sm text-muted-foreground">Phone: 318-756-1114</p>
                <p className="text-sm text-muted-foreground">Hours: 7 AM to 7 PM Central, 7 days a week</p>
                <p className="text-sm text-muted-foreground">Website: citytelecoin.com</p>
              </div>
            </div>

            {/* How Much Does It Cost */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                How Much Does City Tele Coin Cost?
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The City Tele Coin app is free to download. Charges apply for the services you use. Phone call rates are regulated by the FCC and capped at $0.11 per minute for large facilities effective April 2026. Video visit costs vary by facility contract. Message credits vary by facility. Contact CTC at 318-756-1114 or visit citytelecoin.com for exact rates at your specific county jail.
              </p>
            </div>

            {/* App Features */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                City Tele Coin App Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Video Visits", desc: "Start, schedule, and receive video calls from home without traveling to the facility." },
                  { title: "Messaging", desc: "Send and receive electronic messages with incarcerated loved ones." },
                  { title: "Photo Sharing", desc: "Send and receive photos through the app at participating facilities." },
                  { title: "Payments", desc: "Add money to phone accounts and commissary accounts directly in the app." },
                  { title: "Account History", desc: "View all transactions and communication history in one place." },
                  { title: "Free to Download", desc: "The CTC app is free on iOS and Android. Charges apply for services used." },
                ].map((f) => (
                  <div key={f.title} className="rounded-lg border p-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                City Tele Coin App: Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is there an app for City Tele Coin?",
                    a: "Yes. The City Tele Coin app is available free for iOS on the Apple App Store and for Android on Google Play. Search for CityTeleCoin to find the official app."
                  },
                  {
                    q: "How do I download City Tele Coin app for Android free?",
                    a: "Open Google Play Store, search for CityTeleCoin, and tap Install. The app is completely free to download. Charges only apply when you use paid services like phone calls or video visits."
                  },
                  {
                    q: "How do I login to City Tele Coin app on iPhone?",
                    a: "Open the CityTeleCoin app on your iPhone, enter your email and password, and tap Login. If you forgot your password use the Forgot Password link. For help call 318-756-1114."
                  },
                  {
                    q: "How do I login to City Tele Coin app on Android?",
                    a: "Open the CityTeleCoin app on your Android device, enter your registered email and password, and tap Login. If you cannot access your account call CTC support at 318-756-1114."
                  },
                  {
                    q: "Is there a GettingOut app for GTL?",
                    a: "Yes but GettingOut is a different app from City Tele Coin. GettingOut is operated by Telmate, a GTL ViaPath subsidiary, and serves over 2,200 county jails. City Tele Coin serves a separate network of county jails primarily in the South. Check which provider your specific facility uses before downloading either app."
                  },
                  {
                    q: "How much does City Tele Coin cost per minute?",
                    a: "City Tele Coin phone call rates are regulated by the FCC and capped at $0.11 per minute for large facilities effective April 2026. Actual rates at your specific facility may be lower. Video visit and message costs vary by facility. Contact CTC at 318-756-1114 for current rates."
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-lg border p-4 space-y-2">
                    <p className="text-sm font-semibold text-foreground">{item.q}</p>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="border-t pt-6">
              <Link
                href="/provider/city-tele-coin"
                className="text-sm text-primary hover:underline"
              >
                View full City Tele Coin provider guide
              </Link>
            </div>

          </div>
        </PageWrapper>
      </section>
    </>
  )
}
