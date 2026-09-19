"use client"

import { useEffect } from "react"

export default function AdsterraBanner() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const key = isMobile ? "d87ca4352f896106531b4bd94c4c50af" : "3e35eaa2dcc7aff7efb1d0aabd6bae91"
    const width = isMobile ? 320 : 728
    const height = isMobile ? 50 : 90
    const containerId = isMobile ? "adsterra-mobile" : "adsterra-desktop"
    const container = document.getElementById(containerId)
    if (!container || container.childElementCount > 0) return
    const s1 = document.createElement("script")
    s1.text = `window.atOptions={'key':'${key}','format':'iframe','height':${height},'width':${width},'params':{}};`
    container.appendChild(s1)
    const s2 = document.createElement("script")
    s2.src = `https://www.highrevenueformat.com/${key}/invoke.js`
    s2.async = true
    container.appendChild(s2)
  }, [])

  return (
    <div className="my-4 flex justify-center w-full overflow-hidden">
      <div id="adsterra-desktop" className="hidden md:block" style={{ minHeight: 90 }} />
      <div id="adsterra-mobile" className="block md:hidden" style={{ minHeight: 50 }} />
    </div>
  )
}
