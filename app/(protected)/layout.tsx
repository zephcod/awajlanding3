'use client'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '@/hooks/use_auth'

const Layout = ({ children }: { children: ReactNode }) =>{
    const router = useRouter()
    const {authStatus} = useAuth()

    if (!authStatus) {
        router.push('/signin')
        return<></>
    }
  return children
}

export default Layout