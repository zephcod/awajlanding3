import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { env } from "@/env.mjs"
import { currentUser } from "@clerk/nextjs"

import { Header } from "@/components/header"
import { Shell } from "@/components/shells/shell"
import { DemoReportAnIssue } from "@/components/report-issue"

export const metadata: Metadata = {
//   metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Purchases",
  description: "Manage your purchases",
}

export default async function PurchasesPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/signin")
  }

  return (
    <Shell variant="sidebar" className="m-auto mt-0">
      <Header
        title="Get Support"
        description="Submit ticket and contact with customer support"
        size="sm"
      />
      <div>
        <DemoReportAnIssue/>
      </div>
    </Shell>
  )
}
