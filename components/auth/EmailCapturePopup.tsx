"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Bell, CheckCircle2, X } from "lucide-react"
import { trackEmailSubscription } from "@/lib/analytics"

const STORAGE_KEY = "ita_email_popup_dismissed"
const SUPPRESS_MS = 7 * 24 * 60 * 60 * 1000 // 7 days
const TIMER_MS = 45000 // 45 seconds
const SCROLL_THRESHOLD = 0.5 // 50% scroll depth

const BENEFITS = [
  "Facility communication changes",
  "New provider guides",
  "Messaging and visitation updates",
  "Platform improvements",
]

type SubmitState = "idle" | "loading" | "success" | "already_subscribed" | "error"

const HUB_PATHS = ["/messaging", "/video-calls", "/phone-calls", "/photo-sharing", "/money-transfer"]

function getPageType(path: string): string {
  if (path === "/") return "home"
  if (path.startsWith("/facility/")) return "facility"
  if (path.startsWith("/provider/")) return "provider"
  if (path.startsWith("/state/")) return "state"
  if (path.startsWith("/county/")) return "county"
  if (path.startsWith("/compare/")) return "comparison"
  if (path.startsWith("/guides/")) return "guide"
  if (path.startsWith("/glossary/")) return "glossary"
  if (HUB_PATHS.some((h) => path.startsWith(h))) return "hub"
  return "other"
}

export default function EmailCapturePopup() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const triggered = useRef(false)

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {
      // localStorage unavailable in some contexts — fail silently
    }
    setOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.")
      return
    }

    if (!consent) {
      setErrorMessage("Please accept the privacy policy to subscribe.")
      return
    }

    setErrorMessage("")
    setSubmitState("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        setSubmitState("error")
        setErrorMessage(data.error ?? "Something went wrong. Please try again.")
        return
      }

      if (data.message === "already_subscribed") {
        setSubmitState("already_subscribed")
      } else {
        setSubmitState("success")
        const path = window.location.pathname
        trackEmailSubscription({ pagePath: path, pageType: getPageType(path) })
      }

      setTimeout(dismiss, 3000)
    } catch {
      setSubmitState("error")
      setErrorMessage("Could not connect. Please check your connection and try again.")
    }
  }

  useEffect(() => {
    setMounted(true)

    // Check suppression
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const elapsed = Date.now() - parseInt(raw, 10)
        if (elapsed < SUPPRESS_MS) return
      }
    } catch {
      // ignore
    }

    const show = () => {
      if (triggered.current) return
      triggered.current = true
      setOpen(true)
    }

    const timer = setTimeout(show, TIMER_MS)

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (total > 0 && scrolled / total >= SCROLL_THRESHOLD) show()
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  if (!mounted || !open) return null

  const isFinished =
    submitState === "success" || submitState === "already_subscribed"

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-in fade-in-0 duration-200"
        aria-hidden="true"
        onClick={dismiss}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-popup-title"
        aria-describedby="email-popup-desc"
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 sm:max-w-md animate-in fade-in-0 zoom-in-95 duration-200"
      >
        <div className="relative rounded-2xl border bg-popover shadow-xl ring-1 ring-foreground/8 p-6">

          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="Close signup popup"
            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          {isFinished ? (
            <div className="flex flex-col items-center py-4 text-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              {submitState === "already_subscribed" ? (
                <>
                  <h2 className="text-base font-semibold text-foreground">
                    You&apos;re already subscribed
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Your email is already on our list. We&apos;ll keep you updated.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-base font-semibold text-foreground">
                    You&apos;re on the list
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    We&apos;ll send updates about facility changes, new guides, and platform
                    improvements. Unsubscribe any time.
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              {/* Icon + heading */}
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Bell className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id="email-popup-title"
                    className="text-base font-semibold text-foreground"
                  >
                    Stay Updated
                  </h2>
                  <p
                    id="email-popup-desc"
                    className="mt-0.5 text-sm text-muted-foreground"
                  >
                    Get updates about:
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <ul className="mb-5 space-y-2" aria-label="Update topics">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="popup-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="popup-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errorMessage) setErrorMessage("")
                  }}
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  disabled={submitState === "loading"}
                  className="mb-3 h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors disabled:opacity-50"
                />

                {/* Consent checkbox */}
                <div className="mb-3 flex items-start gap-2.5">
                  <input
                    id="popup-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked)
                      if (errorMessage) setErrorMessage("")
                    }}
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border border-input accent-primary"
                    disabled={submitState === "loading"}
                  />
                  <label
                    htmlFor="popup-consent"
                    className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and consent to receive occasional updates from Inmate Text App.
                    Unsubscribe at any time.
                  </label>
                </div>

                {/* Error message */}
                {errorMessage && (
                  <p
                    role="alert"
                    className="mb-3 text-xs text-destructive"
                  >
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full h-10 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitState === "loading" ? "Subscribing..." : "Stay Informed"}
                </button>
              </form>

              {/* Dismissal note */}
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No spam. Unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}
