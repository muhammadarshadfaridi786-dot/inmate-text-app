"use client"

import Link from "next/link"
import { useRef } from "react"
import { BookOpen, Building2, Hash, Monitor } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"

type Category = "facility" | "provider" | "guide" | "glossary"

interface SearchItem {
  label: string
  href: string
  category: Category
}

const categoryIcons: Record<Category, React.ElementType> = {
  facility: Building2,
  provider: Monitor,
  guide: BookOpen,
  glossary: Hash,
}

const items: SearchItem[] = [
  // Facilities
  { label: "California Facilities",       href: "/state/california",                        category: "facility" },
  { label: "Texas Facilities",             href: "/state/texas",                             category: "facility" },
  { label: "Florida Facilities",           href: "/state/florida",                           category: "facility" },
  { label: "New York Facilities",          href: "/state/new-york",                          category: "facility" },
  { label: "Federal Prisons",              href: "/facilities",                              category: "facility" },
  { label: "State Prisons",               href: "/states",                                  category: "facility" },
  { label: "County Jails",                href: "/counties",                                category: "facility" },
  { label: "Maximum Security Facilities", href: "/facilities",                              category: "facility" },
  { label: "Medium Security Facilities",  href: "/facilities",                              category: "facility" },
  { label: "Minimum Security Facilities", href: "/facilities",                              category: "facility" },
  // Providers
  { label: "JPay",                        href: "/provider/jpay",                           category: "provider" },
  { label: "CorrLinks",                   href: "/provider/corrlinks",                      category: "provider" },
  { label: "ConnectNetwork",              href: "/provider/connectnetwork",                 category: "provider" },
  { label: "GettingOut",                  href: "/provider/gettingout",                     category: "provider" },
  { label: "SmartInmate",                 href: "/provider/smartinmate",                    category: "provider" },
  { label: "TextBehind",                  href: "/provider/textbehind",                     category: "provider" },
  { label: "Pigeonly",                    href: "/provider/pigeonly",                       category: "provider" },
  { label: "Compare Providers",           href: "/compare",                                 category: "provider" },
  // Guides
  { label: "How Inmate Messaging Works",  href: "/guides/how-inmate-messaging-works",       category: "guide" },
  { label: "How Video Visitation Works",  href: "/guides/how-video-visitation-works",       category: "guide" },
  { label: "How Prison Phone Calls Work", href: "/guides/how-prison-phone-calls-work",      category: "guide" },
  { label: "How to Send Money to an Inmate", href: "/guides/how-to-send-money-to-an-inmate", category: "guide" },
  { label: "How to Find an Inmate",       href: "/guides/how-to-find-an-inmate",            category: "guide" },
  { label: "Federal vs State Prison",     href: "/guides/federal-prison-vs-state-prison",   category: "guide" },
  { label: "Inmate Tablets Explained",    href: "/guides/inmate-tablets-explained",         category: "guide" },
  { label: "Prison Visitation Rules",     href: "/guides/prison-visitation-rules",          category: "guide" },
  // Glossary
  { label: "Commissary",                  href: "/glossary/commissary",                     category: "glossary" },
  { label: "Inmate Account",              href: "/glossary/inmate-account",                 category: "glossary" },
  { label: "Video Visitation",            href: "/glossary/video-visitation",               category: "glossary" },
  { label: "Inmate Messaging",            href: "/glossary/inmate-messaging",               category: "glossary" },
  { label: "Money Transfer",              href: "/glossary/money-transfer",                 category: "glossary" },
  { label: "Inmate ID Number",            href: "/glossary/inmate-id-number",               category: "glossary" },
  { label: "Electronic Messaging",        href: "/glossary/electronic-messaging",           category: "glossary" },
  { label: "Correctional Facility",       href: "/glossary/correctional-facility",          category: "glossary" },
]

export default function PopularSearches() {
  const trackRef = useRef<HTMLDivElement>(null)

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused"
  }

  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running"
  }

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 80s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track  { animation: none; }
          .marquee-clone  { display: none; }
          .marquee-outer  { overflow-x: auto; scrollbar-width: none; }
          .marquee-outer::-webkit-scrollbar { display: none; }
        }
      `}</style>

      <section className="border-b py-3" aria-label="Popular searches">
        <PageWrapper>
          <div className="flex items-center gap-3 min-w-0">

            {/* Static left label */}
            <span
              className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70"
              aria-hidden="true"
            >
              Popular
            </span>

            {/* Vertical divider */}
            <div className="h-4 w-px shrink-0 bg-border" aria-hidden="true" />

            {/* Marquee container */}
            <div
              className="marquee-outer flex-1 overflow-hidden min-w-0"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)",
              }}
              onMouseEnter={pause}
              onMouseLeave={resume}
              aria-label="Browse popular topics"
            >
              {/* Track — rendered twice for seamless infinite loop */}
              <div
                ref={trackRef}
                className="marquee-track flex items-center gap-2"
                style={{ width: "max-content" }}
              >
                {/* First copy — real accessible links */}
                {items.map((item) => {
                  const Icon = categoryIcons[item.category]
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                    >
                      <Icon className="h-3 w-3 shrink-0 opacity-60" aria-hidden="true" />
                      {item.label}
                    </Link>
                  )
                })}

                {/* Spacer between copies */}
                <div className="shrink-0 w-2" aria-hidden="true" />

                {/* Second copy — hidden from screen readers and keyboard nav */}
                <div className="marquee-clone flex items-center gap-2" aria-hidden="true">
                  {items.map((item) => {
                    const Icon = categoryIcons[item.category]
                    return (
                      <Link
                        key={"dup-" + item.label}
                        href={item.href}
                        tabIndex={-1}
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                      >
                        <Icon className="h-3 w-3 shrink-0 opacity-60" aria-hidden="true" />
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </PageWrapper>
      </section>
    </>
  )
}
