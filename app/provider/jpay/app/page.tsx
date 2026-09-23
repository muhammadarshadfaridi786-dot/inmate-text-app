import type { Metadata } from "next"
import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import Breadcrumb from "@/components/layout/Breadcrumb"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "JPay App Download: iOS and Android Guide for Inmates and Families",
  description: "Download the JPay app free for iOS and Android. How to login to JPay, send money, set up email for inmates, and fix JPay app not working. Step-by-step guide.",
  alternates: { canonical: "/provider/jpay/app" },
}

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JPay",
  description: "JPay app for sending money, email messaging, video visits, and photos to state prison inmates. Free on iOS and Android. Developed by JPay LLC.",
  operatingSystem: "Android, iOS",
  applicationCategory: "FinanceApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.87",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "100000",
  },
  downloadUrl: "https://play.google.com/store/apps/details?id=com.brisk.jpay",
  installUrl: "https://apps.apple.com/us/app/jpay/id584959322",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a JPay app for inmates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The JPay app is available free for iOS and Android. Families use it to send money, email messages, photos, and schedule video visits with incarcerated loved ones at state prisons. The app is published by JPay LLC and Jpay Mobile.",
      },
    },
    {
      "@type": "Question",
      name: "How do I download the JPay app for Android free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open Google Play Store on your Android device and search for JPay. Select the app published by Jpay Mobile and tap Install. The app is free to download. You must be 18 or older to use the JPay app per requirements effective January 2026.",
      },
    },
    {
      "@type": "Question",
      name: "How do I download the JPay app for iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the Apple App Store on your iPhone and search for JPay. Select the app published by JPay LLC and tap Get. The app is free. You must confirm you are 18 or older per requirements effective December 2025.",
      },
    },
    {
      "@type": "Question",
      name: "How do I login to JPay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the JPay app or go to jpay.com. Enter your registered email address and password and tap Login. If you forgot your password tap Forgot Password. For account help call JPay customer service at 1-800-574-5729.",
      },
    },
    {
      "@type": "Question",
      name: "How do I send money on the JPay app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the JPay app and log in. Tap Send Money and select the facility and inmate. Enter the amount and pay by debit or credit card. Funds are typically credited to the inmate trust account within one to two business days. JPay accepts Visa, Mastercard, and money orders.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the JPay app not working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common JPay app issues include login errors, payment failures, and video visit problems. First check your internet connection. Try uninstalling and reinstalling the app. Make sure your age is verified in your App Store or Google Play account since JPay requires 18-plus verification as of late 2025. If the problem continues call JPay support at 1-800-574-5729.",
      },
    },
    {
      "@type": "Question",
      name: "What is JPay email for inmates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPay email is the electronic messaging system for state prison inmates. You purchase JPay stamps to send messages. Each stamp costs between $0.33 and $0.47 and sends one message. Attach photos for one additional stamp each. Messages are reviewed by staff before delivery. JPay email only works at state prisons, not federal prisons.",
      },
    },
  ],
}

