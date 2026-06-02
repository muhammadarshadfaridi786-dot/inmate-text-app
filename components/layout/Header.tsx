import Link from "next/link"
import { Search } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import MobileNav from "./MobileNav"
import NavLinks from "./NavLinks"
import HeaderAuthActions from "@/components/auth/HeaderAuthActions"
import Logo from "./Logo"

const navLinks = [
  { label: "States", href: "/states" },
  { label: "Facilities", href: "/facilities" },
  { label: "Providers", href: "/providers" },
  { label: "Compare", href: "/compare" },
  { label: "Guides", href: "/guides" },
  { label: "Glossary", href: "/glossary" },
]

export default function Header() {
  return (
    <header className="animate-header-appear sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Inmate Text App — Home"
          >
            <Logo />
          </Link>

          {/* Desktop navigation — client component provides active state */}
          <NavLinks links={navLinks} />

          {/* Desktop auth actions */}
          <HeaderAuthActions />

          {/* Right side controls */}
          <div className="flex items-center gap-1">
            <Link
              href="/facilities"
              aria-label="Browse facilities"
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </Link>
            <ThemeToggle />
            <MobileNav navLinks={navLinks} />
          </div>

        </div>
      </div>
    </header>
  )
}
