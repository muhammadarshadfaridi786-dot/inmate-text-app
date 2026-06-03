"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Bookmark, LogIn, LogOut, Menu, User, UserPlus, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { LogoIcon } from "./Logo"
import { useAuth } from "@/components/providers/AuthProvider"
import { createClient } from "@/lib/supabase/client"

interface NavLink {
  label: string
  href: string
}

interface MobileNavProps {
  navLinks: NavLink[]
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Trigger */}
      <button
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/10 backdrop-blur-[2px] transition-opacity duration-150"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed inset-y-0 right-0 z-50 flex w-72 flex-col",
          "bg-popover text-popover-foreground shadow-lg",
          "transition-transform duration-200 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4">
          <span className="flex items-center gap-2.5 text-base font-medium tracking-tight text-foreground">
            <LogoIcon className="text-primary" />
            Inmate Text App
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth actions — hidden during initial load to prevent flash */}
        {!loading && (
          <div className="mt-6 border-t px-4 pt-5 flex flex-col gap-2">
            {user ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <User className="h-4 w-4 shrink-0" aria-hidden="true" />
                  My Account
                </Link>
                <Link
                  href="/account/saved"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Bookmark className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Saved Facilities
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <LogOut className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <LogIn className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium bg-primary text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Create Free Account
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}
