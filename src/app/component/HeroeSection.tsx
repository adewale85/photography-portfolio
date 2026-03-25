import Image from 'next/image'
import React from 'react'

function HeroeSection() {
  return (
    <div>
        <div className='Wrapper py-20'>
            <div className='w-[558px] h-[300px] space-y-12'>
                <h1 className='font-poppins font-normal text-[150px] leading-24.5 text-white'>
                Monica Johnson 
            </h1>
                <p className='w-[367px] font-normal text-[16px]  text-[#FFFFFF] font-poppins'>
                    Our photography services feature highly skilled professionals and the attraction of top talent for each shoot. We excel at solving creative and organizational challenges, regardless of the level of complexity involved.
                </p>
                <p className='flex gap-3 font-normal text-[17px] font-poppins text-white'>Read More
                <Image src="/images/Right_Arrow.svg" alt='globe' width={12} height={12}/>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default HeroeSection