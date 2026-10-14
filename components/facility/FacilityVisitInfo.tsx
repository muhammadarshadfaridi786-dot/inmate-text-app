import Link from "next/link"
import { ExternalLink } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import type { FacilityDetail } from "@/lib/data/facilities"

interface FacilityVisitInfoProps {
  facility: FacilityDetail
}

export default function FacilityVisitInfo({ facility }: FacilityVisitInfoProps) {
  const hasData =
    facility.rosterUrl ||
    facility.mailingAddress ||
    facility.visitingHours ||
    facility.callRates ||
    facility.commissary ||
    facility.bailInfo ||
    facility.fax

  if (!hasData) return null

  return (
    <section className="border-b py-12" aria-labelledby="facility-visit-info-heading">
      <PageWrapper>
        <SectionHeading
          id="facility-visit-info-heading"
          title="Visit and Contact Details"
          subtitle="Inmate search, mail, visiting hours, costs, commissary, and bail information for this facility."
          className="mb-6"
        />
        <div className="space-y-8">

          {facility.rosterUrl && (
            <div>
              <h3 className="text-base font-semibold text-foreground">Inmate Search</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                <Link
                  href={facility.rosterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  Search inmates on the official roster
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Check the spelling of the name carefully, and allow 24 to 72 hours for new arrivals to appear in the roster.
              </p>
            </div>
          )}

          {facility.mailingAddress && (
            <div>
              <h3 className="text-base font-semibold text-foreground">Mail</h3>
              <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {facility.mailingAddress}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Include the inmate name and ID on all mail.
              </p>
            </div>
          )}

          {facility.visitingHours && (
            <div>
              <h3 className="text-base font-semibold text-foreground">Visiting Hours</h3>
              <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {facility.visitingHours}
              </p>
            </div>
          )}

          {facility.callRates && (
            <div>
              <h3 className="text-base font-semibold text-foreground">Costs</h3>
              <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {facility.callRates}
              </p>
            </div>
          )}

          {facility.commissary && (
            <div>
              <h3 className="text-base font-semibold text-foreground">Commissary / Sending Money</h3>
              <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {facility.commissary}
              </p>
            </div>
          )}

          {facility.bailInfo && (
            <div>
              <h3 className="text-base font-semibold text-foreground">Bail / Bond</h3>
              <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {facility.bailInfo}
              </p>
            </div>
          )}

          {facility.fax && (
            <div>
              <h3 className="text-base font-semibold text-foreground">Fax</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {facility.fax}
              </p>
            </div>
          )}

        </div>
      </PageWrapper>
    </section>
  )
}
