import React, { ReactNode, Suspense } from 'react'
import Nav from '@/components/ai/sidenav'
import { GlobalNav } from '@/components/layouts/sidenav'

async function Layout ({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('/grid.svg')] w-full pb-36 pt-16 ">
        <Suspense fallback = {<GlobalNav apiLimitCount = {0}/>}>
        {await Nav()}
        </Suspense>
        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl min-h-screen space-y-4 px-2 lg:px-8 lg:py-4">
            <div className="bg-card rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg p-3.5 lg:p-6 mt-6">{children}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Layout