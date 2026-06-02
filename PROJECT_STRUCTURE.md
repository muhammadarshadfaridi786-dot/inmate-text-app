# Inmate Text App — Project Structure

## Overview

SEO-first prison communication discovery platform built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, and PostgreSQL + Prisma.

All pages use Static Site Generation (SSG) or Incremental Static Regeneration (ISR) for maximum SEO performance.

---

## Root Folder Structure

```
inmate-text-app/
├── app/                        # Next.js App Router (all routes)
├── components/                 # Reusable UI components
├── lib/                        # Utilities, DB client, SEO helpers
├── prisma/                     # Database schema and seed
├── public/                     # Static assets
├── types/                      # Shared TypeScript types
├── .env.local                  # Environment variables
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## App Router Structure

```
app/
│
├── layout.tsx                              # Root layout — Header, Footer, global metadata
├── page.tsx                                # Homepage
├── not-found.tsx                           # Global 404 page
├── sitemap.ts                              # Auto-generated sitemap from DB
├── robots.ts                               # robots.txt
│
├── search/
│   └── page.tsx                            # /search?q=&state=&type=&county=
│
├── facility/
│   └── [slug]/
│       └── page.tsx                        # /facility/[slug]
│
├── state/
│   └── [slug]/
│       ├── page.tsx                        # /state/[slug]
│       ├── messaging/
│       │   └── page.tsx                    # /state/[slug]/messaging
│       ├── video-calls/
│       │   └── page.tsx                    # /state/[slug]/video-calls
│       ├── photo-sharing/
│       │   └── page.tsx                    # /state/[slug]/photo-sharing
│       ├── money-transfer/
│       │   └── page.tsx                    # /state/[slug]/money-transfer
│       └── phone-calls/
│           └── page.tsx                    # /state/[slug]/phone-calls
│
├── county/
│   └── [slug]/
│       └── page.tsx                        # /county/[slug]
│
├── federal-prisons/
│   ├── page.tsx                            # /federal-prisons
│   └── [state-slug]/
│       └── page.tsx                        # /federal-prisons/[state-slug] (future)
│
├── state-prisons/
│   ├── page.tsx                            # /state-prisons
│   └── [state-slug]/
│       └── page.tsx                        # /state-prisons/[state-slug] (future)
│
├── county-jails/
│   ├── page.tsx                            # /county-jails
│   └── [state-slug]/
│       └── page.tsx                        # /county-jails/[state-slug] (future)
│
├── private-prisons/
│   └── page.tsx                            # /private-prisons
│
├── providers/
│   ├── page.tsx                            # /providers
│   └── [slug]/
│       ├── page.tsx                        # /providers/[slug]
│       ├── review/
│       │   └── page.tsx                    # /providers/[slug]/review
│       ├── pricing/
│       │   └── page.tsx                    # /providers/[slug]/pricing
│       └── facilities/
│           └── page.tsx                    # /providers/[slug]/facilities
│
├── compare/
│   ├── page.tsx                            # /compare
│   └── [matchup]/
│       └── page.tsx                        # /compare/jpay-vs-corrlinks
│
├── messaging/
│   ├── page.tsx                            # /messaging
│   └── facilities/
│       └── page.tsx                        # /messaging/facilities
│
├── video-calls/
│   ├── page.tsx                            # /video-calls
│   └── facilities/
│       └── page.tsx                        # /video-calls/facilities
│
├── photo-sharing/
│   ├── page.tsx                            # /photo-sharing
│   └── facilities/
│       └── page.tsx                        # /photo-sharing/facilities
│
├── money-transfer/
│   ├── page.tsx                            # /money-transfer
│   └── facilities/
│       └── page.tsx                        # /money-transfer/facilities
│
├── phone-calls/
│   ├── page.tsx                            # /phone-calls
│   └── facilities/
│       └── page.tsx                        # /phone-calls/facilities
│
├── learn/
│   ├── page.tsx                            # /learn
│   └── [slug]/
│       └── page.tsx                        # /learn/[slug]
│
├── glossary/
│   ├── page.tsx                            # /glossary
│   └── [slug]/
│       └── page.tsx                        # /glossary/[slug]
│
├── admin/
│   └── page.tsx                            # /admin
│
└── (auth)/                                 # Phase 10
    ├── login/
    │   └── page.tsx
    ├── signup/
    │   └── page.tsx
    └── dashboard/
        └── page.tsx
