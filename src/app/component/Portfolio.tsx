import Image from 'next/image'
import React from 'react'

function Porfolio() {
  return (
    <main id="portfolio" className='Wrapper scroll-mt-20 lg:py-40 py-0 space-y-12 lg:px-0 px-4 items-center justify-center my-30 lg:my-0'>
      <h3 className='text-white font-glinter font-medium text-7xl '>Portfolio</h3>
  <div className='flex lg:flex-row flex-col justify-between gap-22'>
     <div className='space-y-3'>
    <Image src="/images/porfolio_portrait.svg" alt='porfolio-image' width={553} height={690.73}/>
    
   </div>

   <div className='space-y-5'>
     <p className='lg:w-[502px] w-full text-white text-[16px] font-normal font-open'>Thought years of experience, I have honed my skills in composition, lighting, and post-production to produce stunning visuals that showcase the beauty of my subjects. Whether it's a portrait, landscape, or event, I approach each project with passion and dedication, striving to deliver images that exceed my clients' expectations. </p>
    <div className='relative z-10 w-full'>
      <Image src="/images/porfolio-portrait2.svg" alt='porfolio-image' width={461} height={533}
      className='w-full'/>
      <div className='absolute z-40 -bottom-12 -left-12'>
        <Image src="/images/porfolio-portrait3.svg" alt='porfolio-image' width={276} height={294}/>
      </div>
    </div>
   </div>
  </div>
  <div className='flex lg:flex-row flex-col-reverse justify-between py-12 '>
  <div className=' lg:w-[553px] w-full h-[2px] text-[#D0B8AC] bg-[#D0B8AC] opacity-50  '></div>
  <p className='flex lg:items-center gap-3 font-open font-normal text-[16px] text-[#D0B8AC] items-end justify-end lg:py-0 py-3'>See All Portfolio

  <span className=''>
    <Image src="/images/Right_Arrow.svg" alt="Arrow" width={24} height={12} className="w-auto" />
  </span>
  </p>
  </div>
    </main>
  )
}

export default Porfolio