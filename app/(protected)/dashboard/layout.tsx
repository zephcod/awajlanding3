import React, { ReactNode, Suspense } from 'react'
import { DashNav } from '@/components/layouts/sidenav_dashboard'
import NavName from '@/components/dashboard/sidenav_name'

const Layout = async ({ children }: { children: ReactNode }) =>{
  return (
    <div className="w-full pt-14">
        <Suspense fallback = {<DashNav name = ''/>}>
        {await NavName()}
        </Suspense>
        <div className="lg:pl-72">
              {children}
        </div>
    </div>
  )
}

export default Layout