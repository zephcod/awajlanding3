import Footer from '@/components/Footer'
import { SiteHeader } from '@/components/layouts/site_header'
import { ClerkProvider, currentUser } from "@clerk/nextjs"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/app/utils/utils"
import '@/styles/globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from "@/components/UI/toaster"
import NewHeader from '@/components/layouts/new_header'



export default async function RootLayout({children,}:{children: React.ReactNode}) {
  // const user = await currentUser()

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
              "font-sans antialiased",
              fontSans.variable,
              fontMono.variable
            )}>
            <Providers attribute="class" defaultTheme="system" enableSystem>
            <div className='allparent'>
              <NewHeader/>
                {children}
              <Footer />
            </div>
            </Providers>
            <Toaster />
      </body>
      </html>
    </ClerkProvider>
  )
}
