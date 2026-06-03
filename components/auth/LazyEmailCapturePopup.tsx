"use client"

import dynamic from "next/dynamic"

// ssr: false must live in a Client Component (Turbopack restriction).
// The popup itself is unchanged — this wrapper just handles the lazy boundary.
const EmailCapturePopup = dynamic(
  () => import("./EmailCapturePopup"),
  { ssr: false }
)

export default function LazyEmailCapturePopup() {
  return <EmailCapturePopup />
}
