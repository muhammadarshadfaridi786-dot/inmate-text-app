import Link from "next/link"
import { ExternalLink, MapPin, Phone } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { FacilityDetail } from "@/lib/data/facilities"

interface FacilityInfoProps {
  facility: FacilityDetail
}

export default function FacilityInfo({ facility }: FacilityInfoProps) {
  const hasContact = facility.address || facility.phone || facility.website

  if (!hasContact) return null

  return (
    <section className="border-b py-12" aria-labelledby="facility-info-heading">
      <PageWrapper>
        <SectionHeading
          id="facility-info-heading"
          title="Facility Information"
          subtitle="Contact details and location information for this correctional facility."
          className="mb-6"
        />
        <div className="flex flex-wrap gap-4">

          {facility.address && (
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Address</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  {facility.address}
                </p>
              </div>
            </div>
          )}

          {facility.phone && (
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Main Phone</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  {facility.phone}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Administrative line — not for inmate calls
                </p>
              </div>
            </div>
          )}

          {facility.website && (
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <ExternalLink className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Official Website</p>
                <Link
                  href={facility.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 text-sm font-semibold text-primary hover:underline"
                >
                  Visit official site
                </Link>
              </div>
            </div>
          )}

        </div>
      </PageWrapper>
    </section>
  )
}
