# Inmate Text App — Development Roadmap

## Overview

14-phase development roadmap for building the Inmate Text App SEO-first SaaS platform. Each phase has a clear scope, deliverables, and success criteria.

**Priority order across all phases:**
1. SEO
2. User Experience
3. Scalability
4. Performance
5. Accessibility

---

## Phase 1 — Foundation

**Goal:** Establish the project scaffold, design system, layout system, and SEO foundation before building any content pages.

### Tasks

#### Project Setup
- [ ] `npx create-next-app@latest inmate-text-app --typescript --tailwind --app`
- [ ] Configure `next.config.ts`: image domains, trailing slash, headers
- [ ] Configure `tsconfig.json`: path aliases (`@/components`, `@/lib`, `@/types`)
- [ ] Set up `.env.local` with `DATABASE_URL`, `NEXT_PUBLIC_SITE_URL`
- [ ] Initialize Git repository

#### Design System
- [ ] Install and initialize shadcn/ui: `npx shadcn@latest init`
- [ ] Add core shadcn components: `button`, `card`, `badge`, `input`, `select`, `separator`, `table`, `sheet`, `dialog`
- [ ] Define color tokens in `tailwind.config.ts`: brand, neutral, success, warning, danger
- [ ] Implement CSS variables for light and dark mode in `globals.css`
- [ ] Implement `ThemeProvider` with system default + manual toggle

#### Layout System
- [ ] Build `components/layout/Header.tsx`: logo, nav links, search bar trigger, mobile menu (shadcn Sheet)
- [ ] Build `components/layout/Footer.tsx`: state links, provider links, legal, site description
- [ ] Build `components/layout/Breadcrumb.tsx`: accepts `items[]` prop, renders nav + BreadcrumbList JSON-LD
- [ ] Build `components/layout/PageWrapper.tsx`: max-width container, consistent padding
- [ ] Wire `app/layout.tsx`: Header, Footer, ThemeProvider, global metadata defaults

#### SEO Foundation
- [ ] Configure global metadata in `app/layout.tsx`: default title template, description, OG, Twitter
- [ ] Build `lib/seo.ts`: per-page metadata generator functions for all page types
- [ ] Build `lib/schema.ts`: JSON-LD builder functions (Organization, WebSite, BreadcrumbList, etc.)
- [ ] Build `components/seo/JsonLd.tsx`: renders `<script type="application/ld+json">` safely
- [ ] Add `Organization` + `WebSite` schema to root layout (rendered on all pages)
- [ ] Create `app/robots.ts`: allow public routes, block admin/api/auth
- [ ] Create `app/sitemap.ts` stub: returns homepage entry, expands in later phases

#### Shared Components
- [ ] `components/shared/SectionHeading.tsx`
- [ ] `components/shared/EmptyState.tsx`
- [ ] `components/shared/AdSlot.tsx`
- [ ] `types/index.ts`: shared TypeScript types (State, County, Facility, Provider, etc.)

### Deliverables
- Responsive layout with Header and Footer on all pages
- Dark mode and light mode with toggle
- Global SEO metadata rendering correctly
- robots.txt live
- All shared components built and typed

### Success Criteria
- `npm run build` passes with zero errors
- Lighthouse accessibility score ≥ 90 on blank layout
- Dark/light mode toggle works on all breakpoints
- `<meta name="robots">` correct on all routes
- No console errors

---

## Phase 2 — Homepage

**Goal:** Build a production-ready homepage that communicates the platform's purpose and drives discovery.

### Tasks

#### Hero Section
- [ ] Large headline: "Find Prison Communication Options Near You"
- [ ] Sub-headline: platform description (discovery, not messaging)
- [ ] Embedded `<SearchBar />` with state filter dropdown
- [ ] CTA button: "Search Facilities"

#### Search UI
- [ ] Build `components/search/SearchBar.tsx`: text input + state dropdown + submit
- [ ] Build `components/search/SearchFilters.tsx`: facility type, feature filters
- [ ] Wire search to `/search?q=&state=` route

#### Statistics Section
- [ ] Facility count, state count, provider count (pulled from DB at build time)
- [ ] Displayed as stat cards with icons

#### Featured Providers
- [ ] `components/provider/ProviderCard.tsx`
- [ ] Grid of 6 seed providers with logo, name, brief description, link to `/providers/[slug]`
- [ ] Mark featured providers via `FeaturedListing` model

#### Featured Facilities
- [ ] `components/facility/FacilityCard.tsx`: name, type badge, state, communication badges
- [ ] Grid of 6 featured facilities (seeded or manually curated)

#### Communication Categories
- [ ] Icon grid linking to: `/messaging`, `/video-calls`, `/photo-sharing`, `/phone-calls`, `/money-transfer`
- [ ] Each card: icon, title, brief description, arrow link

#### CTA Section
- [ ] "Search by State" section: grid of all 50 state links
- [ ] "Find Your Provider" CTA block: links to `/providers`

#### SEO
- [ ] `WebSite` + `SearchAction` JSON-LD
- [ ] `Organization` JSON-LD
- [ ] Title: `Inmate Text App — Find Prison Communication Options`
- [ ] Description: platform summary

### Deliverables
- Production-ready homepage
- `<SearchBar />` functional and linking to `/search`
- All provider and facility cards rendering from seed data

### Success Criteria
- Lighthouse SEO score ≥ 90
- Lighthouse performance score ≥ 80
- All 50 state links present and correct
- Featured providers render with logo and link
- Mobile layout matches desktop intent at all breakpoints

---

## Phase 3 — State Pages

**Goal:** Build the complete state-level SEO architecture — 50 state pages + 250 sub-pages = 300 static pages.

### Tasks

#### Database
- [ ] Confirm all 50 states seeded with `name`, `slug`, `abbreviation`, `facilityCount`

#### State Directory
- [ ] `/app/state/page.tsx` redirect → or absorb into homepage state grid (no standalone directory needed)

#### State Detail Page — `/state/[slug]`
- [ ] `generateStaticParams()` over all 50 states
- [ ] Page sections:
  - State name + abbreviation + facility count
  - County list (card grid) with facility counts
  - Facility grid (FacilityCard) — paginated or top 12
  - Provider summary: which providers operate in this state
  - Communication feature breakdown: how many facilities offer messaging, video, etc.
  - Internal links: county pages, facility type hubs, communication hubs
- [ ] Metadata: `generateStateMetadata(state)` from `lib/seo.ts`
- [ ] JSON-LD: `WebPage` + `BreadcrumbList`

#### State Sub-Pages — `/state/[slug]/[feature]`
- [ ] Build for all 5 features: messaging, video-calls, photo-sharing, money-transfer, phone-calls
- [ ] Each sub-page:
  - Filtered `FacilityProvider` query for the feature flag
  - FacilityCard grid showing only matching facilities
  - Provider list: which providers offer this feature in this state
  - Link back to state hub
  - Related communication hub link
- [ ] `generateStaticParams()` for all 50 × 5 = 250 pages
- [ ] Metadata per feature + state combination
- [ ] JSON-LD: `WebPage` + `BreadcrumbList`

#### Sitemap Update
- [ ] Add all state pages + sub-pages to `app/sitemap.ts`

### Deliverables
- 50 state pages + 250 state sub-pages (300 total)
- All pages static, SEO-optimized, internally linked

### Success Criteria
- `generateStaticParams()` returns 50 entries for state pages, 250 for sub-pages
- `npm run build` generates all 300 static pages without error
- Each state page links to its county pages, facility pages, and communication hubs
- Breadcrumb renders correctly on all sub-pages
- Sitemap contains all state + sub-page URLs

---

## Phase 4 — County Pages

**Goal:** Add the county SEO layer between state and facility, capturing local search intent.

### Tasks

#### Database
- [ ] Confirm major counties seeded with `name`, `slug`, `stateId`
- [ ] Expand seed to include all major counties (100+ target)

#### County Detail Page — `/county/[slug]`
- [ ] `generateStaticParams()` over all counties in DB
- [ ] Page sections:
  - County name, state name (linked to `/state/[slug]`)
  - Facility count
  - Facility grid filtered by `countyId`
  - Provider summary for this county
  - Communication feature availability
  - Internal links: state page, facility pages, provider pages, communication hubs
