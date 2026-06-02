# Inmate Text App — SEO Architecture

## Overview

SEO-first architecture built for topical authority, programmatic scale, and long-term organic growth. Every route, schema, and internal link decision is made with search intent in mind.

Target: become the leading topical authority for prison communication discovery in the United States.

---

## 1. URL Architecture

All public URLs are slug-based. No query parameters on indexable pages.

### Homepage

| URL | Intent |
|---|---|
| `/` | Brand + discovery entry point |

---

### State Pages

| URL | Intent | Example |
|---|---|---|
| `/state/[slug]` | State-level facility discovery | `/state/california` |
| `/state/[slug]/messaging` | Messaging by state | `/state/california/messaging` |
| `/state/[slug]/video-calls` | Video visitation by state | `/state/texas/video-calls` |
| `/state/[slug]/photo-sharing` | Photo sharing by state | `/state/florida/photo-sharing` |
| `/state/[slug]/money-transfer` | Money transfer by state | `/state/new-york/money-transfer` |
| `/state/[slug]/phone-calls` | Phone calls by state | `/state/ohio/phone-calls` |

**Scale:** 50 states × 6 routes = **300 static pages**

---

### County Pages

| URL | Intent | Example |
|---|---|---|
| `/county/[slug]` | County-level facility discovery | `/county/los-angeles-county` |
| `/county/[slug]` | County jail and prison finder | `/county/harris-county` |

**Scale:** ~3,000+ county pages (grows with DB)

---

### Facility Pages

| URL | Intent | Example |
|---|---|---|
| `/facility/[slug]` | Individual facility communication guide | `/facility/san-quentin-state-prison` |

**Scale:** 7,000+ facilities across the US

---

### Facility Type Hubs

| URL | Intent | Example |
|---|---|---|
| `/federal-prisons` | All federal prisons directory | `/federal-prisons` |
| `/federal-prisons/[state-slug]` | Federal prisons by state | `/federal-prisons/california` |
| `/state-prisons` | All state prisons directory | `/state-prisons` |
| `/state-prisons/[state-slug]` | State prisons by state | `/state-prisons/texas` |
| `/county-jails` | All county jails directory | `/county-jails` |
| `/county-jails/[state-slug]` | County jails by state | `/county-jails/florida` |
| `/private-prisons` | All private prisons directory | `/private-prisons` |

---

### Provider Pages

| URL | Intent | Example |
|---|---|---|
| `/providers` | All providers index | `/providers` |
| `/providers/[slug]` | Provider overview | `/providers/jpay` |
| `/providers/[slug]/review` | Full provider review | `/providers/jpay/review` |
| `/providers/[slug]/pricing` | Provider pricing breakdown | `/providers/jpay/pricing` |
| `/providers/[slug]/facilities` | Facilities served by provider | `/providers/jpay/facilities` |

**Scale:** 6 providers × 5 routes = **30 static pages** (grows as providers expand)

---

### Comparison Pages

| URL | Intent | Example |
|---|---|---|
| `/compare` | Comparison hub — popular matchups | `/compare` |
| `/compare/[slug-a]-vs-[slug-b]` | Side-by-side provider comparison | `/compare/jpay-vs-corrlinks` |

**Examples:**
- `/compare/jpay-vs-corrlinks`
- `/compare/jpay-vs-connectnetwork`
- `/compare/jpay-vs-securus`
- `/compare/corrlinks-vs-gettingout`
- `/compare/securus-vs-gtl`
- `/compare/icsolutions-vs-pigeonly`

---

### Communication Hub Pages

