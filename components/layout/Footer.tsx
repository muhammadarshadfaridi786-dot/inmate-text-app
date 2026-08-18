import Link from "next/link"
import { Shield } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Platform: [
    { label: "All Facilities", href: "/facilities" },
    { label: "All States", href: "/states" },
    { label: "All Counties", href: "/counties" },
    { label: "Provider Directory", href: "/providers" },
  ],
  Providers: [
    { label: "Compare Providers", href: "/compare" },
    { label: "JPay", href: "/provider/jpay" },
    { label: "CorrLinks", href: "/provider/corrlinks" },
    { label: "ConnectNetwork", href: "/provider/connectnetwork" },
    { label: "GettingOut", href: "/provider/gettingout" },
  ],
  Resources: [
    { label: "Guides", href: "/guides" },
    { label: "Glossary", href: "/glossary" },
    { label: "Video Calls", href: "/video-calls" },
    { label: "Phone Calls", href: "/phone-calls" },
    { label: "Money Transfer", href: "/money-transfer" },
  ],
  Legal: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Link groups */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-12">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {group}
              </h3>
              <ul className="space-y-2" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>Inmate Text App</span>
          </div>
          <p className="text-center text-xs text-muted-foreground sm:text-right">
            &copy; {new Date().getFullYear()} Inmate Text App. A prison communication discovery
            platform. Not affiliated with any correctional facility or communication provider.
          </p>
        </div>

      </div>
    </footer>
  )
}
