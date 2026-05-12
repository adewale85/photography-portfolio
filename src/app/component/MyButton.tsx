"use client"

import React, { useState } from 'react'

function MyButton() {

const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={()=> setCount(count + 1)} className='px-12 py-3 w-5xl h-2 bg-amber-600 rounded-2xl text-white font-bold text-lg'>
            <div className=''>Click me! <p className='text-red-600'>{count}</p></div>
        </button>
       

    </div>
  )
}

export default MyButton