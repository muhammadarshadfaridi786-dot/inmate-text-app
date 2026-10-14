import type { Metadata } from "next"
import { absoluteUrl } from "./utils"

const SITE_NAME = "Inmate Text App"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
export const DEFAULT_OG_IMAGE = absoluteUrl("/og")

const GSC_TOKEN = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const BING_TOKEN = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: Find Prison Communication Options`,
    template: `%s`,
  },
  description:
    "Find inmate messaging, video visitation, and communication options at US prisons and jails. Compare providers and learn how prison communication works.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
  ...(GSC_TOKEN || BING_TOKEN
    ? {
        verification: {
          ...(GSC_TOKEN ? { google: GSC_TOKEN } : {}),
          ...(BING_TOKEN ? { other: { "msvalidate.01": BING_TOKEN } } : {}),
        },
      }
    : {}),
}

export function generateStateMetadata(state: {
  name: string
  slug: string
  seoTitle?: string
  seoDescription?: string
}): Metadata {
  const title = state.seoTitle ?? `${state.name} Prison Communication Guide`
  const description = state.seoDescription ?? `Find messaging, phone calls, video visits, and money transfer options for correctional facilities in ${state.name}. Compare providers and discover which services are available.`
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/state/${state.slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/state/${state.slug}` },
  }
}

export function generateCountyMetadata(county: {
  name: string
  slug: string
  seoTitle?: string
  description?: string
}): Metadata {
  const title = county.seoTitle ?? `${county.name} Jail Communication Guide`
  const description = county.description ?? `${county.name} jail and prison communication guide. Find messaging, video visitation, and phone options for ${county.name} correctional facilities.`
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/county/${county.slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/county/${county.slug}` },
  }
}

export function generateFacilityMetadata(facility: {
  name: string
  slug: string
  seoTitle?: string
  seoDescription?: string
}): Metadata {
  const title =
    facility.seoTitle ?? `${facility.name}: Communication Guide`
  const description =
    facility.seoDescription ??
    `${facility.name} communication guide. Find messaging, video visitation, phone calls, and photo sharing options. Compare available providers.`
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/facility/${facility.slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/facility/${facility.slug}` },
  }
}

export function generateProviderMetadata(provider: {
  name: string
  slug: string
  tagline?: string
  description?: string
  seoTitle?: string
  seoDescription?: string
}): Metadata {
  const title =
    provider.seoTitle ??
    (provider.tagline
      ? provider.tagline
      : `${provider.name}: Inmate Communication Guide`)
  const description =
    provider.seoDescription ??
    provider.description ??
    `${provider.name} helps families stay connected with incarcerated loved ones. Learn about messaging, video calls, phone, and pricing.`
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/provider/${provider.slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/provider/${provider.slug}` },
  }
}

export function generateCompareMetadata(
  slugA: string,
  slugB: string,
  nameA: string,
  nameB: string,
  overrides?: { seoTitle?: string; seoDescription?: string }
): Metadata {
  const title =
    overrides?.seoTitle ?? `${nameA} vs ${nameB}: Features, Cost and Coverage`
  const description =
    overrides?.seoDescription ??
    `${nameA} vs ${nameB}: compare features, pricing, availability, and apps to find the best inmate communication service.`
  const path = `/compare/${slugA}-vs-${slugB}`
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: path },
  }
}

export function generateGlossaryMetadata(term: {
  term: string
  slug: string
  definition: string
  seoTitle?: string
  seoDescription?: string
}): Metadata {
  const title = term.seoTitle ?? `What Is ${term.term}? Definition and Guide`
  const fallback = term.definition.slice(0, 160)
  const cutAt = fallback.lastIndexOf(" ")
  const description = term.seoDescription ?? (cutAt > 100 ? fallback.slice(0, cutAt) : fallback)
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/glossary/${term.slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/glossary/${term.slug}` },
  }
}

export function generateGuideMetadata(post: {
  title: string
  slug: string
  excerpt: string
  seoTitle?: string
  seoDescription?: string
}): Metadata {
  const title = post.seoTitle ?? post.title
  const description = post.seoDescription ?? post.excerpt
  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      url: `/guides/${post.slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/guides/${post.slug}` },
  }
}

export function generateHubMetadata(
  feature: string,
  displayName: string
): Metadata {
  const title = `${displayName}: How It Works, Providers and Setup Guide`
  const description = `Learn how ${displayName.toLowerCase()} works for inmates. Find which prisons offer ${displayName.toLowerCase()}, compare providers, and discover how to get started.`
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${feature}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/${feature}` },
  }
}

export function generateFacilityTypeMetadata(
  type: string,
  displayName: string
): Metadata {
  const title = `${displayName} Communication Directory: Find Phone, Messaging and Video Options`
  const description = `Browse all ${displayName.toLowerCase()} in the United States. Find communication providers, messaging options, and video visitation availability.`
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${type}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/${type}` },
  }
}
