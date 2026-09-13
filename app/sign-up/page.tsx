import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import SignUpForm from "@/components/auth/SignUpForm"

export const metadata: Metadata = {
  title: "Create Free Account - Inmate Text App",
  description: "Create a free Inmate Text App account to save facilities and get updates.",
  robots: { index: false, follow: true },
}

export default function SignUpPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-[80vh] items-center justify-center py-16">
        <SignUpForm />
      </div>
    </PageWrapper>
  )
}
