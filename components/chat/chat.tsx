'use client'

import { FC, useState } from 'react'
import Image from "next/image"
import ChatInput from './chatinput'
import ChatMessages from './chatmessages'
import ChatHeader from './chatheader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/UI/accordion'
import { Icons } from '../UI/icons'
import Content from "@/public/character/neil_awaj_bot.webp"

const Chat: FC = () => {
  const [bot, setBot] = useState<boolean>(true)
  return (
    <Accordion
      type='single'
      collapsible
      className='relative bg-card z-20 shadow w-10'>
      <AccordionItem value='item-1'>
        {bot?expanded():retracted()}
      </AccordionItem>
    </Accordion>
  )

  function expanded() {
    return <div className='fixed right-6 flex flex-row items-center w-80 bottom-6 bg-card border border-accent rounded-md overflow-hidden'>
            <Icons.close className='h-5 w-5 ml-2 text-muted-foreground' onClick={()=>setBot(false)}/>
      <div className='w-full h-full flex flex-col'>
        <AccordionTrigger className='px-4 border-b border-accent'>
          <div className='w-full flex justify-start items-center text-muted-foreground'>
            <div className='flex flex-row gap-3 items-center text-sm'>
              <Image className='' src={Content} width={35} height={35} alt='Awaj AI Neil Bot Profile Picture' />
              <div className='flex flex-col items-start'>
                <p className='text-xs'>Get help from</p>
                {/* <p className='w-2 h-2 rounded-full bg-green-500' /> */}
                <p className='font-medium'>Awaj Bot</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col h-80'>
            <ChatMessages className='px-2 py-3 flex-1' />
            <ChatInput className='px-4' />
          </div>
        </AccordionContent>
      </div>
    </div>
  }

  function retracted() {
    return <div className='fixed right-6 w-30 bottom-6 bg-card border border-accent rounded-md overflow-hidden'>
      <div className='w-full h-full flex flex-col'>
        <AccordionTrigger className='px-4 border-b border-accent'>
          <div className='w-full flex justify-start items-center text-muted-foreground'>
            {/* <Icons.chevronLeft className='h-4 w-4 mr-4' /> */}
            <div className='flex flex-row gap-3 items-center text-sm'>
              <Image className='' src={Content} width={35} height={35} alt='Awaj AI Neil Bot Profile Picture' />
              {/* <div className='flex flex-col items-start'>
                <p className='text-xs'>Get help from</p>
                <p className='font-medium'>Awaj Bot</p>
              </div> */}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className='flex flex-col h-80'>
            <ChatMessages className='px-2 py-3 flex-1' />
            <ChatInput className='px-4' />
          </div>
        </AccordionContent>
      </div>
    </div>
  }
}

export default Chat