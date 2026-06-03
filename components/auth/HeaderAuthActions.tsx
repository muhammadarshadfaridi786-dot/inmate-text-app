"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Bookmark, ChevronDown, LogOut, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { useAuth } from "@/components/providers/AuthProvider"
import { cn } from "@/lib/utils"

export default function HeaderAuthActions() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setOpen(false)
    router.push("/")
    router.refresh()
  }

  // Reserve space during initial load to prevent layout shift
  if (loading) {
    return <div className="hidden md:block w-44 h-9" aria-hidden="true" />
  }

  if (user) {
    const displayName = user.email?.split("@")[0] ?? "Account"

    return (
      <div className="hidden md:flex items-center relative" ref={menuRef}>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="menu"
          className={cn(
            "inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium",
            "text-foreground transition-colors duration-150",
            "hover:bg-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          )}
        >
          <User className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="max-w-[120px] truncate">{displayName}</span>
          <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute right-0 top-full mt-1.5 w-48 rounded-lg border bg-popover shadow-md ring-1 ring-foreground/8 z-50"
          >
            <div className="p-1">
              <Link
                href="/account"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              >
                <User className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                My Account
              </Link>
              <Link
                href="/account/saved"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              >
                <Bookmark className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Saved Facilities
              </Link>
              <div className="my-1 h-px bg-border" aria-hidden="true" />
              <button
                role="menuitem"
                onClick={handleSignOut}
                className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              >
                <LogOut className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center gap-2">
      <Link
        href="/sign-in"
        className={cn(
          "inline-flex h-9 items-center rounded-lg px-3.5 text-sm font-medium",
          "text-muted-foreground transition-colors duration-150",
          "hover:bg-accent hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        )}
      >
        Sign In
      </Link>
      <Link
        href="/sign-up"
        className={cn(
          "inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium",
          "bg-primary text-primary-foreground shadow-sm",
          "transition-all duration-150",
          "hover:bg-primary/90 hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        )}
      >
        Get Started Free
      </Link>
    </div>
  )
}
