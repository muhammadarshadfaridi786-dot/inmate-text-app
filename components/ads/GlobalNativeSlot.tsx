"use client"

import { usePathname } from "next/navigation"
import NativeBanner from "./NativeBanner"

/**
 * Site-wide native slot rendered above the footer.
 * Hidden on guide detail pages because those already render an
 * in-content native banner (GuideContent). Route-aware so client-side
 * navigation always leaves exactly one unit per page.
 */
export default function GlobalNativeSlot() {
  const pathname = usePathname()
  const isGuideDetail =
    !!pathname && pathname.startsWith("/guides/") && pathname !== "/guides/"

  if (isGuideDetail) return null
  return <NativeBanner />
}
