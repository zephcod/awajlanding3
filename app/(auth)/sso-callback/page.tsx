import { type HandleOAuthCallbackParams } from "@clerk/types"

import SSOCallback from "@/components/auth/sso_callback"
import { Shell } from "@/components/shells/shell"

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return (
    <Shell className="max-w-lg relative my-auto p-4">
      <SSOCallback searchParams={searchParams} />
    </Shell>
  )
}
