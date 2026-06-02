import Link from "next/link"

interface RelatedLink {
  label: string
  href: string
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
}

export default function RelatedLinks({
  title = "Related Pages",
  links,
}: RelatedLinksProps) {
  if (!links.length) return null

  return (
    <aside aria-label={title} className="mt-8 border-t pt-6">
      <h2 className="mb-3 text-sm font-semibold text-foreground">{title}</h2>
      <ul className="flex flex-wrap gap-2" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-primary hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