- [ ] `<RelatedLinks />` component wired to county context
- [ ] Metadata: `generateCountyMetadata(county)` from `lib/seo.ts`
- [ ] JSON-LD: `WebPage` + `Place` + `BreadcrumbList`

#### Sitemap Update
- [ ] Add all county pages to `app/sitemap.ts`

### Deliverables
- Complete county SEO layer
- County pages linked from state pages and facility pages

### Success Criteria
- All seeded counties render correct pages
- Each county page links back to its state page
- Each county page lists facilities in that county with working links
- JSON-LD `Place` includes county name and state
- Sitemap includes all county URLs

---

## Phase 5 — Facility Pages

**Goal:** Build the core programmatic SEO asset — individual facility pages and facility type hubs.

### Tasks

#### Database
- [ ] Confirm seed facilities cover all 4 types: federal, state, county, private
- [ ] All fields populated: `type`, `status`, `address`, `latitude`, `longitude`, `description`, `countyId`

#### Facility Detail Page — `/facility/[slug]`
- [ ] `generateStaticParams()` over all facilities with `status: active`
- [ ] ISR revalidation: 86400s
- [ ] Page sections:
  - Facility name, type badge, status badge
  - Address, phone, website (external link)
  - State + county breadcrumb links
  - Security level indicator
  - Provider list: `<FacilityProviderList />` with `<CommunicationBadges />` per provider
  - Affiliate links to each provider (UTM-tagged)
  - Description section
  - Map placeholder (lat/lng stored, map component added later)
  - `<RelatedLinks />` block
- [ ] Closed/transferred facilities: `noindex` meta, status notice, no affiliate CTAs
- [ ] Metadata: `generateFacilityMetadata(facility)` from `lib/seo.ts`
- [ ] JSON-LD: `WebPage` + `Place` + `Organization` + `FAQPage` (if FAQs present)

#### Facility Type Hubs
- [ ] `/federal-prisons/page.tsx`: directory filtered by `type: 'federal'`
- [ ] `/state-prisons/page.tsx`: filtered by `type: 'state'`
- [ ] `/county-jails/page.tsx`: filtered by `type: 'county'`
- [ ] `/private-prisons/page.tsx`: filtered by `type: 'private'`
- [ ] Each hub: count, state breakdown, searchable facility list, communication summary
- [ ] Scaffold `/[type]/[state-slug]/page.tsx` — static shell, populated in Phase 11
- [ ] JSON-LD: `WebPage` + `FAQPage`

#### Search Page — `/search`
- [ ] Server-rendered results via URL params: `q`, `state`, `type`, `county`
- [ ] PostgreSQL full-text search on `Facility.name`
- [ ] Filter by `stateId`, `type`, `status`
- [ ] `noindex` meta on search results page

#### Sitemap Update
- [ ] Add all active facility pages and facility type hub pages

### Deliverables
- All active facility pages rendered and indexed
- 4 facility type hub pages live
- Search page functional

### Success Criteria
- Facility pages for all seeded facilities build without error
- CommunicationBadges accurately reflect `FacilityProvider` data
- Closed facilities show `noindex` + status notice
- Facility type hubs filter correctly by `type`
- Search returns relevant results for "San Quentin", "JPay", "Rikers"
- Lighthouse SEO ≥ 90 on facility pages

---

## Phase 6 — Provider Pages

**Goal:** Build the provider content cluster — 6 providers × 5 routes = 30 pages.

### Tasks

#### Provider Directory — `/providers`
- [ ] Grid of all providers: logo, name, brief description, facility count
- [ ] Sort by facility count descending
- [ ] Featured/sponsored providers highlighted via `FeaturedListing`

#### Provider Overview — `/providers/[slug]`
- [ ] `generateStaticParams()` over all providers
- [ ] Page sections:
  - Provider name, logo, founded year, headquarters
  - Description
  - Mobile app: iOS + Android links (`<ProviderAppLinks />`)
  - Features offered (messaging, video, photos, voice, money)
  - Facility count + top facilities served
  - Affiliate CTA (UTM-tagged `affiliateUrl`)
  - Links to review, pricing, facilities sub-pages
