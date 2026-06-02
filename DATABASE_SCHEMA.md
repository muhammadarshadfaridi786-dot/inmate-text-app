# Inmate Text App — Database Schema

## Overview

PostgreSQL database managed via Prisma ORM.

All models use `cuid()` as the primary key. Slugs are unique and used as URL identifiers across all public-facing routes. The schema is designed for programmatic SEO scale — thousands of facilities, counties, and states generating static pages at build time.

---

## Entity Relationship Overview

```
State ──< County ──< Facility >──< FacilityProvider >── Provider
                        │                                    │
                        └── status (active/closed/transferred)
                                                             │
                                                    FeaturedListing

BlogPost (guides, standalone)
GlossaryTerm (standalone)
User (Phase 10)
```

---

## Complete Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ─────────────────────────────────────────────
// GEOGRAPHY
// ─────────────────────────────────────────────

model State {
  id            String     @id @default(cuid())
  name          String
  slug          String     @unique   // e.g., "california"
  abbreviation  String               // e.g., "CA"
  facilityCount Int        @default(0)

  facilities    Facility[]
  counties      County[]

  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt

  @@index([slug])
}

model County {
  id         String     @id @default(cuid())
  name       String
  slug       String     @unique   // e.g., "los-angeles-county"
  stateId    String

  state      State      @relation(fields: [stateId], references: [id])
  facilities Facility[]

  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt

  @@index([slug])
  @@index([stateId])
}

// ─────────────────────────────────────────────
// FACILITIES
// ─────────────────────────────────────────────

model Facility {
  id            String             @id @default(cuid())
  name          String
  slug          String             @unique   // e.g., "san-quentin-state-prison"

  // Geography
  stateId       String
  state         State              @relation(fields: [stateId], references: [id])
  countyId      String?
  county        County?            @relation(fields: [countyId], references: [id])

  // Classification
  type          String             // federal | state | county | private
  status        String             @default("active")  // active | closed | transferred
  securityLevel String?            // minimum | low | medium | high | maximum | supermax

  // Contact
  address       String?
  phone         String?
  website       String?

  // Content
  description   String?            // Rich text — used for SEO page body
  inmateCount   Int?

  // Geo (for maps and geo-based search)
  latitude      Float?
  longitude     Float?

  // Relations
  providers     FacilityProvider[]

  createdAt     DateTime           @default(now())
  updatedAt     DateTime           @updatedAt

  @@index([slug])
  @@index([stateId])
  @@index([countyId])
  @@index([type])
  @@index([status])
}

// ─────────────────────────────────────────────
// PROVIDERS
// ─────────────────────────────────────────────

model Provider {
  id            String             @id @default(cuid())
  name          String
  slug          String             @unique   // e.g., "jpay"

  // Web
  website       String?
  logoUrl       String?
  affiliateUrl  String?            // UTM-tagged affiliate destination URL

  // Content
  description   String?

  // Company metadata (for review and comparison pages)
  foundedYear   Int?
  headquarters  String?

  // Mobile app
  mobileApp     Boolean            @default(false)
  iosUrl        String?
  androidUrl    String?

  // Relations
  facilities    FacilityProvider[]
  listings      FeaturedListing[]

  createdAt     DateTime           @default(now())
  updatedAt     DateTime           @updatedAt

  @@index([slug])
}

// ─────────────────────────────────────────────
// FACILITY ↔ PROVIDER RELATIONSHIP
// ─────────────────────────────────────────────

model FacilityProvider {
  id            String   @id @default(cuid())

  facilityId    String
  providerId    String

  facility      Facility @relation(fields: [facilityId], references: [id])
  provider      Provider @relation(fields: [providerId], references: [id])

  // Communication features available at this facility via this provider
  messaging     Boolean  @default(false)
  video         Boolean  @default(false)
  photos        Boolean  @default(false)
  voiceCalls    Boolean  @default(false)
  moneyTransfer Boolean  @default(false)

  // Optional notes (e.g., "messaging limited to 6 messages/month")
  notes         String?

  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@unique([facilityId, providerId])
  @@index([facilityId])
  @@index([providerId])
  @@index([messaging])
  @@index([video])
  @@index([photos])
  @@index([voiceCalls])
  @@index([moneyTransfer])
}

