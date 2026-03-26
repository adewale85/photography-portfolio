import Image from 'next/image'
import React from 'react'

function HeroeSection() {
  return (
    <div>
        <div className='Wrapper'>
           
           <div className='flex lg:flex-row flex-col lg:px-0 px-4'>
        
            <div className='relative w-full overflow-hidden '>
                <Image src="/images/black-white-portrait.svg" alt='background-image'
                 priority
                 width={2600}
                 height={936}
                className=' z-10'/>
            </div>


                <div className='mt-50'>
                   <div className='space-y-12 flex flex-col items-center justify-center'>
                     <div className='h-[157px] w-1 opacity-70 border bg-[#D0B8AC] '>
                    </div>

                    <div className='space-y-4 items-center'>
                        <Image src="/images/instagram.svg" alt='facebook-logo' width={20} height={20}/>
                        <Image src="/images/facebook.svg" alt='facebook-logo' width={20} height={20}/>
                        <Image src="/images/twitter.svg" alt='facebook-logo' width={20} height={20}/>
                    </div>

                    <div className='h-[157px] w-1 border bg-[#D0B8AC] opacity-70'>
                    </div>
                   </div>
                </div>
            {/* <div className='relative w-full overflow-hidden lg:hidden flex items-center justify-center'>
                <Image src="/images/black-white-portrait.svg" alt='background-image'
                 priority
                 width={2600}
                 height={2236}
                className='object-cover z-10'/>
            </div> */}
            
            <div className='lg:w-139.5 w-full  absolute mt-50  lg:space-y-20 space-y-8'>
            <h1 className='font-poppins font-normal lg:text-[150px] text-[100px] lg:leading-22 leading-18 text-[#D0B8AC]'>
                Monica Johnson 
            </h1>
                <p className='lg:w-91.75 w-full font-normal text-[16px] text-[#FFFFFF] font-poppins'>
                    Our photography services feature highly skilled professionals and the attraction of top talent for each shoot. We excel at solving creative and organizational challenges, regardless of the level of complexity involved.
                </p>

                <p className='flex gap-3 font-normal text-[17px] font-poppins text-[#D0B8AC]'>Read More
                <Image src="/images/Right_Arrow.svg" alt='Arrow' width={20} height={12}
                style = {{width: 'auto'}}
                />
                </p>
            </div>
            
           </div>
            
        </div>
    </div>
  )
}

export default HeroeSection