- [ ] JSON-LD: `Organization` + `FAQPage`

#### Provider Review — `/providers/[slug]/review`
- [ ] Affiliate-optimized review format
- [ ] Sections: rating summary, pros, cons, feature breakdown, pricing summary, app review, affiliate CTA
- [ ] JSON-LD: `WebPage` + `FAQPage`

#### Provider Pricing — `/providers/[slug]/pricing`
- [ ] `<ProviderPricingTable />` component
- [ ] Per-feature pricing: messaging cost, video cost, photo cost, voice cost, money transfer fees
- [ ] Comparison note: "cheaper than [competitor]" with link to comparison page

#### Provider Facilities — `/providers/[slug]/facilities`
- [ ] Paginated list of all facilities where this provider is active
- [ ] FacilityCard with communication badges
- [ ] Filter by state

#### Sitemap Update
- [ ] Add all provider pages and sub-pages

### Deliverables
- Complete provider ecosystem — 30 pages
- All provider sub-pages linked from provider overview

### Success Criteria
- All 6 providers render all 5 sub-pages without error
- `ProviderAppLinks` shows only when `mobileApp: true` and URLs are set
- `ProviderPricingTable` renders without crashing on null pricing data
- Affiliate links are UTM-tagged correctly
- Featured providers appear highlighted in `/providers` directory
- Breadcrumb correct on all sub-pages

---

## Phase 7 — Comparison Pages

**Goal:** Build the comparison engine — SEO-optimized slug-based comparison URLs.

### Tasks

#### Comparison Hub — `/compare`
- [ ] Hero: "Compare Inmate Communication Providers"
- [ ] Grid of popular matchup cards (`<CompareMatchupCard />`)
- [ ] Each card: Provider A vs Provider B, key differentiator, link to comparison page

#### Comparison Page — `/compare/[matchup]`
- [ ] Parse `params.matchup` by splitting on `-vs-` → `[slugA, slugB]`
- [ ] Fetch both providers in parallel
- [ ] `generateStaticParams()` over seeded matchup pairs
- [ ] `<CompareTable />`: side-by-side features, pricing, app, facility count, founded year, headquarters
- [ ] Pros/cons section per provider
- [ ] Affiliate CTA for both providers
- [ ] "Also compare" related matchup links
- [ ] JSON-LD: `WebPage` + `FAQPage`

#### Seed Matchups
- [ ] jpay-vs-corrlinks
- [ ] jpay-vs-securus
- [ ] jpay-vs-gtl
- [ ] corrlinks-vs-securus
- [ ] securus-vs-gtl
- [ ] icsolutions-vs-pigeonly

#### Sitemap Update
- [ ] Add `/compare` hub and all matchup pages

### Deliverables
- Comparison engine live with 6+ comparison pages

### Success Criteria
- Slug parsing correctly splits `jpay-vs-corrlinks` → `['jpay', 'corrlinks']`
- 404 rendered gracefully if either provider slug is invalid
- CompareTable renders null pricing data without crashing
- Affiliate CTAs present for both providers
- Breadcrumb correct: Home → Compare → JPay vs CorrLinks

---

## Phase 8 — Guides

**Goal:** Build the educational content system to capture long-tail informational search traffic.

### Tasks

#### Guide Index — `/learn`
- [ ] Category-grouped grid of all published BlogPost records
- [ ] Categories: How-To, State Guides, Provider Guides, Rules & Regulations
- [ ] Featured guide card at top

#### Guide Page — `/learn/[slug]`
- [ ] `generateStaticParams()` over all published BlogPosts
- [ ] ISR revalidation: 86400s
- [ ] Page sections:
  - Title, author, published date, updated date
  - Featured image
  - Body content rendered from `content` field (HTML)
  - FAQ section from `faqSchema` JSON array
  - `<RelatedLinks />` block: providers, facilities, glossary terms, comparisons
