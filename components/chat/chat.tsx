'use client'

import { FC } from 'react'
import ChatInput from './chatinput'
import ChatMessages from './chatmessages'
import ChatHeader from './chatheader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/UI/accordion'

const Chat: FC = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='relative bg-card z-20 shadow'>
      <AccordionItem value='item-1'>
        <div className='fixed right-6 w-80 bottom-6 bg-card border border-accent rounded-md overflow-hidden'>
          <div className='w-full h-full flex flex-col'>
            <AccordionTrigger className='px-6 border-b border-accent'>
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col h-80'>
                <ChatMessages className='px-2 py-3 flex-1' />
                <ChatInput className='px-4' />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default Chat