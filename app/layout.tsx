'use client'
import React, {useState, useEffect} from "react"
import '@/styles/globals.css'
import { Providers } from '@/components/providers'
import { AuthProvider } from '@/context/authContext'
import { Toaster } from "@/components/UI/toaster"
import NewHeader from '@/components/layouts/new_header'
import { ModalProvider } from '@/components/ai/modal-provider'
import appwriteAuthService from "@/db/appwrite_auth"

 
export default function RootLayout({children,}:{children: React.ReactNode}) {

  const[authStatus, setAuthStatus] = useState(false)

  useEffect(()=>{
    appwriteAuthService.isLoggedIn()
    .then(setAuthStatus)
  }, [])

  return (
      <html lang="en" className="scroll-smooth" suppressHydrationWarning >
        <body>
            <Providers attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider value={{authStatus, setAuthStatus}}>
                <div className='allparent'>
                  {/* <div>Bluetin</div> */}
                  <NewHeader/>
                  <main className="flex-1">
                    <ModalProvider/>
                    {children}
                    </main>
                </div>
            </AuthProvider> 
            </Providers>
            <Toaster />
        </body>
      </html>
  )
}
