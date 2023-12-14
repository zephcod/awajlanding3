'use client'
import React, {useState, useEffect} from "react"
import '@/styles/globals.css'
import { Providers as ThemeProvider } from '@/components/providers'
import { Analytics } from '@vercel/analytics/react';
import  Providers from '@/components/chat/chatproviders'
import { AuthProvider } from '@/context/authContext'
import { Toaster } from "@/components/UI/toaster"
import NewHeader from '@/components/layouts/new_header'
import { ModalProvider } from '@/components/ai/modal-provider'
import appwriteAuthService from "@/db/appwrite_auth"
import Chat from "@/components/chat/chat"
import { SpeedInsights } from "@vercel/speed-insights/next"

 
export default function RootLayout({children,}:{children: React.ReactNode}) {

  const[authStatus, setAuthStatus] = useState(false)

  useEffect(()=>{
    appwriteAuthService.isLoggedIn()
    .then(setAuthStatus)
  }, [])

  return (
      <html lang="en" className="scroll-smooth" suppressHydrationWarning >
        <Providers>
          <body>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <AuthProvider value={{authStatus, setAuthStatus}}>
                  <div className='allparent'>
                    {/* <div>Bluetin</div> */}
                    <NewHeader/>
                    <main className="flex-1">
                      <ModalProvider/>
                      <Chat />
                      {children}
                      </main>
                  </div>
              </AuthProvider> 
              </ThemeProvider>
              <Toaster />
              <Analytics />
              <SpeedInsights/>
          </body>
        </Providers>
      </html>
  )
}
