import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EmptyStateAction {
  label: string
  href: string
}

interface EmptyStateProps {
  title: string
  description: string
  action?: EmptyStateAction
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <span className="text-2xl text-muted-foreground" aria-hidden="true">
          —
        </span>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>
      <p className="mb-6 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && (
        <Link
          href={action.href}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          {action.label}
        </Link>
      )}
    </div>
  )
}
