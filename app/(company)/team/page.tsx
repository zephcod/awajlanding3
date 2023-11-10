import type { Metadata } from 'next'
import UnderConstruction from '@/components/under_construction';

export const metadata: Metadata = {
  title: 'Awaj AI Teams and Career Opportunities',
  description: 'Career opportunities and the team behind Awaj AI, the agency, and related platforms',
}



const Team = () => {
  return (
    <div>
      <UnderConstruction title={'Awaj AI Teams'} date={'9:00am GMT 3/12/23'}/>
    </div>
  )
}

export default Team