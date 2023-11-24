'use client'

import { MessagesContext } from '@/context/messages'
import { cn } from '@/app/utils/utils'
import { FC, HTMLAttributes, useContext } from 'react'
import MarkdownLite from './markdownlite'

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext)
  const inverseMessages = [...messages].reverse()

  return (
    <div
      {...props}
      className={cn(
        'flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch',
        className
      )}>
      <div className='flex-1 flex-grow' />
      {inverseMessages.map((message) => {
        return (
          <div className='chat-message' key={`${message.id}-${message.id}`}>
            <div
              className={cn('flex items-end', {
                'justify-end': message.isUserMessage,
              })}>
              <div
                className={cn('flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden', {
                  'order-1 items-end': message.isUserMessage,
                  'order-2 items-start': !message.isUserMessage,
                })}>
                <p
                  className={cn('px-4 py-2 rounded-lg', {
                    'bg-primary text-gray-700': message.isUserMessage,
                    'bg-accent text-muted-foreground': !message.isUserMessage,
                  })}>
                  <MarkdownLite text={message.text} />
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatMessages