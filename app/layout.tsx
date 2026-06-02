import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/components/providers/ThemeProvider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import JsonLd from "@/components/seo/JsonLd"
import { buildOrganizationSchema } from "@/lib/schema"
import { defaultMetadata } from "@/lib/seo"
import EmailCapturePopup from "@/components/auth/EmailCapturePopup"
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics"
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
          <EmailCapturePopup />
        </ThemeProvider>
        <JsonLd schema={buildOrganizationSchema()} />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  )
}
