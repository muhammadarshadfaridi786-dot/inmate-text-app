import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import SignInForm from "@/components/auth/SignInForm"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Inmate Text App account.",
  robots: { index: false, follow: true },
}

export default function SignInPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-[80vh] items-center justify-center py-16">
        <SignInForm />
      </div>
    </PageWrapper>
  )
}
