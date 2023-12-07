'use client'
import React, { ReactNode} from 'react'
import { DashNav } from '@/components/layouts/sidenav_dashboard'

const Layout = ({ children }: { children: ReactNode }) =>{
  return (
    <div className="w-full pt-14">
        <DashNav />
        <div className="lg:pl-72">
              {children}
        </div>
    </div>
  )
}

export default Layout