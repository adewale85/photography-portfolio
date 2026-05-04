
import { supabase } from '@/utils/superbase'
import React from 'react'
import PricesClient from './PricesClient'

export default async function Prices() {

    const {data: pricingData, error } = await supabase
    .from ('Prices')
    
    .select ('*');

    if (error) {
        return <div className='p-10 text-red-500 bg-black'>Error loading prices: {error.message}</div>
    }
  return (
    <PricesClient pricingData={pricingData || []} />
  )
}

