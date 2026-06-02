"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLink {
  label: string
  href: string
}

interface NavLinksProps {
  links: NavLink[]
}

export default function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href))
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              isActive
                ? "text-foreground bg-accent"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