```

---

## Components Structure

```
components/
│
├── ui/                                     # shadcn/ui primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── separator.tsx
│   ├── table.tsx
│   └── ...
│
├── layout/
│   ├── Header.tsx                          # Site nav with search
│   ├── Footer.tsx                          # Footer links and legal
│   ├── Breadcrumb.tsx                      # Breadcrumb nav (BreadcrumbList schema)
│   └── PageWrapper.tsx                     # Consistent page max-width + padding
│
├── search/
│   ├── SearchBar.tsx                       # Main facility search input
│   ├── SearchFilters.tsx                   # State / type / county / feature filters
│   └── SearchResults.tsx                   # Results list with pagination
│
├── facility/
│   ├── FacilityCard.tsx                    # Summary card used in lists and grids
│   ├── FacilityHeader.tsx                  # Name, type, status badge, location
│   ├── FacilityProviderList.tsx            # All providers at a facility with badges
│   └── FacilityStatusBadge.tsx            # active | closed | transferred
│
├── county/
│   └── CountyCard.tsx                      # County summary card with facility count
│
├── provider/
│   ├── ProviderCard.tsx                    # Provider summary card
│   ├── ProviderBadge.tsx                   # Inline provider name + logo chip
│   ├── ProviderAppLinks.tsx               # iOS / Android download buttons
│   └── ProviderPricingTable.tsx           # Pricing breakdown table
│
├── compare/
│   ├── CompareTable.tsx                    # Side-by-side provider comparison grid
│   └── CompareMatchupCard.tsx             # Popular matchup card for /compare hub
│
├── communication/
│   ├── CommunicationBadges.tsx            # messaging / video / photos / voice / money icons
│   ├── FeatureDirectory.tsx               # /[feature]/facilities filterable list
│   └── HubLinks.tsx                       # Internal link block on hub pages
│
├── glossary/
│   ├── GlossaryCard.tsx                   # Term card used in /glossary index
│   └── GlossaryInlineLink.tsx            # Auto-linked term within body text
│
├── seo/
│   ├── JsonLd.tsx                         # Reusable JSON-LD <script> renderer
│   └── RelatedLinks.tsx                   # Contextual internal link block (all page types)
│
└── shared/
    ├── SectionHeading.tsx                  # Consistent H2/H3 with optional subtitle
    ├── EmptyState.tsx                      # No results / coming soon placeholder
    └── AdSlot.tsx                          # Google AdSense placeholder slot
```

---

## Data Structure (Prisma Schema)

Located at `prisma/schema.prisma`.

### Models

```
State              — id, name, slug, abbreviation, facilityCount
County             — id, name, slug, stateId
Facility           — id, name, slug, stateId, countyId, type, status,
                     address, phone, website, description,
                     securityLevel, latitude, longitude, inmateCount
Provider           — id, name, slug, website, logoUrl, affiliateUrl,
                     description, foundedYear, headquarters,
                     mobileApp, iosUrl, androidUrl
FacilityProvider   — facilityId, providerId, messaging, video,
                     photos, voiceCalls, moneyTransfer, notes
BlogPost           — id, title, slug, excerpt, content, featuredImage,
                     seoTitle, seoDescription, category, author,
                     faqSchema, publishedAt, updatedAt
GlossaryTerm       — id, term, slug, definition, seoTitle,
                     seoDescription, relatedSlugs
