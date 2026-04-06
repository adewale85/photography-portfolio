import Image from 'next/image'
import React from 'react'

function Review() {
  return (
    <main className='Wrapper lg:px-0 px-4 lg:py-12 py-2'>
        <div className=''>
          <h2 className='font-glinter font-normal lg:text-[100px] text-[70px] text-[#D0B8AC]'>Reviews</h2>
          <div className='flex lg:flex-row flex-col gap-12 items-center justify-center'>
          <div className='relative'>
             <Image
                          src="/images/couple-looking.svg"
                          alt="couple-looking.svg"
                          width={24}
                          height={12}
                          className="w-auto relative"
                          />
                         <div className='absolute bottom-3 left-2'>
                           <p className='font-open text-[20px] text-white'>Sara and Brayan</p>
                          <span className='font-open text-[15px] text-white'>Portrait</span>
                         </div>
          </div>
          <div className='relative'>
             <Image
                          src="/images/Second-review.svg"
                          alt="Second-review"
                          width={24}
                          height={12}
                          className="w-auto relative"
                          />
                         <div className='absolute bottom-5 left-2'>
                           <p className='font-open text-[20px] text-white'>Sara and Brayan</p>
                          <span className='font-open text-[15px] text-white'>Portrait</span>
                         </div>
          </div>
          <div className='relative'>
             <Image
                          src="/images/third-review.svg"
                          alt="third-review"
                          width={24}
                          height={12}
                          className="w-auto relative"
                          />
                         <div className='absolute bottom-3 left-2'>
                           <p className='font-open text-[20px] text-white'>Sara and Brayan</p>
                          <span className='font-open text-[15px] text-white'>Portrait</span>
                         </div>
          </div>
          </div>
        </div>
        <div className="flex gap-12 items-center justify-center ">
              <Image
                    src="/images/right-arrow.svg"
                    alt="Arrow"
                    width={24}
                    height={12}
                    className="w-auto "
                  />
        
                  <Image
                    src="/images/right-arrow1.svg"
                    alt="Arrow"
                    width={24}
                    height={12}
                    className="w-auto "
                  />
            </div>
    </main>
  )
}

export default Review