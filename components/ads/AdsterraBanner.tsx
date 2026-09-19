"use client"

import { useEffect, useState } from "react"

export default function AdsterraBanner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const containerId = isMobile
      ? "adsterra-banner-mobile"
      : "adsterra-banner-desktop"

    const container = document.getElementById(containerId)
    if (!container || container.querySelector("script")) return

    if (isMobile) {
      ;(window as any).atOptions = {
        key: "d87ca4352f896106531b4bd94c4c50af",
        format: "iframe",
        height: 50,
        width: 320,
        params: {},
      }
    } else {
      ;(window as any).atOptions = {
        key: "3e35eaa2dcc7aff7efb1d0aabd6bae91",
        format: "iframe",
        height: 90,
        width: 728,
        params: {},
      }
    }

    const script = document.createElement("script")
    script.src =
      "https://www.highrevenueformat.com/" +
      (isMobile
        ? "d87ca4352f896106531b4bd94c4c50af"
        : "3e35eaa2dcc7aff7efb1d0aabd6bae91") +
      "/invoke.js"
    script.async = true
    container.appendChild(script)
  }, [isMobile])

  return (
    <div className="my-6 flex justify-center w-full overflow-hidden">
      {isMobile ? (
        <div id="adsterra-banner-mobile" style={{ width: 320, height: 50 }} />
      ) : (
        <div id="adsterra-banner-desktop" style={{ width: 728, height: 90 }} />
      )}
    </div>
  )
}
