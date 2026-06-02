import PageWrapper from "@/components/layout/PageWrapper"
import SectionHeading from "@/components/shared/SectionHeading"
import GuideCard from "@/components/guides/GuideCard"
import { ALL_GUIDES } from "@/lib/data/guides"

interface GuideRelatedProps {
  currentSlug: string
  relatedGuideSlugs: string[]
}

export default function GuideRelated({
  currentSlug,
  relatedGuideSlugs,
}: GuideRelatedProps) {
  const related = relatedGuideSlugs
    .filter((s) => s !== currentSlug)
    .slice(0, 3)
    .map((slug) => ALL_GUIDES.find((g) => g.slug === slug))
    .filter(Boolean) as typeof ALL_GUIDES

  if (!related.length) return null

  return (
    <section className="border-b py-16" aria-labelledby="related-guides-heading">
      <PageWrapper>
        <SectionHeading
          id="related-guides-heading"
          title="Related Guides"
          subtitle="More guides that cover topics connected to what you just read."
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
