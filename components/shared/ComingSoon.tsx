import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import PageWrapper from "@/components/layout/PageWrapper"

interface ComingSoonProps {
  title: string
  description: string
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <PageWrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
        <h1 className="mb-3 text-2xl font-bold text-foreground">{title}</h1>
        <p className="mb-3 max-w-md text-muted-foreground">{description}</p>
        <p className="mb-8 text-sm font-semibold text-primary">
          Coming Soon — Check Back Shortly
        </p>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </PageWrapper>
  )
}
