'use client'
import React from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { BsCheck } from 'react-icons/bs'
import { Slider } from '../UI/slider'
import { formatPrice } from '@/app/utils/utils'
import { Button } from '../UI/button'
import { Icons } from '../UI/icons'
import { useRouter } from 'next/navigation'
import { useProModal } from "@/hooks/use-pro-modal";

const MelaCard = () => {
    const [loading, setLoading] = React.useState(false);
    const [silverMela, setPriceFix] = React.useState<[number]>([100])
    const priceFormat = Number(silverMela)
    const silverMelaPrice = (priceFormat*0.2)
    const proModal = useProModal();
    proModal.isOpen = true;

    const onBuy = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/chapa?amount=${priceFormat}&prod=silverMela-${silverMela[0]}`);
  
        window.location.href = response.data.url;
      } catch (error:any) {
        if (error.message === 'Request failed with status code 401') {
          toast.error('You do not have an account please sign up first');
          window.location.href = '/signup';
        } else {
          toast.error(JSON.stringify(error.message));
        }
      } finally {
        proModal.onClose
        setLoading(false);
      }
    }

  return (
    <>
      <div className='bg-accent rounded-2xl ring-2 ring-accent'>
        <div className='flex flex-col gap-4 p-4 relative'>
          <p className="text-center py-1 font-extralight text-lg">
          {formatPrice(priceFormat)}
          </p>
          
          <Slider
            variant="default"
            aria-label="Enterprise package slider"
            thickness="thin"
            name="456"
            defaultValue={[100]}
            min={50}
            max={2000}
            step={50}
            value={silverMela}
            onValueChange={(
              value: typeof silverMela
              ) => {
                setPriceFix(value)
              }}
              />
          <p className="text-center py-1 font-extralight text-lg">Mela: {silverMelaPrice}</p>
        </div>
        <div className='flex flex-col bg-card rounded-2xl w-full'>
            <div className='block font-light text-sm m-auto p-4'>
                <div className='p-1 flex flex-row items-center gap-2'>
                    <BsCheck/><p>Get access to 50+ AI models</p>
                </div>
                <div className='p-1 flex flex-row items-center gap-2'>
                    <BsCheck/><p>Free access to prompts lab</p>
                </div>
                <div className='p-1 flex flex-row items-center gap-2'>
                    <BsCheck/><p>Members only gallery access</p>
                </div>
                <div className='p-1 flex flex-row items-center gap-2'>
                    <BsCheck/><p>4X faster response times</p>
                </div>
                <div className='p-1 flex flex-row items-center gap-2'>
                    <BsCheck/><p>No expiry date</p>
                </div>
            </div>
        </div>
      </div>
        <Button className='mt-4' disabled={loading} onClick={onBuy}>
                      {loading && (
                      <Icons.spinner
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                      />
                      )} Buy Mela</Button>
       </>
  )
}

export default MelaCard