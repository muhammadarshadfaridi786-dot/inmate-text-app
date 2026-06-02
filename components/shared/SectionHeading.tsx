import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  as?: "h1" | "h2" | "h3"
  className?: string
  id?: string
}

export default function SectionHeading({
  title,
  subtitle,
  as: Tag = "h2",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <Tag id={id} className="text-2xl font-bold tracking-tight text-foreground">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-1.5 text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
