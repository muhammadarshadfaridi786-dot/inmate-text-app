"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Bookmark, LogOut, Mail, Shield } from "lucide-react"
import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import { useAuth } from "@/components/providers/AuthProvider"
import { createClient } from "@/lib/supabase/client"

export default function AccountPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/sign-in")
    }
  }, [user, loading, router])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  if (loading || !user) {
    return (
      <PageWrapper>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-label="Loading" />
        </div>
      </PageWrapper>
    )
  }

  const displayName = user.email?.split("@")[0] ?? "Account"
  const memberSince = new Date(user.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })

  return (
    <PageWrapper>
      <div className="py-12 max-w-2xl mx-auto">

        {/* Page header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">{displayName}</h1>
              <p className="text-sm text-muted-foreground">Member since {memberSince}</p>
            </div>
          </div>
        </div>

        {/* Account details */}
        <div className="mb-6 rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Account Details
          </h2>
          <div className="flex items-center gap-3 rounded-lg bg-muted/40 px-4 py-3">
            <Mail className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="text-sm text-foreground">{user.email}</span>
          </div>
        </div>

        {/* Quick links */}
        <div className="mb-6 rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Your Activity
          </h2>
          <div className="flex flex-col gap-2">
            <Link
              href="/account/saved"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground transition-colors hover:bg-accent"
            >
              <Bookmark className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              Saved Facilities
            </Link>
          </div>
        </div>

        {/* Sign out */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Session
          </h2>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm font-medium text-destructive transition-colors hover:bg-destructive/8"
          >
            <LogOut className="h-4 w-4 shrink-0" aria-hidden="true" />
            Sign Out
          </button>
        </div>

      </div>
    </PageWrapper>
  )
}