| URL | Intent | Example |
|---|---|---|
| `/messaging` | Inmate messaging hub | `/messaging` |
| `/messaging/facilities` | All facilities with messaging | `/messaging/facilities` |
| `/video-calls` | Video visitation hub | `/video-calls` |
| `/video-calls/facilities` | All facilities with video | `/video-calls/facilities` |
| `/photo-sharing` | Photo sharing hub | `/photo-sharing` |
| `/photo-sharing/facilities` | All facilities with photos | `/photo-sharing/facilities` |
| `/phone-calls` | Phone calls hub | `/phone-calls` |
| `/phone-calls/facilities` | All facilities with phone | `/phone-calls/facilities` |
| `/money-transfer` | Money transfer hub | `/money-transfer` |
| `/money-transfer/facilities` | All facilities with money transfer | `/money-transfer/facilities` |

---

### Educational Guides

| URL | Intent | Example |
|---|---|---|
| `/learn` | Guide index | `/learn` |
| `/learn/[slug]` | Individual guide | `/learn/how-to-send-jpay-message` |

**Example guide slugs:**
- `/learn/how-to-send-jpay-message`
- `/learn/how-to-set-up-video-visitation`
- `/learn/california-prison-communication-guide`
- `/learn/federal-prison-communication-rules`
- `/learn/jpay-complete-guide`
- `/learn/gtl-inmate-calling-guide`

---

### Glossary Pages

| URL | Intent | Example |
|---|---|---|
| `/glossary` | Full A–Z glossary index | `/glossary` |
| `/glossary/[slug]` | Term definition page | `/glossary/jpay-stamps` |

**Example term slugs:**
- `/glossary/jpay-stamps`
- `/glossary/video-visitation`
- `/glossary/commissary`
- `/glossary/federal-prison`
- `/glossary/state-prison`
- `/glossary/county-jail`
- `/glossary/inmate-messaging`
- `/glossary/corrlinks-email`
- `/glossary/money-transfer`
- `/glossary/photo-sharing`

---

## 2. Topical Authority Structure

The site is organized into eight content clusters. Each cluster reinforces the others through internal linking, building a dense topical authority graph.

### Cluster Map

```
                        ┌─────────────────────────────┐
                        │         HOMEPAGE              │
                        └──────────────┬──────────────┘
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
   STATE CLUSTER               PROVIDER CLUSTER              FEATURE CLUSTER
   /state/[slug]               /providers/[slug]             /messaging
   /state/[slug]/messaging     /providers/[slug]/review      /video-calls
   /state/[slug]/video-calls   /providers/[slug]/pricing     /photo-sharing
        │                      /providers/[slug]/facilities  /money-transfer
        │                              │                     /phone-calls
   COUNTY CLUSTER             COMPARISON CLUSTER                  │
   /county/[slug]             /compare/[a]-vs-[b]           FEATURE DIRECTORIES
        │                              │                     /messaging/facilities
   FACILITY CLUSTER                   │                     /video-calls/facilities
   /facility/[slug]          EDUCATIONAL CLUSTER
   /federal-prisons           /learn/[slug]
   /state-prisons                      │
   /county-jails             GLOSSARY CLUSTER
   /private-prisons           /glossary/[slug]
```

---

### State Cluster

**Hub:** `/state/[slug]`

**Sub-pages:** `/state/[slug]/messaging`, `/video-calls`, `/photo-sharing`, `/money-transfer`, `/phone-calls`

**Target keywords:**
- "prisons in California"
- "California inmate messaging"
- "Texas prison video visitation"
- "Florida county jail communication"

**Connects to:** County Cluster → Facility Cluster → Provider Cluster → Feature Cluster

---

### County Cluster

**Hub:** `/county/[slug]`

**Target keywords:**
- "Los Angeles County jail communication"
- "Harris County inmate messaging"
- "Cook County detention center contact"

**Connects to:** State Cluster → Facility Cluster → Provider Cluster

---

### Facility Cluster

**Hub:** `/facility/[slug]`

**Sub-hubs:** `/federal-prisons`, `/state-prisons`, `/county-jails`, `/private-prisons`

**Target keywords:**
- "San Quentin messaging"
- "Rikers Island communication"
- "Attica video visitation"
- "federal prisons in California"