// ─────────────────────────────────────────────
// CONTENT — GUIDES & BLOG POSTS
// ─────────────────────────────────────────────

model BlogPost {
  id             String    @id @default(cuid())
  title          String
  slug           String    @unique   // e.g., "how-to-send-jpay-message"

  // Content
  excerpt        String              // Short summary — used in cards and meta description
  content        String              // HTML or MDX body

  // Media
  featuredImage  String?             // URL to hero/OG image

  // SEO overrides
  seoTitle       String?             // Overrides <title> tag if set
  seoDescription String?            // Overrides <meta description> if set

  // Classification
  category       String?             // guide | news | comparison | state-guide | provider-guide | rules
  author         String?

  // FAQ structured data
  // Array of { question: string, answer: string } — rendered as FAQPage JSON-LD
  faqSchema      Json?

  publishedAt    DateTime?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt

  @@index([slug])
  @@index([category])
  @@index([publishedAt])
}

// ─────────────────────────────────────────────
// CONTENT — GLOSSARY
// ─────────────────────────────────────────────

model GlossaryTerm {
  id             String   @id @default(cuid())
  term           String
  slug           String   @unique   // e.g., "jpay-stamps"

  // Content
  definition     String              // Full definition — page body

  // SEO overrides
  seoTitle       String?
  seoDescription String?

  // Internal linking — slugs of related glossary terms
  relatedSlugs   String[]

  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  @@index([slug])
}

// ─────────────────────────────────────────────
// MONETIZATION
// ─────────────────────────────────────────────

model FeaturedListing {
  id         String   @id @default(cuid())

  providerId String
  provider   Provider @relation(fields: [providerId], references: [id])

  tier       String   // featured | sponsored | premium

  startsAt   DateTime
  endsAt     DateTime

  createdAt  DateTime @default(now())

  @@index([providerId])
  @@index([endsAt])
}

