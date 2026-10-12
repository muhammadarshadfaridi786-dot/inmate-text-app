import type { MetadataRoute } from "next"
import { ALL_STATES } from "@/lib/data/states"
import { ALL_COUNTIES } from "@/lib/data/counties"
import { ALL_FACILITIES } from "@/lib/data/facilities"
import { ALL_PROVIDERS } from "@/lib/data/providers"
import { ALL_COMPARISONS } from "@/lib/data/comparisons"
import { TERM_DETAILS } from "@/lib/data/glossary"
import { GUIDE_DETAILS } from "@/lib/data/guides"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

  const stateEntries: MetadataRoute.Sitemap = ALL_STATES
    .filter((s) => s.hasDetailPage)
    .map((s) => ({
      url: `${siteUrl}/state/${s.slug}`,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "monthly",
      priority: 0.85,
    }))

  const countyEntries: MetadataRoute.Sitemap = ALL_COUNTIES
    .filter((c) => c.hasDetailPage)
    .map((c) => ({
      url: `${siteUrl}/county/${c.slug}`,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "monthly",
      priority: 0.75,
    }))

  // Facility slugs that 308-redirect to a canonical page (see redirects() in next.config.ts).
  // Listing them in the sitemap wastes crawl budget, so only canonical URLs go out.
  const REDIRECTED_FACILITY_SLUGS = new Set([
    "metropolitan-detention-center-brooklyn",
    "mens-central-jail-los-angeles",
    "fdc-houston",
    "state-correctional-institution-phoenix",
    "pre-trial-detention-center-miami",
    "harris-county-jail-baker-street-annex",
    "brooklyn-detention-complex",
    "rikers-island-amkc",
    "twin-towers-correctional-facility",
    "california-state-prison-los-angeles-county",
  ])
  const facilityEntries: MetadataRoute.Sitemap = ALL_FACILITIES
    .filter((f) => f.hasDetailPage && !REDIRECTED_FACILITY_SLUGS.has(f.slug))
    .map((f) => ({
      url: `${siteUrl}/facility/${f.slug}`,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    }))

  const providerEntries: MetadataRoute.Sitemap = [
    ...ALL_PROVIDERS
      .filter((p) => p.hasDetailPage)
      .map((p) => ({
        url: `${siteUrl}/provider/${p.slug}`,
        lastModified: new Date("2026-09-08"),
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
    {
      url: `${siteUrl}/provider/city-tele-coin/app`,
      lastModified: new Date("2026-09-24"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/provider/jpay/app`,
      lastModified: new Date("2026-09-24"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  const comparisonEntries: MetadataRoute.Sitemap = ALL_COMPARISONS.map((c) => ({
    url: `${siteUrl}/compare/${c.slug}`,
    lastModified: new Date("2026-09-08"),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const glossaryEntries: MetadataRoute.Sitemap = Object.values(TERM_DETAILS).map((t) => ({
    url: `${siteUrl}/glossary/${t.slug}`,
    lastModified: new Date("2026-09-08"),
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  const guideEntries: MetadataRoute.Sitemap = Object.values(GUIDE_DETAILS).map((g) => ({
    url: `${siteUrl}/guides/${g.slug}`,
    lastModified: new Date(g.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    // Core
    {
      url: siteUrl,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "daily",
      priority: 1,
    },

    // Communication hubs
    { url: `${siteUrl}/messaging`,       lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/video-calls`,     lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/phone-calls`,     lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/photo-sharing`,   lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.85 },
    { url: `${siteUrl}/money-transfer`,  lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.85 },

    // Directory index pages
    { url: `${siteUrl}/states`,     lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/counties`,   lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/facilities`, lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/providers`,  lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/compare`,    lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.85 },
    { url: `${siteUrl}/glossary`,   lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/guides`,     lastModified: new Date("2026-09-08"), changeFrequency: "weekly", priority: 0.9 },

    // Entity pages
    ...stateEntries,
    ...countyEntries,
    ...facilityEntries,
    ...providerEntries,
    ...comparisonEntries,
    ...glossaryEntries,
    ...guideEntries,

    // Trust and information pages
    { url: `${siteUrl}/about`,      lastModified: new Date("2026-09-01"), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${siteUrl}/contact`,    lastModified: new Date("2026-09-01"), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${siteUrl}/privacy`,    lastModified: new Date("2026-09-01"), changeFrequency: "yearly",  priority: 0.4 },
    { url: `${siteUrl}/terms`,      lastModified: new Date("2026-09-01"), changeFrequency: "yearly",  priority: 0.4 },
    { url: `${siteUrl}/disclaimer`, lastModified: new Date("2026-09-01"), changeFrequency: "yearly",  priority: 0.4 },
  ]
}
