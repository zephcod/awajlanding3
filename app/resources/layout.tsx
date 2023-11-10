import React, { ReactNode } from 'react'
import { ResNav } from '@/components/layouts/sidenav_res'

const Layout = ({ children }: { children: ReactNode }) =>{
  return (
    <div className="w-full">
        <ResNav/>
        <div className="lg:pl-72">
              {children}
        </div>
    </div>
  )
}

export default Layout