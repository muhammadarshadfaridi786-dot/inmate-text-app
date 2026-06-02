import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Search Facilities",
  description:
    "Search thousands of correctional facilities across the United States. Find messaging, video visitation, and phone options at any prison or jail.",
  robots: { index: false, follow: true },
}

export default function SearchPage() {
  return (
    <ComingSoon
      title="Search Facilities"
      description="Search and filter thousands of correctional facilities across the United States. Find messaging, video visitation, and phone options at any prison or jail."
    />
  )
}
