import Image from 'next/image'
import React from 'react'

function Prices() {
  return (
    <main className="Wrapper lg:px-0 px-4 py-32">
         
        <div className='flex items-center justify-between'>
            
         <div>
            <Image
                    src="/images/Priceimage.svg"
                    alt="price-image"
                    width={24}
                    height={12}
                    className="w-[540px] "
                  />
         </div>
       
         <div>
              <h1 className='font-glinster font-normal text-[75px] text-[#D0B8AC] pb-12'>My Prices
              </h1>
         <div className='flex gap-12'>
            <div className='space-y-12 '>
         <div className='w-[557px] space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-open font-normal text-[25px] border-b text-white'>Portrait
                </h3>
              <span className='font-open font-normal text-[25px] text-white'>220$
              </span>
            </div>
            <p className='font-open font-normal text-17px text-white'>This includes individual, family, and group portraits, as well as headshots for business and corporate purposes.</p>
         </div>

            <div className='w-[557px] space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-open font-normal text-[25px] border-b text-white'>Individual
                </h3>
              <span className='font-open font-normal text-[25px] text-white'>300$
              </span>
            </div>
            <p className='font-open font-normal text-17px text-white'>An individual photoshoot offers an opportunity for someone to have a professional photographer capture their unique personality and style through a series of posed and candid shots.</p>
         </div>

            <div className='w-[557px] space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-open font-normal text-[25px] border-b text-white'>Fashion
                </h3>
              <span className='font-open font-normal text-[25px] text-white'>350$
              </span>
            </div>
            <p className='font-open font-normal text-17px text-white'>A fashion photoshoot is a creative process in which a team of professionals collaborates to produce images that showcase clothing, accessories, or a particular style.</p>
         </div>
          </div>
         <div className='flex items-center justify-center h-[450px] w-[2px] bg-white'></div>
         </div>
        <div className='flex gap-3 items-end justify-end py-4'>
            <p className='font-open font-normal text-[17px] text-white'>Order Shooting</p>
             <Image
                        src="/images/right-arrow1.svg"
                        alt="Arrow"
                        width={24}
                        height={12}
                        className="w-auto "
                      />
        </div>
        
          
          </div>
          </div>
    </main>
  )
}

export default Prices