- [ ] Auto-link first mention of glossary terms in body using `<GlossaryInlineLink />`
- [ ] Metadata: `generateGuideMetadata(post)` from `lib/seo.ts`
- [ ] JSON-LD: `Article` + `FAQPage` (when `faqSchema` present)

#### Seed Guides
- [ ] "How to Send a JPay Message — Step by Step"
- [ ] "How to Set Up Video Visitation"
- [ ] "California Prison Communication Guide"
- [ ] "Federal Prison Communication Rules"
- [ ] "JPay Complete Guide"

#### Sitemap Update
- [ ] Add guide index and all published guide pages

### Deliverables
- Educational content system live with 5+ seed guides

### Success Criteria
- Only published guides (`publishedAt` not null) appear on site and in sitemap
- `Article` JSON-LD renders with correct `datePublished` and `dateModified`
- FAQPage JSON-LD renders when `faqSchema` is populated
- Glossary inline links appear correctly in body text
- `<RelatedLinks />` pulls contextually relevant pages

---

## Phase 9 — Glossary

**Goal:** Build the glossary system to capture definition-intent searches and strengthen topical authority.

### Tasks

#### Glossary Index — `/glossary`
- [ ] Alphabetical grouping of all `GlossaryTerm` records
- [ ] `<GlossaryCard />` per term: term name, first 100 chars of definition, link
- [ ] Letter navigation anchors (A–Z)

#### Glossary Term Page — `/glossary/[slug]`
- [ ] `generateStaticParams()` over all GlossaryTerms
- [ ] Page sections:
  - Term name as H1
  - Full definition
  - Related terms section (from `relatedSlugs` — resolved to full term names + links)
  - `<RelatedLinks />`: relevant facility, provider, guide, hub pages
- [ ] Metadata: `generateGlossaryMetadata(term)` from `lib/seo.ts`
- [ ] JSON-LD: `DefinedTerm` + `WebPage` + `BreadcrumbList`

#### Auto-Linking
- [ ] Build `lib/glossary-linker.ts`: scans HTML content, wraps first mention of each glossary term with `<GlossaryInlineLink />`
- [ ] Apply in: facility description fields, guide body content

#### Seed Glossary
- [ ] 11 seed terms (see DATABASE_SCHEMA.md) — expand to 30+ before launch

#### Sitemap Update
- [ ] Add glossary index and all term pages

### Deliverables
- Industry vocabulary hub with 11+ terms
- Auto-linking active in facility and guide pages

### Success Criteria
- `DefinedTerm` JSON-LD validates in Google Rich Results Test
- Related terms resolve correctly (no broken `relatedSlugs`)
- Auto-linking does not double-link the same term
- Glossary index groups terms correctly A–Z
- All glossary URLs present in sitemap

---

## Phase 10 — Communication Hubs

**Goal:** Build the five communication feature hubs and their feature directories — key topical authority anchors.

### Tasks

#### Communication Hub Pages
- [ ] Build all 5 hub pages: `/messaging`, `/video-calls`, `/photo-sharing`, `/phone-calls`, `/money-transfer`
- [ ] Each hub page sections:
  - Feature explanation (what it is, how it works)
  - Provider grid: which providers offer this feature
  - State grid: states with this feature available
  - Quick links: comparison pages, related guides, glossary terms
  - `<HubLinks />` internal link block
- [ ] JSON-LD: `WebPage` + `FAQPage`

#### Feature Directory Pages
- [ ] Build all 5 directories: `/messaging/facilities`, `/video-calls/facilities`, etc.
- [ ] Filter `FacilityProvider` by the relevant boolean flag
- [ ] `<FeatureDirectory />` component: searchable, filterable by state
- [ ] JSON-LD: `WebPage` + `ItemList`

#### Internal Linking Integration
- [ ] Wire `<RelatedLinks />` on all previously built pages to include hub + directory links
- [ ] Confirm facility pages link to their relevant communication hubs
- [ ] Confirm state sub-pages link back to their hub page

#### Sitemap Update
- [ ] Add all hub pages and feature directory pages

### Deliverables
- 5 communication hub pages + 5 feature directories = 10 new pages
- Topical authority graph complete across all content clusters