export default function JPayAppPage() {
  const breadcrumbItems = [
    { label: "Providers", href: "/providers" },
    { label: "JPay", href: "/provider/jpay" },
    { label: "App Download" },
  ]

  return (
    <>
      <JsonLd schema={appSchema} />
      <JsonLd schema={faqSchema} />

      <section className="border-b bg-gradient-to-b from-primary/5 to-background py-10">
        <PageWrapper>
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              JPay App Download: iOS and Android Guide
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The JPay app is free on iOS and Android. Use it to send money, email messages, photos, and schedule video visits with incarcerated loved ones at state prisons across 35 states.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com/us/app/jpay/id584959322"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-black/80 transition-colors"
              >
                Download JPay for iPhone (iOS)
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.brisk.jpay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 text-white px-6 py-3 text-sm font-semibold hover:bg-green-800 transition-colors"
              >
                Download JPay for Android
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Free to download. Age verification 18 plus required. Charges apply for stamps, money transfers, and video visits.
            </p>
          </div>
        </PageWrapper>
      </section>

      <section className="py-12">
        <PageWrapper>
          <div className="max-w-2xl space-y-10">

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">What Is the JPay App for Inmates?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The JPay app is the mobile version of the JPay platform published by JPay LLC and Jpay Mobile. It lets families of state prison inmates send money, email messages, photos, and schedule video visits from their smartphone. JPay has been downloaded over 8.4 million times on Android alone and serves state prisons in over 35 states including Florida, Georgia, Michigan, Colorado, and Indiana.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                JPay is not the same as CorrLinks. JPay serves state prisons only. If your loved one is in a federal Bureau of Prisons facility, you need CorrLinks for messaging and ConnectNetwork for phone calls, not JPay. Use our facility directory to confirm which provider serves your specific facility before downloading any app.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">How to Download JPay App for Android Free</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>1. Open the Google Play Store on your Android device.</p>
                <p>2. Search for <strong className="text-foreground">JPay</strong>.</p>
                <p>3. Select the app published by <strong className="text-foreground">Jpay Mobile</strong>.</p>
                <p>4. Tap <strong className="text-foreground">Install</strong>. The app is free to download.</p>
                <p>5. Open the app and verify your age. JPay requires users to be 18 or older as of January 2026.</p>
                <p>6. Log in with your JPay account email and password or create a free account.</p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.brisk.jpay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 text-white px-5 py-2.5 text-sm font-medium hover:bg-green-800 transition-colors"
              >
                Download JPay for Android
              </a>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">How to Download JPay App for iPhone (iOS)</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>1. Open the App Store on your iPhone or iPad.</p>
                <p>2. Search for <strong className="text-foreground">JPay</strong>.</p>
                <p>3. Select the app published by <strong className="text-foreground">JPay LLC</strong>.</p>
                <p>4. Tap <strong className="text-foreground">Get</strong>. The app is free.</p>
                <p>5. Verify your age in your Apple ID settings. JPay requires 18 plus verification as of December 2025.</p>
                <p>6. Log in or create a free JPay account to begin.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/jpay/id584959322"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-black/80 transition-colors"
              >
                Download JPay for iPhone
              </a>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">How to Login to JPay App</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open the JPay app and enter your registered email address and password. Tap Login. If you forgot your password tap Forgot Password and follow the reset instructions sent to your email. For account help call JPay customer service at 1-800-574-5729. You can also log in through the JPay website at jpay.com without age verification.
              </p>
              <div className="rounded-lg border p-4 space-y-1">
                <p className="text-sm font-medium text-foreground">JPay Customer Service</p>
                <p className="text-sm text-muted-foreground">Phone: 1-800-574-5729</p>
                <p className="text-sm text-muted-foreground">Website: jpay.com</p>
                <p className="text-sm text-muted-foreground">Note: Age 18 plus required for app access since December 2025</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">How to Send Money on the JPay App</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Log in to the JPay app. Tap Send Money and select the state and facility where your loved one is incarcerated. Enter their name and DOC number to find them. Enter the amount you want to send and choose a payment method. JPay accepts Visa, Mastercard debit and credit cards. Transaction fees apply, typically 2.75 percent of the amount or $2.95 whichever is greater. Funds are credited to the inmate trust account within one to two business days.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">What Is JPay Email for Inmates?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                JPay email is the electronic messaging system for state prison inmates accessible through the JPay app. You purchase JPay stamps to send messages. Each stamp costs between $0.33 and $0.47 depending on the state and sends one standard message. Attaching a photo requires one additional stamp per photo. Messages are reviewed by facility staff before delivery. JPay email only works at state prisons, not federal prisons. Federal inmates use CorrLinks for messaging.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">JPay App Not Working: How to Fix</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Login problems:</strong> Reset your password at jpay.com. The website works without age verification if the app is blocked.</p>
                <p><strong className="text-foreground">Age verification error:</strong> Open your Apple ID or Google account settings and add your birth date to confirm you are 18 or older. This requirement started December 2025 for iOS and January 2026 for Android.</p>
                <p><strong className="text-foreground">App crashing:</strong> Uninstall and reinstall the JPay app. Make sure your phone software is up to date. JPay requires Android 9.0 or higher.</p>
                <p><strong className="text-foreground">Payment not going through:</strong> Check that your card is not flagged as a cash advance. Use a debit card to avoid cash advance fees from your bank.</p>
                <p><strong className="text-foreground">Video visit not connecting:</strong> Check your internet connection and camera permissions. Report failed visits immediately to JPay at 1-800-574-5729 with your confirmation number for a credit.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">JPay App Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Send Money", desc: "Transfer funds to inmate trust accounts at state prisons across 35 states." },
                  { title: "JPay Email", desc: "Send messages and photos using JPay stamps. One stamp per message." },
                  { title: "Video Visits", desc: "Schedule and attend video visits from home without traveling to the facility." },
                  { title: "Photo Sharing", desc: "Send photos with JPay email messages at facilities that support it." },
                  { title: "Account History", desc: "View all past transactions, messages, and communications in one place." },
                  { title: "Free to Download", desc: "JPay app is free on iOS and Android. Charges apply for stamps, transfers, and visits." },
                ].map((f) => (
                  <div key={f.title} className="rounded-lg border p-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">JPay App: Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is there a JPay app for inmates?",
                    a: "Yes. The JPay app is available free for iOS and Android. Families use it to send money, email, photos, and schedule video visits. The app is published by JPay LLC and Jpay Mobile. JPay serves state prisons only, not federal prisons."
                  },
                  {
                    q: "How do I download JPay app for Android free?",
                    a: "Open Google Play Store, search for JPay, select the Jpay Mobile app, and tap Install. Free to download. Age 18 plus verification required as of January 2026. Android 9.0 or higher required."
                  },
                  {
                    q: "How do I login to JPay?",
                    a: "Open the JPay app, enter your email and password, and tap Login. Forgot password link is available on the login screen. For help call 1-800-574-5729. You can also login at jpay.com without app age verification."
                  },
                  {
                    q: "Why is the JPay app not working?",
                    a: "Most JPay app issues are caused by age verification not being set up. Open your Apple ID or Google Play account settings and confirm your birthdate shows 18 or older. Also try uninstalling and reinstalling the app. For persistent problems call 1-800-574-5729."
                  },
                  {
                    q: "What is the new JPay app for inmates?",
                    a: "JPay updated its app with new age verification requirements starting December 2025 for iOS and January 2026 for Android. Users must confirm they are 18 or older through their Apple ID or Google account settings before the app will work. This is a security requirement, not a JPay data collection effort."
                  },
                  {
                    q: "How do I put money on JPay app?",
                    a: "Log in to the JPay app, tap Send Money, select the facility and inmate, enter the amount, and pay by debit or credit card. Transaction fees apply. Funds are credited within one to two business days. JPay accepts Visa and Mastercard."
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-lg border p-4 space-y-2">
                    <p className="text-sm font-semibold text-foreground">{item.q}</p>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <Link
                href="/provider/jpay"
                className="text-sm text-primary hover:underline"
              >
                View full JPay provider guide
              </Link>
            </div>

          </div>
        </PageWrapper>
      </section>
    </>
  )
}