**Connects to:** State Cluster → County Cluster → Provider Cluster → Feature Cluster → Glossary Cluster

---

### Provider Cluster

**Hub:** `/providers/[slug]`

**Sub-pages:** `/review`, `/pricing`, `/facilities`

**Target keywords:**
- "JPay review"
- "JPay pricing"
- "Securus video visitation"
- "GTL inmate calling"
- "CorrLinks email"

**Connects to:** Facility Cluster → Comparison Cluster → Feature Cluster → Educational Cluster

---

### Comparison Cluster

**Hub:** `/compare`

**Pages:** `/compare/[a]-vs-[b]`

**Target keywords:**
- "JPay vs CorrLinks"
- "Securus vs GTL"
- "best inmate messaging app"
- "cheapest prison phone service"

**Connects to:** Provider Cluster → Educational Cluster → Glossary Cluster

---

### Glossary Cluster

**Hub:** `/glossary`

**Pages:** `/glossary/[slug]`

**Target keywords:**
- "what is a JPay stamp"
- "what is video visitation"
- "what is commissary"
- "what is inmate messaging"

**Connects to:** All clusters — glossary terms are cross-linked from every page type

---

### Educational Cluster

**Hub:** `/learn`

**Pages:** `/learn/[slug]`

**Target keywords:**
- "how to send message to inmate"
- "how to set up video visit"
- "prison communication guide"
- "federal prison rules communication"

**Connects to:** Provider Cluster → Facility Cluster → Glossary Cluster → Comparison Cluster

---

### Communication Feature Cluster

**Hubs:** `/messaging`, `/video-calls`, `/photo-sharing`, `/phone-calls`, `/money-transfer`

**Feature Directories:** `/[feature]/facilities`

**Target keywords:**
- "prisons with video visitation"
- "inmate messaging apps"
- "send photos to inmates"
- "prison money transfer"

**Connects to:** Provider Cluster → Facility Cluster → State Cluster → Glossary Cluster

---

## 3. Internal Linking Architecture

### Authority Flow

```
State
  └──> County
         └──> Facility
                └──> FacilityProvider
                       └──> Provider
                              └──> Comparison
                                     └──> Guides
                                            └──> Glossary
```

### Full Linking Matrix

| Source Page | Links To |
|---|---|
| **Homepage** | State pages, Provider pages, Communication hubs, Featured facilities, Guides |
| **State page** | County pages, Facility pages, Facility type hubs, Provider pages, Communication hub pages |
| **State sub-page** (`/state/ca/messaging`) | State hub, Facilities with that feature, Providers offering that feature, Related guide |
| **County page** | State page, Facility pages in county, Provider pages active in county, Communication hubs |
| **Facility page** | State page, County page, Provider pages, Comparison pages, Communication hubs, Guides, Glossary terms |
| **Facility type hub** (`/federal-prisons`) | Individual facility pages, State pages, Communication hubs, Related guides |
| **Provider overview** | Provider review, Provider pricing, Provider facilities, Comparison pages, State pages |
| **Provider review** | Provider overview, Comparison pages, Featured facilities, Affiliate CTA |
| **Provider facilities** | Individual facility pages, State pages, Communication hubs |
| **Comparison page** | Both provider pages, Related comparisons, Communication hubs, Guides, Glossary |
| **Communication hub** (`/messaging`) | Feature directory, Provider pages, State sub-pages, Comparison pages, Guides, Glossary |
| **Feature directory** (`/messaging/facilities`) | Individual facility pages, State pages, Communication hub |
| **Guide** | Glossary terms, Provider pages, Facility pages, State pages, Comparison pages, Communication hubs |
| **Glossary term** | Related glossary terms, Provider pages, Facility pages, Guides, Communication hubs |

### Internal Link Component Strategy

All internal links are rendered via a shared `<RelatedLinks />` component. Links are data-driven — populated from DB relationships, not hardcoded. This means every new facility, provider, or county added to the DB automatically generates correct internal links across the site without code changes.

