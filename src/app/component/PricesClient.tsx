'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PricesClient({ pricingData }: { pricingData: any[] }) {
  return (
    <main id="prices" className="Wrapper scroll-mb-150 lg:px-0 px-4 lg:py-32 py-12 bg-black">
      <div className='flex lg:flex-row flex-col items-center justify-center gap-8 lg:gap-12'>
        
    
        <div className='mb-5 lg:mb-0'>
          <Image
            src="/images/Priceimage.svg"
            alt="price-image"
            width={700}
            height={800}
            className="w-[500px] hover:scale-110 h-auto object-cover cursor-zoom-out transition-transform duration-500"
          />
        </div>

        <div className="lg:w-[80%] w-full  ">
          <h1 className='font-glinster font-normal lg:text-[55px] text-[50px] text-[#D0B8AC] lg:pb-16 pb-12 '>
            My Prices
          </h1>

          <div className='flex gap-12'>
            <div className='space-y-6 flex-1'>
              {pricingData.map((item) => (
                <div key={item.id} className='lg:w-[557px] w-full space-y-3'>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-open font-normal text-[25px] border-b text-white'>
                      {item.category}
                    </h3>
                    <span className='font-open font-normal text-[25px] text-white'>
                      {item.price}
                    </span>
                  </div>
                  <p className='font-open font-normal text-17px text-white lg:w-[450px] w-full'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

      
            <div className='hidden lg:flex flex-col items-center justify-center h-[450px] w-[2px] bg-white opacity-60'></div>
          </div>

        <Link href="#contact" className='flex items-center justify-end gap-3'>
          <div className='flex gap-3 items-end justify-end py-8 cursor-pointer group'>
            <p className='font-open font-normal text-[17px] text-white'>Book Now</p>
            <div className="transition-transform duration-300 group-hover:translate-x-2">
              <Image
                src="/images/right-arrow1.svg"
                alt="Arrow"
                width={24}
                height={12}
                className="w-auto"
              />
            </div>
          </div>
        </Link>

        </div>
      </div>
    </main>
  );
}