// ─────────────────────────────────────────────
// AUTH — PHASE 10
// ─────────────────────────────────────────────

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      String   @default("user")   // user | admin

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
}
```

---

## Model Reference

### State

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| name | String | Full state name — "California" |
| slug | String | URL slug — "california" |
| abbreviation | String | Two-letter code — "CA" |
| facilityCount | Int | Cached count, updated on seed/sync |
| facilities | Facility[] | All facilities in this state |
| counties | County[] | All counties in this state |

**Used by routes:** `/state/[slug]`, `/state/[slug]/messaging`, `/state/[slug]/video-calls`, `/state/[slug]/photo-sharing`, `/state/[slug]/money-transfer`, `/state/[slug]/phone-calls`, `/federal-prisons/[state-slug]`, sitemap

---

### County

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| name | String | "Los Angeles County" |
| slug | String | "los-angeles-county" |
| stateId | String | FK → State |
| state | State | Parent state |
| facilities | Facility[] | Facilities in this county |

**Used by routes:** `/county/[slug]`, facility pages, state pages, sitemap

---

### Facility

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| name | String | "San Quentin State Prison" |
| slug | String | "san-quentin-state-prison" |
| stateId | String | FK → State |
| countyId | String? | FK → County (nullable) |
| type | String | `federal` \| `state` \| `county` \| `private` |
| status | String | `active` \| `closed` \| `transferred` |
| securityLevel | String? | `minimum` \| `low` \| `medium` \| `high` \| `maximum` \| `supermax` |
| address | String? | Full mailing address |
| phone | String? | Main facility phone |
| website | String? | Official facility website |
| description | String? | SEO body content |
| inmateCount | Int? | Approximate inmate population |
| latitude | Float? | For map display |
| longitude | Float? | For map display |
| providers | FacilityProvider[] | Communication providers at this facility |

**Notes:**
- `status: closed` → page renders with `noindex` meta tag, not a 404
- `status: transferred` → page renders with redirect notice and `noindex`
- `type` drives `/federal-prisons`, `/state-prisons`, `/county-jails`, `/private-prisons` directories

**Used by routes:** `/facility/[slug]`, `/[feature]/facilities`, `/federal-prisons`, `/state/[slug]`, `/county/[slug]`, `/providers/[slug]/facilities`, sitemap

---

### Provider

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| name | String | "JPay" |
| slug | String | "jpay" |
| website | String? | Official website URL |
| logoUrl | String? | Hosted logo image URL |
| affiliateUrl | String? | UTM-tagged affiliate link |
| description | String? | Provider overview for SEO |
| foundedYear | Int? | e.g., 2002 — shown on review pages |
| headquarters | String? | e.g., "Miramar, FL" — shown on review pages |
| mobileApp | Boolean | Whether provider has a mobile app |
| iosUrl | String? | App Store link |
| androidUrl | String? | Google Play link |
| facilities | FacilityProvider[] | Facilities this provider serves |
| listings | FeaturedListing[] | Active sponsored listings |

**Used by routes:** `/providers/[slug]`, `/providers/[slug]/review`, `/providers/[slug]/pricing`, `/providers/[slug]/facilities`, `/compare/[matchup]`, sitemap

---

### FacilityProvider

Junction table connecting Facility ↔ Provider. One row per facility–provider pair.

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| facilityId | String | FK → Facility |
| providerId | String | FK → Provider |
| messaging | Boolean | Email/text messaging available |
| video | Boolean | Video visitation available |
| photos | Boolean | Photo sharing available |
| voiceCalls | Boolean | Voice/phone calls available |
| moneyTransfer | Boolean | Money/commissary transfer available |
| notes | String? | Restrictions, limits, or special conditions |

**Constraint:** `@@unique([facilityId, providerId])` — one record per pair.

**Indexes on all boolean fields** to support fast filtering in `/[feature]/facilities` directories.

**Used by routes:** `/facility/[slug]`, `/messaging/facilities`, `/video-calls/facilities`, `/photo-sharing/facilities`, `/money-transfer/facilities`, `/phone-calls/facilities`, `/state/[slug]/[feature]`

---

### BlogPost

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| title | String | Page H1 and default title tag |
| slug | String | "how-to-send-jpay-message" |
| excerpt | String | Short summary — meta description + cards |
| content | String | HTML or MDX body content |
| featuredImage | String? | Hero image URL |
| seoTitle | String? | Overrides `<title>` tag |
| seoDescription | String? | Overrides `<meta description>` |
| category | String? | `guide` \| `news` \| `comparison` \| `state-guide` \| `provider-guide` \| `rules` |
| author | String? | Author name |
| faqSchema | Json? | `[{ question: string, answer: string }]` — rendered as FAQPage JSON-LD |
| publishedAt | DateTime? | Null = draft |

**Used by routes:** `/learn`, `/learn/[slug]`, sitemap (published only)

---

### GlossaryTerm

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| term | String | Display name — "JPay Stamps" |
| slug | String | "jpay-stamps" |
| definition | String | Full definition — page body |
| seoTitle | String? | Overrides `<title>` tag |
| seoDescription | String? | Overrides `<meta description>` |
| relatedSlugs | String[] | Slugs of related GlossaryTerms for internal linking |

**Used by routes:** `/glossary`, `/glossary/[slug]`, inline auto-linking in facility/guide pages, sitemap

---

### FeaturedListing

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| providerId | String | FK → Provider |
| tier | String | `featured` \| `sponsored` \| `premium` |
| startsAt | DateTime | Listing start date |
| endsAt | DateTime | Listing expiry — queried with `endsAt > now()` |

**Used by:** provider directory pages, facility pages, homepage featured section

---

### User *(Phase 10)*

| Field | Type | Notes |
|---|---|---|
| id | String | cuid primary key |
| email | String | Unique login email |
| name | String? | Display name |
| role | String | `user` \| `admin` |

---

## Seed Data (`prisma/seed.ts`)

### States (50 total)

Sample:

| name | slug | abbreviation |
|---|---|---|
| California | california | CA |
| Texas | texas | TX |
| Florida | florida | FL |
| New York | new-york | NY |
| Illinois | illinois | IL |
| Pennsylvania | pennsylvania | PA |
| Ohio | ohio | OH |
| Georgia | georgia | GA |
| Arizona | arizona | AZ |
| North Carolina | north-carolina | NC |

### Counties (major counties — expand over time)

| name | slug | state |
|---|---|---|
| Los Angeles County | los-angeles-county | california |
| Orange County | orange-county | california |
| Harris County | harris-county | texas |
| Dallas County | dallas-county | texas |
| Cook County | cook-county | illinois |
| Maricopa County | maricopa-county | arizona |
| Miami-Dade County | miami-dade-county | florida |
| Kings County | kings-county | new-york |

### Seed Facilities (20+)

| name | type | state |
|---|---|---|
| San Quentin State Prison | state | california |
| Folsom State Prison | state | california |
| Rikers Island | county | new-york |
| Attica Correctional Facility | state | new-york |
| FCI Coleman Medium | federal | florida |
| FCI Butner Medium I | federal | north-carolina |
| Huntsville Unit | state | texas |
| Cook County Jail | county | illinois |
| Maricopa County Jail | county | arizona |
| ADX Florence | federal | colorado |

### Seed Providers (6)

| name | slug | foundedYear | headquarters | mobileApp |
|---|---|---|---|---|
| JPay | jpay | 2002 | Miramar, FL | true |
| Global Tel Link | gtl | 1988 | Atlanta, GA | true |
| Securus Technologies | securus | 1986 | Dallas, TX | true |
| CorrLinks | corrlinks | 2004 | Washington, DC | false |
| ICSolutions | icsolutions | 2000 | San Antonio, TX | true |
| Pigeonly | pigeonly | 2012 | Las Vegas, NV | false |

### Seed Glossary Terms (initial 11)

| term | slug |
|---|---|
| JPay Stamps | jpay-stamps |
| Video Visitation | video-visitation |
| Commissary | commissary |
| Federal Prison | federal-prison |
| State Prison | state-prison |
| County Jail | county-jail |
| Inmate Messaging | inmate-messaging |
| CorrLinks Email | corrlinks-email |
| GTL Phone Call | gtl-phone-call |
| Money Transfer | money-transfer |
| Photo Sharing | photo-sharing |

---

## Database Indexes Summary

```prisma
State          @@index([slug])
County         @@index([slug]), @@index([stateId])
Facility       @@index([slug]), @@index([stateId]), @@index([countyId]),
               @@index([type]), @@index([status])
