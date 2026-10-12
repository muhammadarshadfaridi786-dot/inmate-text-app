"use client"

import { useEffect } from "react"

const NATIVE_KEY = "2ca1b183d44c851e16dbc56c8b04add8"
export const NATIVE_CONTAINER_ID = `container-${NATIVE_KEY}`
const CONTAINER_ID = NATIVE_CONTAINER_ID

/**
 * Adsterra Native Banner (in-content). Rendered once per page;
 * the embed script fills #container-<key> on the client.
 */
export default function NativeBanner() {
  useEffect(() => {
    const container = document.getElementById(CONTAINER_ID)
    if (!container) return
    if (container.querySelector(`script[data-native-key="${NATIVE_KEY}"]`)) return
    const s = document.createElement("script")
    s.setAttribute("data-native-key", NATIVE_KEY)
    s.setAttribute("data-cfasync", "false")
    s.async = true
    s.src = `https://pl31408504.profitableratecpmnetwork.com/${NATIVE_KEY}/invoke.js`
    container.appendChild(s)
  }, [])

  return (
    <div className="my-8 flex justify-center w-full overflow-hidden">
      <div id={CONTAINER_ID} />
    </div>
  )
}
