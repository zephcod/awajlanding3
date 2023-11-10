'use client'
import * as React from "react"
import { getTextImage } from '@/app/_actions/ai/text-image';
import { Button } from '@/components/UI/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { type z } from "zod"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useProModal } from '@/hooks/use-pro-modal';
import { Icons } from '@/components/UI/icons';
import { Form,
          FormControl,
          FormField,
          FormItem,
          FormLabel,
          FormMessage,
          UncontrolledFormMessage, 
        } from '@/components/UI/form';
import { Input } from "@/components/UI/input";
import { promptSchema } from "@/lib/validations/ai";

type Inputs = z.infer<typeof promptSchema>

export default function GenerateButton  () {
  
  const [isPending, startTransition] = React.useTransition()
  const [faqs, setFaqs] = useState('');
  const router = useRouter()
  const melaModal = useProModal()

  const form = useForm<Inputs>({
    resolver: zodResolver(promptSchema),
  })

  function onSubmit(data: Inputs){
    startTransition(async()=>{
      try {
        const f = await getTextImage()
          const res = JSON.stringify(f)
          setFaqs(res)
          form.reset()
      } catch (error:any) {
        if(error?.response?.status === 403){
          melaModal.onOpen()
        }
      }
      finally {
        router.refresh()
      }
    }
    )
  }
  return (
    <div className='flex flex-col gap-4'>
      <Form {...form}>
        <form
          className="grid w-full max-w-2xl gap-5"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
            <FormItem className="w-full">
              <FormLabel>Stable Diffusion XL</FormLabel>
              <FormControl>
                <Input
                  aria-invalid={!!form.formState.errors.prompt}
                  placeholder="Type your prompt here..."
                  {...form.register("prompt")}
                />
              </FormControl>
              <UncontrolledFormMessage
                message={form.formState.errors.prompt?.message}
              />
            </FormItem>
            <Button
            disabled={isPending}
            // onClick={onSubmit}
            >
            {isPending && (
              <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
              />
              )}
            Generate
            </Button>
        </form>
      </Form>
      {faqs}
      </div>
  )
}
