import { FC } from 'react'
import Image from "next/image"
import Content from "@/public/character/neil_awaj_bot.webp"

const ChatHeader: FC = () => {
  return (
    <div className='w-full flex gap-3 justify-start items-center text-muted-foreground'>
      <div className='flex flex-row gap-3 items-center text-sm'>
        <Image className='' src={Content} width={35} height={35} alt='Awaj AI Neil Bot Profile Picture'/>
        <div className='flex flex-col items-start'>
          <p className='text-xs'>Get help from</p>
          {/* <p className='w-2 h-2 rounded-full bg-green-500' /> */}
          <p className='font-medium'>Awaj Bot</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader