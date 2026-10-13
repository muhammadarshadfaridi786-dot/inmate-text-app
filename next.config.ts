import type { NextConfig } from "next"

// ─────────────────────────────────────────────────────────────────────────────
// Content-Security-Policy
//
// next/font/google self-hosts fonts at build time, so fonts.googleapis.com and
// fonts.gstatic.com are NOT needed at runtime — only 'self' for font-src.
//
// Mailchimp subscriptions go through the internal /api/subscribe route, so no
// external Mailchimp domain is needed in form-action or connect-src.
//
// unsafe-inline is required for script-src because:
//   • Next.js injects inline hydration scripts
//   • GoogleAnalytics and MicrosoftClarity components inject inline <Script> tags
// unsafe-inline is required for style-src because:
//   • Next.js injects inline critical CSS during hydration
// ─────────────────────────────────────────────────────────────────────────────
const CSP = [
  "default-src 'self'",
  [
    "script-src",
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://www.clarity.ms",
    "https://pagead2.googlesyndication.com",
    "https://partner.googleadservices.com",
    "https://www.highrevenueformat.com",
    "https://*.profitableratecpmnetwork.com",
    // Adsterra native banner ad-serving + tracking domains (proven by
    // browser console CSP errors: ntv.json + pixel + stats endpoints).
    "https://protrafficinspector.com",
    "https://*.protrafficinspector.com",
    "https://sleepoverlimitprofound.com",
    "https://*.sleepoverlimitprofound.com",
    "https://fizzyacerbitymellow.com",
    "https://*.fizzyacerbitymellow.com",
    "https://consumeririssalary.com",
    "https://*.consumeririssalary.com",
    "https://cdn.cloudvideosa.com",
    "https://*.cdn.cloudvideosa.com",
  ].join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  [
    "connect-src",
    "'self'",
    "https://*.supabase.co",
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://stats.g.doubleclick.net",
    "https://www.clarity.ms",
    "https://c.clarity.ms",
    "https://t.clarity.ms",
    "https://pagead2.googlesyndication.com",
    "https://www.highrevenueformat.com",
    "https://*.profitableratecpmnetwork.com",
    // Adsterra native banner ad-serving + tracking domains (proven by
    // browser console CSP errors) + AdSense traffic-quality endpoint.
    "https://protrafficinspector.com",
    "https://*.protrafficinspector.com",
    "https://sleepoverlimitprofound.com",
    "https://*.sleepoverlimitprofound.com",
    "https://fizzyacerbitymellow.com",
    "https://*.fizzyacerbitymellow.com",
    "https://consumeririssalary.com",
    "https://*.consumeririssalary.com",
    "https://cdn.cloudvideosa.com",
    "https://*.cdn.cloudvideosa.com",
    "https://epl.adtrafficquality.google",
  ].join(" "),
  "frame-src 'self' https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ")

const SECURITY_HEADERS = [
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Deny embedding in any iframe (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Limit referrer to origin only when crossing origins
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable features this site does not use
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
  { key: "Content-Security-Policy", value: CSP },
]

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@base-ui/react"],
  },
  async headers() {
    return [
      // Security headers on every response
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
      // Prevent search engines from indexing API routes
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ]
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      {
        source: '/facility/butner-federal-correctional-complex',
        destination: '/facility/federal-correctional-complex-butner',
        permanent: true,
      },
      {
        source: '/facility/metropolitan-detention-center-brooklyn',
        destination: '/facility/mdc-brooklyn',
        permanent: true,
      },
      {
        source: '/facility/mens-central-jail-los-angeles',
        destination: '/facility/los-angeles-county-mens-central-jail',
        permanent: true,
      },
      {
        source: '/facility/pre-trial-detention-center-miami',
        destination: '/facility/federal-detention-center-miami',
        permanent: true,
      },
      {
        source: '/facility/harris-county-jail-baker-street-annex',
        destination: '/county/harris-county',
        permanent: true,
      },
      {
        source: '/facility/brooklyn-detention-complex',
        destination: '/facility/mdc-brooklyn',
        permanent: true,
      },
      {
        source: '/facility/rikers-island-amkc',
        destination: '/facility/rikers-island',
        permanent: true,
      },
      {
        source: '/facility/twin-towers-correctional-facility',
        destination: '/facilities',
        permanent: true,
      },
      {
        source: '/facility/fdc-houston',
        destination: '/facility/federal-detention-center-houston',
        permanent: true,
      },
      {
        source: '/facility/joseph-v-conte-facility',
        destination: '/state/california',
        permanent: true,
      },
      {
        source: '/federal-prisons',
        destination: '/facilities',
        permanent: false,
      },
      {
        source: '/state-prisons',
        destination: '/facilities',
        permanent: false,
      },
      {
        source: '/county-jails',
        destination: '/facilities',
        permanent: false,
      },
      {
        source: '/private-prisons',
        destination: '/facilities',
        permanent: false,
      },
      {
        source: '/facility/california-state-prison-los-angeles-county',
        destination: '/state/california',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