---

## 4. Programmatic SEO Architecture

### Scale Projection

| Page Type | Current Scale | Full Scale |
|---|---|---|
| State pages | 50 | 50 |
| State sub-pages | 250 | 250 |
| County pages | 100 (seed) | 3,000+ |
| Facility pages | 20 (seed) | 7,000+ |
| Facility type hubs | 4 | 4 |
| Facility type × state | 200 (future) | 200 |
| Provider pages | 6 | 50+ |
| Provider sub-pages | 18 | 150+ |
| Comparison pages | 15 (seed) | 500+ |
| Communication hubs | 5 | 5 |
| Feature directories | 5 | 5 |
| Guides | 5 (seed) | 500+ |
| Glossary terms | 11 (seed) | 500+ |
| **Total (full scale)** | | **~12,000+ pages** |

### Static Generation Strategy

All pages use `generateStaticParams()` to pre-render at build time.

```ts
// State pages
export async function generateStaticParams() {
  const states = await prisma.state.findMany({ select: { slug: true } })
  return states.map(s => ({ slug: s.slug }))
}

// Facility pages — active only
export async function generateStaticParams() {
  const facilities = await prisma.facility.findMany({
    where: { status: 'active' },
    select: { slug: true }
  })
  return facilities.map(f => ({ slug: f.slug }))
}

// County pages
export async function generateStaticParams() {
  const counties = await prisma.county.findMany({ select: { slug: true } })
  return counties.map(c => ({ slug: c.slug }))
}

// Comparison pages
export async function generateStaticParams() {
  return SEEDED_MATCHUPS.map(([a, b]) => ({ matchup: `${a}-vs-${b}` }))
}
```

### ISR Revalidation

| Page Type | Revalidation |
|---|---|
| Homepage | 3600s (1h) |
| State pages | 86400s (24h) |
| County pages | 86400s (24h) |
| Facility pages | 86400s (24h) |
| Provider pages | 3600s (1h) |
| Comparison pages | 86400s (24h) |
| Communication hubs | 86400s (24h) |
| Feature directories | 3600s (1h) |
| Guides | 86400s (24h) |
| Glossary | 86400s (24h) |

### Future Programmatic Expansion

| Opportunity | Route Pattern | Volume |
|---|---|---|
| State × feature combinations | `/state/[slug]/[feature]` | 250 pages |
| State × facility type | `/federal-prisons/[state]` | 200 pages |
| County × feature | `/county/[slug]/messaging` | 15,000+ pages |
| City-level pages | `/city/[slug]` | 10,000+ pages |
| Provider × state | `/providers/jpay/california` | 300+ pages |
| Facility type × state × feature | `/federal-prisons/california/messaging` | 600+ pages |

---

## 5. Metadata Architecture

### Title Tag Patterns

| Page Type | Title Pattern | Example |
|---|---|---|
| Homepage | `Inmate Text App — Find Prison Communication Options` | — |
| State | `[State] Prison Communication Guide — Inmate Text App` | `California Prison Communication Guide — Inmate Text App` |
| State/messaging | `Inmate Messaging in [State] — Prisons & Providers` | `Inmate Messaging in Texas — Prisons & Providers` |
| County | `[County] Jail & Prison Communication Guide` | `Los Angeles County Jail & Prison Communication Guide` |
| Facility | `[Facility Name] — Messaging, Video & Communication Options` | `San Quentin State Prison — Messaging, Video & Communication Options` |
| Federal prisons | `Federal Prisons Directory — Communication Guide` | — |
| Provider overview | `[Provider] — Inmate Communication Review & Guide` | `JPay — Inmate Communication Review & Guide` |
| Provider review | `[Provider] Review [Year] — Pros, Cons & Pricing` | `JPay Review 2025 — Pros, Cons & Pricing` |
| Provider pricing | `[Provider] Pricing — Cost Breakdown & Fees` | `JPay Pricing — Cost Breakdown & Fees` |
| Provider facilities | `Facilities Using [Provider] — Full List` | `Facilities Using JPay — Full List` |
| Comparison | `[Provider A] vs [Provider B] — Which Is Better?` | `JPay vs CorrLinks — Which Is Better?` |
| Messaging hub | `Inmate Messaging — How It Works & Best Apps` | — |
| Feature directory | `Prisons With [Feature] — Complete Directory` | `Prisons With Video Visitation — Complete Directory` |
| Guide | `[Guide Title] — Inmate Text App` | `How to Send a JPay Message — Inmate Text App` |
| Glossary index | `Prison Communication Glossary — Inmate Text App` | — |
| Glossary term | `What Is [Term]? — Definition & Guide` | `What Is a JPay Stamp? — Definition & Guide` |

