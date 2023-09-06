import Footer from '@/components/Footer'
import { ClerkProvider} from "@clerk/nextjs"
import '@/styles/globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from "@/components/UI/toaster"
import NewHeader from '@/components/layouts/new_header'
import { ModalProvider } from '@/components/ai/modal-provider'

 
export default async function RootLayout({children,}:{children: React.ReactNode}) {

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
            <Providers attribute="class" defaultTheme="system" enableSystem>
            <div className='allparent'>
              {/* <div>Bluetin</div> */}
              <NewHeader/>
              <main className="flex-1">
                <ModalProvider/>
                {children}
                </main>
            </div>
            </Providers>
            <Toaster />
      </body>
      </html>
    </ClerkProvider>
  )
}
