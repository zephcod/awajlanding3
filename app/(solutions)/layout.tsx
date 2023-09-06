import Footer from '@/components/Footer'
import React, { ReactNode } from 'react'

const SolLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full'>
        <div>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default SolLayout