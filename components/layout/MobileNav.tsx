"use client"

import Link from "next/link"
import { LogIn, Menu, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "./Logo"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavLink {
  label: string
  href: string
}

interface MobileNavProps {
  navLinks: NavLink[]
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2.5 text-base tracking-tight">
            <LogoIcon className="text-primary" />
            Inmate Text App
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth actions */}
        <div className="mt-6 border-t pt-5 flex flex-col gap-2">
          <Link
            href="/sign-in"
            className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <LogIn className="h-4 w-4 shrink-0" aria-hidden="true" />
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium bg-primary text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
            Create Free Account
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
