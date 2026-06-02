"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, CheckCircle2, Eye, EyeOff, Shield } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { trackSignUp } from "@/lib/analytics"

const FEATURES = [
  "Save facilities for quick access",
  "Track your favorite providers",
  "Get email updates about facility changes",
  "Receive new guide notifications",
]

const AUTH_ERRORS: Record<string, string> = {
  "User already registered": "An account with that email address already exists. Try signing in instead.",
  "Password should be at least 6 characters": "Your password must be at least 6 characters long.",
  "Unable to validate email address": "Please enter a valid email address.",
  "Signup is disabled": "Account creation is temporarily unavailable. Please try again later.",
  "Too many requests": "Too many sign-up attempts. Please wait a few minutes and try again.",
}

function resolveAuthError(message: string): string {
  for (const [key, friendly] of Object.entries(AUTH_ERRORS)) {
    if (message.includes(key)) return friendly
  }
  return "We could not create your account. Please check your details and try again."
}

type FormState = "idle" | "loading" | "success" | "error"

export default function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [consent, setConsent] = useState(false)
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.")
      return
    }

    if (!password || password.length < 6) {
      setErrorMessage("Your password must be at least 6 characters long.")
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage("Your passwords do not match. Please try again.")
      return
    }

    if (!consent) {
      setErrorMessage("Please accept the terms to create an account.")
      return
    }

    setFormState("loading")

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
      },
    })

    if (error) {
      setFormState("error")
      setErrorMessage(resolveAuthError(error.message))
      return
    }

    trackSignUp()
    setFormState("success")
  }

  if (formState === "success") {
    return (
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-primary"
            aria-label="Return to Inmate Text App home"
          >
            <Shield className="h-6 w-6" aria-hidden="true" />
            <span>Inmate Text App</span>
          </Link>
        </div>

        <div className="rounded-2xl border bg-card p-7 shadow-sm ring-1 ring-foreground/8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
          </div>
          <h1 className="mb-2 text-xl font-semibold text-foreground">
            Check your email
          </h1>
          <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
            We sent a confirmation link to{" "}
            <span className="font-medium text-foreground">{email}</span>. Click
            the link in that email to activate your account.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Continue browsing
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Did not receive the email? Check your spam folder or{" "}
          <button
            onClick={() => {
              setFormState("idle")
              setErrorMessage("")
            }}
            className="font-medium text-primary hover:underline"
          >
            try again
          </button>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm">

      {/* Logo mark */}
      <div className="mb-8 flex justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-primary"
          aria-label="Return to Inmate Text App home"
        >
          <Shield className="h-6 w-6" aria-hidden="true" />
          <span>Inmate Text App</span>
        </Link>
      </div>

      {/* Card */}
      <div className="rounded-2xl border bg-card p-7 shadow-sm ring-1 ring-foreground/8">
        <h1 className="mb-1 text-xl font-semibold text-foreground">
          Create Free Account
        </h1>
        <p className="mb-5 text-sm text-muted-foreground">
          Save facilities, track providers, and stay informed.
        </p>

        {/* Feature list */}
        <ul className="mb-5 space-y-2">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Error alert */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-5 rounded-lg border border-destructive/30 bg-destructive/8 px-3.5 py-3 text-xs text-destructive leading-relaxed"
          >
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="signup-email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Email address
            </label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={formState === "loading"}
              className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                autoComplete="new-password"
                required
                disabled={formState === "loading"}
                className="h-10 w-full rounded-lg border border-input bg-transparent px-3 pr-10 text-sm placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
              >
                {showPassword
                  ? <EyeOff className="h-4 w-4" aria-hidden="true" />
                  : <Eye className="h-4 w-4" aria-hidden="true" />
                }
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="signup-confirm-password"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Confirm password
            </label>
            <input
              id="signup-confirm-password"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat your password"
              autoComplete="new-password"
              required
              disabled={formState === "loading"}
              className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2.5">
            <input
              id="signup-consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border border-input accent-primary"
              disabled={formState === "loading"}
            />
            <label
              htmlFor="signup-consent"
              className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full h-10 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === "loading" ? "Creating account..." : "Create Free Account"}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            No credit card required.
          </p>
        </form>
      </div>

      {/* Footer links */}
      <p className="mt-5 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        <Link href="/" className="hover:underline">
          Continue browsing without an account
        </Link>
      </p>
    </div>
  )
}