Provider       @@index([slug])
FacilityProvider  @@unique([facilityId, providerId]),
                  @@index([facilityId]), @@index([providerId]),
                  @@index([messaging]), @@index([video]),
                  @@index([photos]), @@index([voiceCalls]),
                  @@index([moneyTransfer])
BlogPost       @@index([slug]), @@index([category]), @@index([publishedAt])
GlossaryTerm   @@index([slug])
FeaturedListing @@index([providerId]), @@index([endsAt])
User           @@index([email])
```

---

## Migration Commands

```bash
# Initial migration
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Seed the database
npx prisma db seed

# Open Prisma Studio (local DB browser)
npx prisma studio

# Reset DB and reseed (development only)
npx prisma migrate reset
```

---

## Common Query Patterns

```ts
// All active facilities in a state
prisma.facility.findMany({
  where: { stateId: state.id, status: 'active' },
  include: { county: true, providers: { include: { provider: true } } }
})

// All facilities with messaging enabled
prisma.facility.findMany({
  where: { providers: { some: { messaging: true } }, status: 'active' },
  include: { state: true, county: true }
})

// All facilities served by a provider
prisma.facilityProvider.findMany({
  where: { providerId: provider.id },
  include: { facility: { include: { state: true, county: true } } }
})

// Side-by-side comparison
const [providerA, providerB] = await Promise.all([
  prisma.provider.findUnique({ where: { slug: slugA }, include: { facilities: true } }),
  prisma.provider.findUnique({ where: { slug: slugB }, include: { facilities: true } })
])

// Active featured listings
prisma.featuredListing.findMany({
  where: { endsAt: { gt: new Date() } },
  include: { provider: true },
  orderBy: { tier: 'asc' }
})

// Published guides by category
prisma.blogPost.findMany({
  where: { category: 'guide', publishedAt: { not: null } },
  orderBy: { publishedAt: 'desc' }
})
```
