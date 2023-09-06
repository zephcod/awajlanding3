import Neumorph_sliders from '@/components/UI/Neumorph_sliders'
import React from 'react'
import PopularOrders from '@/components/pricing/popular_orders'

const Deals = () => {
  return (
    <div>
        <h1>Deals</h1>
        <PopularOrders/>
        <Neumorph_sliders/>
    </div>
  )
}

export default Deals