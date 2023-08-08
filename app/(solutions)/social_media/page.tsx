import React from 'react'
import type { Metadata } from 'next'
import LoadingRouteUI2 from '@/components/loading/loading_route2';

export const metadata: Metadata = {
  title: 'Social Media Ad',
  description: 'Awaj Advertising Agency Social Media Ad',
}


const style = { color: "#808080", fontSize: "5em" }



const Social_Media = () => {
  return (
    <LoadingRouteUI2/>
  )
}

export default Social_Media