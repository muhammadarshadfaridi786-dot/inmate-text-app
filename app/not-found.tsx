import Link from "next/link"
import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <p className="mb-4 text-6xl font-bold text-muted-foreground">404</p>
        <h1 className="mb-3 text-2xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mb-8 max-w-md text-muted-foreground">
          The page you are looking for does not exist. It may have been moved or
          removed.
        </p>
        <div className="flex gap-3">
          <Link href="/" className={buttonVariants()}>
            Go Home
          </Link>
          <Link
            href="/facilities"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Browse Facilities
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
