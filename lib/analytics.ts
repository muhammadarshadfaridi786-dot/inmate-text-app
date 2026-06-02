/**
 * Analytics event tracking utility.
 *
 * All functions are safe to import in any component — they guard against
 * window.gtag being undefined (e.g. during SSR or when GA4 is not loaded).
 *
 * Usage:
 *   import { trackEmailSubscription } from "@/lib/analytics"
 *   trackEmailSubscription({ pagePath: "/", pageType: "home" })
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args)
  }
}

// ---------------------------------------------------------------------------
// Subscription events
// ---------------------------------------------------------------------------

export function trackEmailSubscription({
  pagePath,
  pageType,
}: {
  pagePath: string
  pageType: string
}) {
  gtag("event", "email_subscription", {
    method: "popup",
    page_path: pagePath,
    page_type: pageType,
  })
}

// ---------------------------------------------------------------------------
// Authentication events
// ---------------------------------------------------------------------------

export function trackSignUp() {
  gtag("event", "sign_up", {
    method: "email",
  })
}

export function trackSignIn() {
  gtag("event", "login", {
    method: "email",
  })
}

// ---------------------------------------------------------------------------
// Content view events (wire to page components when ready)
// ---------------------------------------------------------------------------

export function trackProviderView(providerSlug: string) {
  gtag("event", "provider_view", {
    provider_slug: providerSlug,
  })
}

export function trackFacilityView(facilitySlug: string) {
  gtag("event", "facility_view", {
    facility_slug: facilitySlug,
  })
}

export function trackComparisonView(comparisonSlug: string) {
  gtag("event", "comparison_view", {
    comparison_slug: comparisonSlug,
  })
}

// ---------------------------------------------------------------------------
// CTA events
// ---------------------------------------------------------------------------

export function trackCtaClick({
  location,
  label,
  pagePath,
}: {
  location: string
  label: string
  pagePath: string
}) {
  gtag("event", "cta_click", {
    location,
    label,
    page_path: pagePath,
  })
}

// ---------------------------------------------------------------------------
// User preference events (wire when account features are live)
// ---------------------------------------------------------------------------

/** Ready to wire when saved-facilities feature launches. */
export function trackFavoriteFacility(_facilitySlug: string) {
  // Not yet wired. Implement when saved facilities are available.
}

/** Ready to wire when saved-providers feature launches. */
export function trackFavoriteProvider(_providerSlug: string) {
  // Not yet wired. Implement when saved providers are available.
}

/** Ready to wire when watchlist feature launches. */
export function trackWatchlistAdd(_itemSlug: string, _itemType: "facility" | "provider") {
  // Not yet wired. Implement when watchlist is available.
}
