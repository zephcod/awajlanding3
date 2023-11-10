import UnderConstruction from '@/components/under_construction'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'Quick instructions to get you started with Awaj AI software and related platforms',
}
const getting_started = () => {
  return (
    <UnderConstruction title={'Getting Started'} date={'9:00am GMT 3/12/23'}/>
  )
}

export default getting_started