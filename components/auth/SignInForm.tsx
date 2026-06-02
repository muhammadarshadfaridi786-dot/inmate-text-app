"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff, Shield } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { trackSignIn } from "@/lib/analytics"

type FormState = "idle" | "loading" | "error"

const AUTH_ERRORS: Record<string, string> = {
  "Invalid login credentials": "The email or password you entered is incorrect.",
  "Email not confirmed": "Please check your inbox and confirm your email address before signing in.",
  "Too many requests": "Too many sign-in attempts. Please wait a few minutes and try again.",
}

function resolveAuthError(message: string): string {
  for (const [key, friendly] of Object.entries(AUTH_ERRORS)) {
    if (message.includes(key)) return friendly
  }
  return "Sign in failed. Please check your credentials and try again."
}

export default function SignInForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!email.trim() || !password) {
      setErrorMessage("Please enter your email address and password.")
      return
    }

    setFormState("loading")

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    })

    if (error) {
      setFormState("error")
      setErrorMessage(resolveAuthError(error.message))
      return
    }

    trackSignIn()
    router.push("/")
    router.refresh()
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
          Sign In
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Access your saved facilities and provider watchlists.
        </p>

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
              htmlFor="signin-email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Email address
            </label>
            <input
              id="signin-email"
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
              htmlFor="signin-password"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="signin-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
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

          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full h-10 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === "loading" ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>

      {/* Footer links */}
      <p className="mt-5 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="font-medium text-primary hover:underline">
          Create one free
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
