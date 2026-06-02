import Link from "next/link"
import { cn } from "@/lib/utils"

export default function HeaderAuthActions() {
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
