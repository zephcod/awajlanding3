import type { Metadata } from "next"
import UnderConstruction from "@/components/under_construction"

export const metadata: Metadata = {
//   metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Orders | Awaj AI",
  description: "Manage your billing and subscription",
}

export default async function BillingPage() {

  return (
    <UnderConstruction title={"Awaj Orders"} date={""}/>
  )
}
