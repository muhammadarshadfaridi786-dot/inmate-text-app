import Link from "next/link"
import { BookOpen, GitCompare, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"

interface TermCTAProps {
  termName: string
  relatedHubs: string[]
}

const HUB_LABELS: Record<string, string> = {
  "/messaging":      "Messaging Guide",
  "/video-calls":    "Video Calls Guide",
  "/phone-calls":    "Phone Calls Guide",
  "/photo-sharing":  "Photo Sharing Guide",
  "/money-transfer": "Money Transfer Guide",
}

export default function TermCTA({ termName, relatedHubs }: TermCTAProps) {
  return (
    <section className="bg-primary py-14" aria-labelledby="term-cta-heading">
      <PageWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="term-cta-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
          >
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/80">
            Now that you understand {termName}, explore the provider directory, compare your options,
            or browse all facilities to find the right fit for your situation.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row flex-wrap">
            {relatedHubs.map((hub) => (
              <Link
                key={hub}
                href={hub}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "h-11 gap-2 px-8 text-sm font-semibold"
                )}
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                {HUB_LABELS[hub] ?? "Communication Guide"}
              </Link>
            ))}
            <Link
              href="/providers"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 gap-2 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <Building2 className="h-4 w-4" aria-hidden="true" />
              All Providers
            </Link>
            <Link
              href="/compare"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 gap-2 bg-transparent border-primary-foreground/60 px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground active:bg-primary-foreground/25 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <GitCompare className="h-4 w-4" aria-hidden="true" />
              Compare Providers
            </Link>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
