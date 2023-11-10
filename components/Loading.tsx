import React from 'react'
import Image from 'next/image'
import Coffee from '@/public/bg-01.svg'

const LoadingUI = () => {
  return (
    <div className='h-full relative w-full items-center flex flex-col justify-stretch'>
        <div>
            <h1>Loading</h1>
        </div>
        <div>
            <Image
            src={Coffee.src}
            alt=''
            width={500}
            height={500}/>
        </div>
        <div>
            <h1>wait</h1>
        </div>
    </div>
  )
}

export default LoadingUI