**Rule:** If `seoTitle` is set in DB, it overrides the pattern. Otherwise the pattern generates the title dynamically.

---

### Meta Description Patterns

| Page Type | Description Pattern |
|---|---|
| Homepage | `Find inmate messaging, video visitation, and communication options at prisons across the United States. Compare providers, discover facilities, and learn how prison communication works.` |
| State | `Find prisons and communication options in [State]. Compare messaging, video, and phone providers for correctional facilities across [State].` |
| State/feature | `[Feature] options at [State] prisons and jails. Find which facilities offer [feature] and which providers to use.` |
| County | `[County] jail and prison communication guide. Find messaging, video visitation, and phone options for [County] correctional facilities.` |
| Facility | `[Facility Name] communication guide. Find messaging, video visitation, phone calls, and photo sharing options. Compare available providers.` |
| Provider overview | `[Provider] helps families stay connected with incarcerated loved ones. Learn about messaging, video calls, phone, and pricing.` |
| Provider review | `Read our [Provider] review. Compare features, pricing, pros, cons, and app availability to decide if [Provider] is right for you.` |
| Comparison | `[Provider A] vs [Provider B] — compare features, pricing, availability, and apps to find the best inmate communication service.` |
| Feature hub | `Learn how [feature] works for inmates. Find which prisons offer [feature], compare providers, and discover how to get started.` |
| Feature directory | `Complete directory of prisons and jails with [feature] available. Filter by state and compare communication providers.` |
| Guide | `[Guide excerpt — pulled from excerpt field in BlogPost model]` |
| Glossary term | `[First 160 characters of definition field from GlossaryTerm model]` |

**Rule:** If `seoDescription` is set in DB, it overrides the pattern.

---

### Canonical URLs

| Scenario | Canonical Strategy |
|---|---|
| All standard pages | Self-referencing canonical |
| Closed facility pages | Self-referencing canonical + `noindex` |
| Transferred facility pages | Canonical to active facility if exists, else `noindex` |
| Search results page | `noindex` — no canonical needed |
| Admin pages | `noindex` — no canonical needed |
| Paginated provider/facility lists | `rel=canonical` to page 1 |

---

### Open Graph

Every page outputs:

```html
<meta property="og:title" content="[page title]" />
<meta property="og:description" content="[meta description]" />
<meta property="og:url" content="https://inmatetext.com/[path]" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://inmatetext.com/og/[page-type].png" />
<meta property="og:site_name" content="Inmate Text App" />
```

**OG image strategy:**
- Homepage: branded default OG image
- Facility pages: dynamic OG with facility name + state
- Provider pages: provider logo + brand
- All others: category-specific static OG image

