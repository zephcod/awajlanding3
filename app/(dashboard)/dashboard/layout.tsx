import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

import { dashboardConfig } from "@/config/dashboard"
import { ScrollArea } from "@/components/UI/scroll_area"
import styles from './layout.module.css'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {


  return (
    <div className={styles.container}>
      <div className={styles.side_bar}>
        <div className={styles.side_content}>
          <h1 className={styles.mainTitle}>Awaj Studio</h1>
        </div>
      </div>
      <div className={styles.main_bar}>
        {children}
      </div>
    </div>
  )
}
