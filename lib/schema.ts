import { absoluteUrl } from "./utils"
import type { BreadcrumbItem, FaqItem, JsonLdSchema } from "@/types"

const SITE_NAME = "Inmate Text App"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export function buildOrganizationSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/og/logo"),
    description:
      "Prison communication discovery platform helping families find messaging, video, and phone options at correctional facilities across the United States.",
    sameAs: [],
  }
}

export function buildWebSiteSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  }
}

export function buildFaqSchema(faqs: FaqItem[]): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

export function buildWebPageSchema(
  title: string,
  description: string,
  path: string
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
  }
}

export function buildFacilitySchema(facility: {
  name: string
  description: string
  slug: string
  address?: string
  operatedBy?: string
  established?: number
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: facility.name,
    description: facility.description,
    url: absoluteUrl(`/facility/${facility.slug}`),
    ...(facility.address
      ? { address: { "@type": "PostalAddress", streetAddress: facility.address } }
      : {}),
    ...(facility.operatedBy
      ? { containedInPlace: { "@type": "Organization", name: facility.operatedBy } }
      : {}),
    ...(facility.established ? { foundingDate: String(facility.established) } : {}),
  }
}

export function buildProviderSchema(provider: {
  name: string
  description: string
  slug: string
  website?: string
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: provider.name,
    description: provider.description,
    url: absoluteUrl(`/provider/${provider.slug}`),
    ...(provider.website ? { sameAs: [provider.website] } : {}),
  }
}

export function buildArticleSchema(guide: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt: string
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: absoluteUrl(`/guides/${guide.slug}`),
    image: absoluteUrl("/og"),
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/og/logo"),
      },
    },
  }
}

export function buildGlossarySchema(term: {
  term: string
  slug: string
  definition: string
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: absoluteUrl(`/glossary/${term.slug}`),
    termCode: term.slug,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Prison Communication Glossary",
      url: absoluteUrl("/glossary"),
    },
  }
}

export function buildItemListSchema(
  items: Array<{ name: string; url: string }>
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  }
}

export function buildHubSchema(feature: string, displayName: string): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${displayName} for Inmates`,
    description: `Directory of correctional facilities offering ${displayName.toLowerCase()} and the providers that support them.`,
    url: absoluteUrl(`/${feature}`),
  }
}

export function buildCompareSchema(
  providerA: { name: string; slug: string },
  providerB: { name: string; slug: string }
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    about: [
      {
        "@type": "Organization",
        name: providerA.name,
        url: absoluteUrl(`/provider/${providerA.slug}`),
      },
      {
        "@type": "Organization",
        name: providerB.name,
        url: absoluteUrl(`/provider/${providerB.slug}`),
      },
    ],
  }
}
