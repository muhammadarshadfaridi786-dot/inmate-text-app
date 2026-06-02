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
  ].join(" "),
  "style-src 'self' 'unsafe-inline'",
  // data: for Next.js base64 image optimisation; https: covers provider logos
  "img-src 'self' data: https:",
  "font-src 'self'",
  [
    "connect-src",
    "'self'",
    // Supabase auth and database
    "https://*.supabase.co",
    // Google Analytics
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://stats.g.doubleclick.net",
    // Microsoft Clarity
    "https://www.clarity.ms",
    "https://c.clarity.ms",
    "https://t.clarity.ms",
  ].join(" "),
  // No iframes anywhere on the site
  "frame-src 'none'",
  // No Flash, Java applets, or plugins
  "object-src 'none'",
  // Prevent <base> tag injection
  "base-uri 'self'",
  // Form submissions stay on our domain
  "form-action 'self'",
  // Only upgrade insecure requests; do not block mixed content outright
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
}

export default nextConfig