### Success Criteria
- Each hub page links to providers, facility directory, state pages, comparisons, glossary, guides
- Feature directories filter correctly (only facilities with that feature flag = true)
- `ItemList` JSON-LD validates for feature directories
- All hub and directory URLs in sitemap

---

## Phase 11 — Programmatic SEO Expansion

**Goal:** Expand the programmatic SEO architecture with state × facility type sub-pages.

### Tasks

#### Facility Type × State Pages
- [ ] Activate scaffolded `/federal-prisons/[state-slug]/page.tsx`
- [ ] Activate `/state-prisons/[state-slug]/page.tsx`
- [ ] Activate `/county-jails/[state-slug]/page.tsx`
- [ ] `generateStaticParams()` from DB: all states that have facilities of each type
- [ ] Filter `Facility` by `type` + `stateId`
- [ ] Internal links: parent type hub, state page, individual facility pages

#### SEO Hardening
- [ ] Full Lighthouse audit on facility, state, county, provider, and comparison pages
- [ ] Fix any SEO, accessibility, or performance regressions
- [ ] Verify all canonical tags are correct
- [ ] Verify all breadcrumbs render matching JSON-LD
- [ ] Verify `noindex` on all excluded pages
- [ ] Confirm `sitemap.ts` covers all route clusters

#### Affiliate UTM Tracking
- [ ] Confirm all affiliate links use correct UTM params: `utm_source=inmatetext&utm_medium=affiliate&utm_campaign=[provider-slug]`
- [ ] Log outbound affiliate clicks via a lightweight API route `/api/track?provider=[slug]`

#### Featured/Sponsored Listings
- [ ] Display logic: query `FeaturedListing` where `endsAt > now()`
- [ ] Render `FeaturedBadge` on provider cards in directories and comparison hub
- [ ] `<AdSlot />` components active on facility pages, state pages, provider pages

#### Sitemap Update
- [ ] Add facility type × state pages

### Deliverables
- 200 new facility type × state pages
- SEO hardening complete
- Affiliate tracking active
- Display ad slots live

### Success Criteria
- All 200 type × state pages build without error
- Lighthouse SEO ≥ 90 across facility, state, and provider pages
- Affiliate UTM params present on all outbound provider links
- Active featured listings display correctly
- Sitemap complete and accurate

---

## Phase 12 — Database Integration

**Goal:** Connect to production Supabase PostgreSQL instance, run migrations, and load real data.

### Tasks

#### Supabase Setup
- [ ] Create Supabase project
- [ ] Set `DATABASE_URL` in Vercel environment variables
- [ ] Run `npx prisma migrate deploy` against production DB
- [ ] Run `npx prisma db seed` to populate initial data

#### Data Expansion
- [ ] Import all 50 US states with correct abbreviations
- [ ] Import all 3,000+ US counties with correct `stateId` links
- [ ] Import 500+ initial facilities (federal BOP facilities list, major state prisons)
- [ ] Import all 6 providers with full metadata
- [ ] Import `FacilityProvider` relationships for seeded facilities
- [ ] Import 30+ glossary terms
- [ ] Import 10+ guides

#### Admin Panel
- [ ] `/admin/page.tsx`: protected admin interface
- [ ] CRUD for: Facilities, Counties, Providers, BlogPosts, GlossaryTerms, FeaturedListings
- [ ] Basic auth protection (simple password or IP whitelist until Phase 14 auth)

#### Monitoring
- [ ] Set up Vercel Analytics
- [ ] Connect Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Vercel Speed Insights

### Deliverables
- Production database live on Supabase
- Real facility and provider data powering all pages
- Admin panel operational
- Analytics and Search Console connected

### Success Criteria
- All pages build against production DB without error
- Sitemap submitted and processing in Search Console
- Admin panel can create/update/delete all entity types
- Google Analytics / Vercel Analytics recording real traffic

---

## Phase 13 — Search Optimization

**Goal:** Improve the search experience with advanced filtering, sorting, and PostgreSQL full-text search optimization.

### Tasks

