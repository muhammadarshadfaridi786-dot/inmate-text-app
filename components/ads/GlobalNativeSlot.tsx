"use client"

import { useEffect, useState } from "react"
import NativeBanner, { NATIVE_CONTAINER_ID } from "./NativeBanner"

/**
 * Site-wide native slot rendered above the footer.
 * Skips itself when the page already has an in-content native banner
 * (e.g. guide detail pages), so every page gets exactly one unit.
 */
export default function GlobalNativeSlot() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(!document.getElementById(NATIVE_CONTAINER_ID))
  }, [])

  if (!show) return null
  return <NativeBanner />
}