FeaturedListing    — providerId, tier, startsAt, endsAt
User               — id, email, name, role (Phase 10)
```

### Seed File

Located at `prisma/seed.ts`. Seeds:

- All 50 US states with name, slug, abbreviation
- Major counties (Los Angeles, Harris, Cook, Maricopa, etc.)
- 20+ seed facilities covering federal, state, county, private types
- 6 providers: JPay, GTL, Securus, Corrlinks, ICSolutions, Pigeonly
- FacilityProvider relationships with service flags
- 10+ glossary terms for initial content
- 5+ seed blog posts / guides

---

## SEO Structure

### Metadata — `lib/seo.ts`

Exports per-page metadata generators:

```ts
generateFacilityMetadata(facility)      // title, description, OG, canonical
generateStateMetadata(state)
generateCountyMetadata(county)
generateProviderMetadata(provider)
generateCompareMetadata(providerA, providerB)
generateGlossaryMetadata(term)
generateGuideMetadata(post)
generateHubMetadata(feature)
generateFacilityTypeMetadata(type)
```

### JSON-LD — `lib/schema.ts`

Exports typed JSON-LD builder functions:

```ts
buildWebSiteSchema()                    // Homepage SearchAction
buildOrganizationSchema()              // Site-wide Organization
buildBreadcrumbSchema(items)           // BreadcrumbList for all nested pages
buildFacilitySchema(facility)          // WebPage + Place + Organization
buildProviderSchema(provider)          // Organization
buildCompareSchema(a, b)               // WebPage + FAQPage
buildGlossarySchema(term)              // DefinedTerm + WebPage
buildArticleSchema(post)               // Article + FAQPage
buildHubSchema(feature)                // WebPage + FAQPage
buildItemListSchema(facilities)        // ItemList for feature directories
buildFaqSchema(faqs)                   // FAQPage
```

### Sitemap — `app/sitemap.ts`

Auto-generated from DB. Covers:

```
/                                       priority 1.0
/state/[slug]                           priority 0.9  (×50)
/state/[slug]/[feature]                 priority 0.8  (×250)
/county/[slug]                          priority 0.8  (×n)
/facility/[slug]                        priority 0.9  (×n)
/federal-prisons                        priority 0.8
/state-prisons                          priority 0.8
/county-jails                           priority 0.8
/private-prisons                        priority 0.8
/providers/[slug]                       priority 0.8  (×n)
/providers/[slug]/review                priority 0.7  (×n)
/providers/[slug]/pricing               priority 0.7  (×n)
/providers/[slug]/facilities            priority 0.6  (×n)
/compare/[matchup]                      priority 0.8  (×n)
/messaging                              priority 0.8
/messaging/facilities                   priority 0.7
/video-calls                            priority 0.8
/video-calls/facilities                 priority 0.7
/photo-sharing                          priority 0.8
/photo-sharing/facilities               priority 0.7
/money-transfer                         priority 0.8
/money-transfer/facilities              priority 0.7
/phone-calls                            priority 0.8
/phone-calls/facilities                 priority 0.7
/learn/[slug]                           priority 0.7  (×n)
/glossary/[slug]                        priority 0.7  (×n)
```

### robots.ts

```
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /login
Disallow: /signup
Disallow: /dashboard
```

---

## Providers Structure

```
/providers                              — All providers index grid
/providers/[slug]                       — Provider overview
│   Sections: About, facilities served, features supported, app info
│   JSON-LD: Organization + FAQPage
│
/providers/[slug]/review                — Full review page
│   Sections: Rating, pros, cons, pricing summary, affiliate CTA
│   Affiliate: UTM-tagged links to provider
│
/providers/[slug]/pricing               — Pricing breakdown
│   Sections: Messaging cost, video cost, photo cost, money transfer fees
│
/providers/[slug]/facilities            — All facilities using this provider
│   Paginated FacilityCard list filtered by providerId
```

### Seeded Providers

| Provider | Slug |
|---|---|
| JPay | jpay |
| Global Tel Link | gtl |
| Securus Technologies | securus |
| CorrLinks | corrlinks |
| ICSolutions | icsolutions |
| Pigeonly | pigeonly |

---

## State Pages

```
/state/[slug]
```

**Content:**
- State name, abbreviation, facility count
- County list with facility counts
- Facilities grid (FacilityCard)
- Provider summary (which providers operate in this state)
- Communication feature availability breakdown

**Sub-routes (×5 per state):**

| Route | Content |
|---|---|
| `/state/[slug]/messaging` | Facilities in state with messaging enabled |
| `/state/[slug]/video-calls` | Facilities in state with video visitation |
| `/state/[slug]/photo-sharing` | Facilities in state with photo sharing |
| `/state/[slug]/money-transfer` | Facilities in state with money transfer |
| `/state/[slug]/phone-calls` | Facilities in state with voice calls |

**Static generation:** `generateStaticParams()` over all 50 states.

**JSON-LD:** `WebPage` + `BreadcrumbList`

**Internal links:** county pages, facility pages, communication hubs, provider pages, facility type hubs.

---

## County Pages

```
/county/[slug]
```

**Content:**
- County name, state name + link
- Facility count
- Facility list (FacilityCard) filtered by countyId
- Provider summary for the county
- Communication feature availability
- Link back to state page and state sub-routes

**Static generation:** `generateStaticParams()` over all counties in DB.

**JSON-LD:** `WebPage` + `Place` + `BreadcrumbList`

**Internal links:** state page, facility pages, provider pages, communication hubs, guides.

---

## Facility Pages

```
/facility/[slug]
```

**Content:**
- Facility name, type badge, status badge (active / closed / transferred)
- Address, phone, website link
- County + state with links
- Security level indicator
- Provider list with CommunicationBadges per provider (messaging / video / photos / voice / money)
- Affiliate links to each provider (UTM-tagged)
- Description (rich text)
- Map placeholder (latitude / longitude)
- RelatedLinks block: state, county, providers, compare, hub pages, guides

**Closed facilities:** rendered with `noindex` meta; status badge shown clearly.

**Static generation:** `generateStaticParams()` over all facilities with `status: active`.

**ISR:** revalidate every 86400s (24h).

**JSON-LD:** `WebPage` + `Place` + `Organization` + `FAQPage` (if FAQs present).

---

## Comparison Pages

```
/compare                                — Hub listing popular matchups
/compare/[matchup]                      — e.g., /compare/jpay-vs-corrlinks
```

**URL pattern:** `[provider-a]-vs-[provider-b]`

**Parse logic (in `page.tsx`):**

```ts
const [slugA, slugB] = params.matchup.split('-vs-')
// fetch providerA and providerB from DB by slug
```

**Content:**
- Side-by-side CompareTable: features, pricing, app availability, facility count
- Pros and cons per provider
- Affiliate CTAs for both providers
- FAQPage schema with common comparison questions
- RelatedLinks: both provider pages, related comparisons, communication hubs

**Static generation:** `generateStaticParams()` over seeded matchup pairs.

**JSON-LD:** `WebPage` + `FAQPage`

---

## Glossary Pages

```
/glossary                               — A–Z index of all terms
/glossary/[slug]                        — Individual term definition
```

**Index page content:**
- Alphabetical grouping of all GlossaryTerm records
- GlossaryCard per term (term name + excerpt of definition)

**Term page content:**
- Term name as H1
- Full definition
- Related terms (from `relatedSlugs` field — linked)
- RelatedLinks: relevant facility pages, provider pages, guides, hub pages

**Auto-linking:** First mention of a glossary term in facility page descriptions and guide body text is wrapped in `<GlossaryInlineLink>`.

**Static generation:** `generateStaticParams()` over all GlossaryTerm records.

**JSON-LD:** `DefinedTerm` + `WebPage` + `BreadcrumbList`

### Seed Glossary Terms

| Term | Slug |
|---|---|
| JPay Stamps | jpay-stamps |
| Video Visitation | video-visitation |
| Commissary | commissary |
| Federal Prison | federal-prison |
| State Prison | state-prison |
| County Jail | county-jail |
| Inmate Messaging | inmate-messaging |
| Corrlinks Email | corrlinks-email |
| GTL Phone Call | gtl-phone-call |
| Money Transfer | money-transfer |
| Photo Sharing | photo-sharing |

---

## Guides Structure

```
/learn                                  — Guide index by category
/learn/[slug]                           — Individual guide page
```

**Categories:**

| Category | Example Slugs |
|---|---|
| `how-to` | how-to-send-jpay-message, how-to-set-up-video-visit |
| `state-guide` | california-prison-communication-guide, texas-inmate-messaging |
| `provider-guide` | jpay-complete-guide, gtl-inmate-calling-guide |
| `rules` | federal-prison-communication-rules, photo-rules-for-inmates |

**Guide page content:**
- Title, author, published date, updated date
- Featured image
- Body content (HTML or MDX from `content` field)
- FAQPage section (from `faqSchema` JSON field)
- RelatedLinks: provider pages, facility pages, state pages, glossary terms, comparisons

**Index page:** Grid of BlogPost cards filtered/grouped by `category`.

**Static generation:** `generateStaticParams()` over all published BlogPost records.

**JSON-LD:** `Article` + `FAQPage` (when `faqSchema` is present)

---

## Internal Linking Matrix

Every page template includes a `<RelatedLinks />` component populated per the following:

| Page | Links To |
|---|---|
| Facility | State, County, Providers, Comparisons, Communication hubs, Glossary terms |
| State | Counties, Facilities, Facility type hubs, Communication hubs, Providers |
| County | State, Facilities, Providers, Communication hubs, Guides |
| Provider | Facilities, Comparisons, Communication hubs, States, Guides |
| Comparison | Both provider pages, Related comparisons, Communication hubs, Glossary, Guides |
| Communication hub | Providers, Feature directory, States, Counties, Comparisons, Glossary, Guides |
| Feature directory | Facilities, States, Providers, Communication hub |
| Facility type hub | Facilities, States, Counties, Communication hubs |
| Glossary term | Related terms, Facilities, Providers, Guides, Hubs |
| Guide | Glossary terms, Providers, Facilities, States, Comparisons |

---

## Environment Variables

```
# .env.local

DATABASE_URL=postgresql://...
NEXT_PUBLIC_SITE_URL=https://inmatetext.com

# Phase 10
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://inmatetext.com
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
RESEND_API_KEY=...
```

---

## Key Design Decisions

- **No query params on indexable pages.** Comparison uses `/compare/jpay-vs-corrlinks`, not `?a=jpay&b=corrlinks`.
- **Closed facilities are not 404.** They render with `noindex` and a status notice so affiliate traffic is preserved.
- **`RelatedLinks` is data-driven.** It pulls related entities from DB, not hardcoded — scales automatically as content grows.
- **All schema builders are pure functions** in `lib/schema.ts` — no JSX, easy to test and reuse across page types.
- **AdSense slots** are `<AdSlot />` placeholder components — swap in real ad code without touching page templates.