#### Search Improvements
- [ ] Add `tsvector` column to `Facility` for full-text search: `name || ' ' || description`
- [ ] Create GIN index on `tsvector` column
- [ ] Support multi-term queries: "california federal messaging"
- [ ] Add search result ranking by relevance score + facility size

#### Filtering System
- [ ] State filter: dropdown populated from DB
- [ ] Facility type filter: federal | state | county | private
- [ ] Feature filter: messaging | video | photos | voice | money
- [ ] Security level filter
- [ ] Provider filter

#### Sorting System
- [ ] Sort by: relevance (default) | name A–Z | inmate count | state

#### URL Persistence
- [ ] All filters reflected in URL params for shareability and back/forward navigation
- [ ] `/search?q=california&type=federal&feature=messaging&sort=name`
- [ ] `noindex` maintained on all search result URLs

#### Performance
- [ ] Paginate results: 20 per page
- [ ] Add loading skeletons for search result cards

### Deliverables
- Advanced search with full-text ranking
- Multi-filter support
- URL-persistent filter state

### Success Criteria
- Search returns relevant results in under 200ms for common queries
- Filters correctly narrow results with accurate counts
- URL updates as filters are applied
- Zero search results shows `<EmptyState />` with suggestions
- `noindex` confirmed on all `/search` URLs

---

## Phase 14 — Future SaaS Features

> **Do NOT implement during MVP. Schedule for future release.**

### Planned Features

#### Authentication
- NextAuth.js v5 with email + Google OAuth
- `/login`, `/signup` pages
- Session management via Supabase

#### User Accounts
- User profile with saved preferences
- Role-based access: `user` | `admin`

#### Saved Facilities
- Users can bookmark facilities
- Saved facilities accessible from `/dashboard`

#### Alerts
- Email alerts when a facility's communication options change
- Powered by Resend
- User-configurable alert preferences

#### User Dashboard — `/dashboard`
- Saved facilities list
- Saved comparisons
- Alert settings
- Account settings

#### AI Assistant *(Future)*
- Chat interface to help users find communication options
- Powered by Claude API
- Context-aware: knows facility data, provider data, state rules

### Prerequisites Before Building Phase 14
- Phase 12 complete (production DB and real data)
- Lighthouse SEO ≥ 90 across all core pages
- Google Search Console showing organic traffic growth
- Supabase Auth configured

---

## Success Criteria by Phase

| Phase | Key Metric |
|---|---|
| 1 — Foundation | Build passes, layout renders, SEO metadata correct |
| 2 — Homepage | Lighthouse SEO ≥ 90, all 50 state links present |
| 3 — State Pages | 300 static pages generated, sitemap updated |
| 4 — County Pages | All seeded counties render, linked from state pages |
| 5 — Facility Pages | All active facilities render, closed = noindex |
| 6 — Provider Pages | 30 provider sub-pages live, affiliate links UTM-tagged |
| 7 — Comparisons | Slug parsing works, 6+ comparison pages live |
| 8 — Guides | Published guides only indexed, Article JSON-LD valid |
| 9 — Glossary | DefinedTerm JSON-LD valid, auto-linking active |
| 10 — Hubs | Feature directories filter correctly, internal links complete |
| 11 — Programmatic SEO | 200 new pages, Lighthouse SEO ≥ 90 sitewide |
| 12 — Database | Production DB live, Search Console connected |
| 13 — Search | Results in < 200ms, multi-filter working |
| 14 — SaaS | Auth flow complete, dashboard functional |

---

## Technology Decisions Summary

| Decision | Choice | Reason |
|---|---|---|
| Rendering | SSG + ISR | Maximum SEO performance |
| URL design | Slug-based only | No query params on indexable pages |
| Structured data | JSON-LD via `<JsonLd />` | Cleaner than Microdata, Google-preferred |
| Facility schema | `Place` + `Organization` | More accurate than `LocalBusiness` for prisons |
| Closed facilities | noindex, not 404 | Preserves link equity, shows intent |
| Internal links | Data-driven `<RelatedLinks />` | Scales automatically with DB growth |
| Auth | Phase 14 only | SEO traffic first, accounts second |
| Search | PostgreSQL full-text | No extra cost, sufficient for MVP scale |
