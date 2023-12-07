'use client'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '@/hooks/use_auth'
import { toast } from 'sonner'

const Layout = ({ children }: { children: ReactNode }) =>{
  const router = useRouter()
  const user = useAuth().authStatus
  const [loadingUser, setLoadingUser] = useState(false)

  useEffect(() => {
    if (!user) {
      // await delay(10000)
        setLoadingUser(false)
        router.push('/');
        toast.error('You must be signed in to continue.')
    }
  }, [])


    if (user) {
      return children
  }
}

export default Layout