---

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[page title]" />
<meta name="twitter:description" content="[meta description]" />
<meta name="twitter:image" content="[OG image URL]" />
```

---

## 6. Structured Data Architecture

All JSON-LD is rendered via `<JsonLd />` component in `components/seo/JsonLd.tsx`. Schema builders live in `lib/schema.ts` as pure functions.

### WebSite Schema

**Applied on:** Homepage only

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Inmate Text App",
  "url": "https://inmatetext.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://inmatetext.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

### Organization Schema

**Applied on:** All pages (via root `layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inmate Text App",
  "url": "https://inmatetext.com",
  "logo": "https://inmatetext.com/logo.png",
  "description": "Prison communication discovery platform helping families find messaging, video, and phone options at correctional facilities across the United States.",
  "sameAs": []
}
```

---

### WebPage Schema

**Applied on:** County pages, Comparison pages, Hub pages, Feature directories, Facility type hubs

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[page title]",
  "description": "[meta description]",
  "url": "https://inmatetext.com/[path]",
  "breadcrumb": { /* BreadcrumbList */ }
}
```

---

### BreadcrumbList Schema

**Applied on:** All pages with a parent (county, facility, state sub-pages, provider sub-pages, guides, glossary terms)

**Examples:**

Facility page:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inmatetext.com" },
    { "@type": "ListItem", "position": 2, "name": "California", "item": "https://inmatetext.com/state/california" },
    { "@type": "ListItem", "position": 3, "name": "Los Angeles County", "item": "https://inmatetext.com/county/los-angeles-county" },
    { "@type": "ListItem", "position": 4, "name": "San Quentin State Prison" }
  ]
}
```

Provider review page:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inmatetext.com" },
    { "@type": "ListItem", "position": 2, "name": "Providers", "item": "https://inmatetext.com/providers" },
    { "@type": "ListItem", "position": 3, "name": "JPay", "item": "https://inmatetext.com/providers/jpay" },
    { "@type": "ListItem", "position": 4, "name": "JPay Review" }
  ]
}
```

---

### Place Schema

**Applied on:** Facility pages, County pages

```json
{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "San Quentin State Prison",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Main St",
    "addressLocality": "San Quentin",
    "addressRegion": "CA",
    "postalCode": "94964",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.9418,
    "longitude": -122.4869
  },
  "url": "https://inmatetext.com/facility/san-quentin-state-prison"
}
```

> **Note:** Facility pages do NOT use `LocalBusiness`. Correctional facilities are better represented by `Place` + `Organization` in Google's entity model.

---

### FAQPage Schema

**Applied on:** Facility pages (when FAQs present), Provider pages, Comparison pages, Communication hub pages, Guide pages (from `faqSchema` JSON field), Facility type hubs

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does San Quentin allow video visitation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. San Quentin State Prison offers video visitation through GTL at scheduled times."
      }
    }
  ]
}
```

---

### Article Schema

**Applied on:** Guide pages (`/learn/[slug]`)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[guide title]",
  "description": "[excerpt]",
  "image": "[featuredImage URL]",
  "author": { "@type": "Person", "name": "[author]" },
  "publisher": {
    "@type": "Organization",
    "name": "Inmate Text App",
    "logo": { "@type": "ImageObject", "url": "https://inmatetext.com/logo.png" }
  },
  "datePublished": "[publishedAt]",
  "dateModified": "[updatedAt]"
}
```

---

### DefinedTerm Schema

