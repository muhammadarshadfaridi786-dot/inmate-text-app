import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/components/providers/ThemeProvider"
import { AuthProvider } from "@/components/providers/AuthProvider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import JsonLd from "@/components/seo/JsonLd"
import { buildOrganizationSchema } from "@/lib/schema"
import { defaultMetadata } from "@/lib/seo"
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics"
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity"
import LazyEmailCapturePopup from "@/components/auth/LazyEmailCapturePopup"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main className="flex-1" id="main-content">
              {children}
            </main>
            <Footer />
            <LazyEmailCapturePopup />
          </AuthProvider>
        </ThemeProvider>
        <JsonLd schema={buildOrganizationSchema()} />
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9557213236769822"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://pl31408495.profitableratecpmnetwork.com/18/29/eb/1829eb983050bfebb54af02ef95d0b3b.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

