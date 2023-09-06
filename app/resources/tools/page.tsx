import React from 'react'
import type { Metadata } from 'next'
import LoadingRouteUI from '@/components/loading/loading_route';

export const metadata: Metadata = {
  title: 'AI Tools',
  description: 'Awaj Ad AI Tools',
}


const AI_Tools = () => {
  return (
    <LoadingRouteUI/>
  )
}

export default AI_Tools