**Applied on:** Glossary term pages (`/glossary/[slug]`)

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "JPay Stamps",
  "description": "JPay Stamps are a form of digital currency used to send messages...",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Inmate Text App Prison Communication Glossary",
    "url": "https://inmatetext.com/glossary"
  }
}
```

---

### Schema Usage Summary

| Page | WebSite | Organization | WebPage | Place | BreadcrumbList | FAQPage | Article | DefinedTerm |
|---|---|---|---|---|---|---|---|---|
| Homepage | ✓ | ✓ | — | — | — | — | — | — |
| State | — | ✓ | ✓ | — | ✓ | — | — | — |
| County | — | ✓ | ✓ | ✓ | ✓ | — | — | — |
| Facility | — | ✓ | ✓ | ✓ | ✓ | ✓ (if FAQs) | — | — |
| Facility type hub | — | ✓ | ✓ | — | ✓ | ✓ | — | — |
| Provider overview | — | ✓ | — | — | ✓ | ✓ | — | — |
| Provider review | — | ✓ | ✓ | — | ✓ | ✓ | — | — |
| Comparison | — | ✓ | ✓ | — | ✓ | ✓ | — | — |
| Communication hub | — | ✓ | ✓ | — | ✓ | ✓ | — | — |
| Feature directory | — | ✓ | ✓ | — | ✓ | — | — | — |
| Guide | — | ✓ | — | — | ✓ | ✓ (if set) | ✓ | — |
| Glossary index | — | ✓ | ✓ | — | ✓ | — | — | — |
| Glossary term | — | ✓ | ✓ | — | ✓ | — | — | ✓ |

---

## 7. Sitemap Architecture

Auto-generated from DB in `app/sitemap.ts`. Outputs standard XML sitemap with `loc`, `lastmod`, `changefreq`, and `priority`.

```ts
// app/sitemap.ts — generation order and priorities

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    // Homepage
    { url: '/', priority: 1.0, changefreq: 'daily' },

    // Communication hubs
    { url: '/messaging', priority: 0.9, changefreq: 'weekly' },
    { url: '/video-calls', priority: 0.9, changefreq: 'weekly' },
    { url: '/photo-sharing', priority: 0.9, changefreq: 'weekly' },
    { url: '/phone-calls', priority: 0.9, changefreq: 'weekly' },
    { url: '/money-transfer', priority: 0.9, changefreq: 'weekly' },

    // Feature directories
    { url: '/messaging/facilities', priority: 0.8, changefreq: 'weekly' },
    { url: '/video-calls/facilities', priority: 0.8, changefreq: 'weekly' },
    { url: '/photo-sharing/facilities', priority: 0.8, changefreq: 'weekly' },
    { url: '/phone-calls/facilities', priority: 0.8, changefreq: 'weekly' },
    { url: '/money-transfer/facilities', priority: 0.8, changefreq: 'weekly' },

    // Facility type hubs
    { url: '/federal-prisons', priority: 0.9, changefreq: 'weekly' },
    { url: '/state-prisons', priority: 0.9, changefreq: 'weekly' },
    { url: '/county-jails', priority: 0.9, changefreq: 'weekly' },
    { url: '/private-prisons', priority: 0.8, changefreq: 'weekly' },

    // State pages — 50 × priority 0.9
    ...states.map(s => ({ url: `/state/${s.slug}`, priority: 0.9, changefreq: 'weekly' })),

    // State sub-pages — 250 × priority 0.8
    ...stateSubPages.map(p => ({ url: p, priority: 0.8, changefreq: 'weekly' })),

    // County pages — priority 0.8
    ...counties.map(c => ({ url: `/county/${c.slug}`, priority: 0.8, changefreq: 'weekly' })),

    // Facility pages (active only) — priority 0.9
    ...activeFacilities.map(f => ({ url: `/facility/${f.slug}`, priority: 0.9, changefreq: 'monthly' })),

    // Provider pages — priority 0.8
    ...providers.map(p => ({ url: `/providers/${p.slug}`, priority: 0.8, changefreq: 'weekly' })),
    ...providers.map(p => ({ url: `/providers/${p.slug}/review`, priority: 0.8, changefreq: 'weekly' })),
    ...providers.map(p => ({ url: `/providers/${p.slug}/pricing`, priority: 0.7, changefreq: 'weekly' })),
    ...providers.map(p => ({ url: `/providers/${p.slug}/facilities`, priority: 0.7, changefreq: 'daily' })),

    // Comparison pages — priority 0.8
    { url: '/compare', priority: 0.8, changefreq: 'weekly' },
    ...comparisons.map(c => ({ url: `/compare/${c.matchup}`, priority: 0.8, changefreq: 'weekly' })),

    // Guides — priority 0.7
    { url: '/learn', priority: 0.7, changefreq: 'weekly' },
    ...guides.map(g => ({ url: `/learn/${g.slug}`, priority: 0.7, changefreq: 'monthly' })),

    // Glossary — priority 0.7
    { url: '/glossary', priority: 0.7, changefreq: 'weekly' },
    ...glossaryTerms.map(t => ({ url: `/glossary/${t.slug}`, priority: 0.7, changefreq: 'monthly' })),
  ]
}
```

### Excluded from Sitemap

- `/search` (dynamic, no-index)
- `/admin` and all sub-paths
- `/login`, `/signup`, `/dashboard`
- `/api/*`
- Facility pages with `status: closed` or `status: transferred`

---

## 8. Indexing Strategy

### Index — Full Crawl

| Page Type | Rationale |
|---|---|
| Homepage | Primary entry point |
| All state pages | High-volume geo-intent keywords |
| All county pages | Mid-volume local intent keywords |
| All active facility pages | Programmatic SEO core |
| All provider pages | Affiliate + informational intent |
| All comparison pages | High-conversion decision intent |
| All communication hubs | Topical authority anchors |
| All feature directories | Feature-based discovery intent |
| All facility type hubs | Type-based discovery intent |
| All guides | Long-tail educational intent |
| All glossary terms | Definition + informational intent |

### No-Index

| Page | Reason |
|---|---|
| `/search` | Dynamic query results — duplicate risk |
| `/admin` | Internal tool |
| `/login`, `/signup`, `/dashboard` | Auth pages — no SEO value |
| `/api/*` | API routes |
| Facility pages with `status: closed` | Content exists but avoid indexing stale pages |
| Facility pages with `status: transferred` | Redirect notice pages |

### Canonical Strategy

| Scenario | Action |
|---|---|
| Normal page | `<link rel="canonical" href="https://inmatetext.com/[path]" />` |
| Paginated list (page 2+) | Canonical to page 1 |
| Closed facility | Self-canonical + `<meta name="robots" content="noindex" />` |
| Search results | `<meta name="robots" content="noindex, follow" />` |

### Crawl Optimization

- `robots.txt` blocks `/admin`, `/api`, `/login`, `/signup`, `/dashboard`
- Sitemap submitted to Google Search Console on launch
- ISR ensures Googlebot always receives fresh content without full rebuilds
- `X-Robots-Tag: noindex` header on all `/api` responses
- No session cookies or auth walls on any public SEO pages
- HTML is fully server-rendered — no client-side-only content in critical SEO sections

---

## 9. Future SEO Expansion

### State × Feature Pages (250 pages)
Already scaffolded: `/state/[slug]/messaging`, `/state/[slug]/video-calls`, etc.
These are built in Phase 2 and represent immediate programmatic scale.

### State × Facility Type (200 pages)
Routes prepared: `/federal-prisons/[state-slug]`, `/state-prisons/[state-slug]`, `/county-jails/[state-slug]`
Build after facility type hubs are established.

### County × Feature Pages (~15,000 pages)
Pattern: `/county/[slug]/messaging`, `/county/[slug]/video-calls`
High scale, high local SEO value. Build after county pages are indexed and performing.

### Provider × State Pages (~300 pages)
Pattern: `/providers/jpay/california`, `/providers/jpay/texas`
Captures "JPay in California" intent. Build after provider pages establish authority.

### City-Level Pages (~10,000+ pages)
Pattern: `/city/[slug]`
City-level jail and facility discovery for major US cities.

### Facility Type × State × Feature (~600 pages)
Pattern: `/federal-prisons/california/messaging`
Ultra-specific long-tail pages. Build last — after all parent clusters have authority.

### Dynamic OG Images
Auto-generate Open Graph images per facility, state, and provider using Vercel OG or `@vercel/og`. Improves CTR from social sharing.

### News / Updates Section
Pattern: `/news/[slug]`
Covers provider updates, policy changes, new facility additions. Freshness signal for Google.
