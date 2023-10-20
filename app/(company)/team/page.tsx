import type { Metadata } from 'next'
import GlassFlash from '@/components/UI/flash_glass';

export const metadata: Metadata = {
  title: 'Awaj Career',
  description: 'Awaj Advertising Agency Careers',
}



const Team = () => {
  return (
    <div>
      <GlassFlash/>
    </div>
  )
}

export default Team