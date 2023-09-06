import React, { ReactNode } from 'react'
import { ResNav } from '@/components/layouts/sidenav_res'

const Layout = ({ children }: { children: ReactNode }) =>{
  return (
    <div className="w-full pt-14">
        <ResNav/>
        <div className="lg:pl-72">
              {children}
        </div>
    </div>
  )
}

export default Layout