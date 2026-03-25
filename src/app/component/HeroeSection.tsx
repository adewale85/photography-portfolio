import Image from 'next/image'
import React from 'react'

function HeroeSection() {
  return (
    <div>
        <div className='Wrapper'>
           
           <div className='flex'>
        
            <div className='relative  w-full overflow-hidden  '>
                <Image src="/images/black-white-portrait.svg" alt='background-image' width={2600} height={936}
                className='object-cover z-10'/>
            </div>
            
            <div className='w-139.5 absolute mt-50 space-y-20'>
            <h1 className='font-poppins font-normal text-[150px] leading-24.5 text-[#D0B8AC]'>
                Monica Johnson 
            </h1>
                <p className='w-91.75 font-normal text-[16px]  text-[#FFFFFF] font-poppins'>
                    Our photography services feature highly skilled professionals and the attraction of top talent for each shoot. We excel at solving creative and organizational challenges, regardless of the level of complexity involved.
                </p>

                <p className='flex gap-3 font-normal text-[17px] font-poppins text-[#D0B8AC]'>Read More
                <Image src="/images/Right_Arrow.svg" alt='globe' width={12} height={12}/>
                </p>
            </div>
            
           </div>
            
        </div>
    </div>
  )
}

export default HeroeSection