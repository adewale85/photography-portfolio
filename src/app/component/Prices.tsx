
'use client'

import { ProductDetails } from '@/Constant/price';
import { useGet } from '@/hooks/useGet'
import Image from 'next/image'


function Prices() {
//   const {  Products, error, status} = useGet();

// if (status === "pending") {
//   return <p className="text-center py-10">Loading products...</p>;
// }

// if (status === "error") {
//   return <p className="text-center text-red-500 py-10">Error loading data</p>;
// }
  
  return (
    <main id="prices" className="Wrapper scroll-mb-150 lg:px-0 px-4 lg:py-32 py-12">
         
        <div className='flex lg:flex-row flex-col items-center justify-between'>
            
         <div className='mb-15 lg:mb-0'>
            <Image
                    src="/images/Priceimage.svg"
                    alt="price-image"
                    width={24}
                    height={12}
                    className="w-[500px] hover:scale-110 h-auto object-cover cursor-zoom-out transition-transform duration-500"
                  />

        {/* <div className='relative w-full h-[250px]  p-12 flex gap-12 items-center justify-center overflow-hidden rounded-sm bg-amber-400 '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-20 py-12  bg-green-400'>
        {Products.slice(0,4).map((product: ProductDetails) => (
          <div key={product.id} className='flex gap-12 bg-red-400'>
      <Image 
      src={product.thumbnail} // DummyJSON uses 'thumbnail' or 'images[0]'
      alt={product.price.toString()} // Just for alt text, can be anything
      width={100}
      height={100}
      className="w-full h-auto object-cover"
    />
    
     <h2 className=" text-blue-500">{product.title}</h2>
      <p className=" text-white">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      </div>       */}

                  
         </div>
     
         <div>
              <h1 className='font-glinster font-normal lg:text-[75px] text-[50px] text-[#D0B8AC] pb-12'>My Prices
              </h1>
         <div className='flex gap-12'>
            <div className='space-y-12 '>
         <div className='lg:w-[557px] w-full space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-open font-normal text-[25px] border-b text-white'>Portrait
                </h3>
              <span className='font-open font-normal text-[25px] text-white'>220$
              </span>
            </div>
            <p className='font-open font-normal text-17px text-white'>This includes individual, family, and group portraits, as well as headshots for business and corporate purposes.</p>
         </div>

            <div className='lg:w-[557px] w-full space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-open font-normal text-[25px] border-b text-white'>Individual
                </h3>
              <span className='font-open font-normal text-[25px] text-white'>300$
              </span>
            </div>
            <p className='font-open font-normal text-17px text-white'>An individual photoshoot offers an opportunity for someone to have a professional photographer capture their unique personality and style through a series of posed and candid shots.</p>
         </div>

            <div className='lg:w-[557px] w-full space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-open font-normal text-[25px] border-b text-white'>Fashion
                </h3>
              <span className='font-open font-normal text-[25px] text-white'>350$
              </span>
            </div>
            <p className='font-open font-normal text-17px text-white'>A fashion photoshoot is a creative process in which a team of professionals collaborates to produce images that showcase clothing, accessories, or a particular style.</p>
         </div>
          </div>
         <div className='flex lg:flex-row flex-col items-center justify-center lg:h-[450px]  w-[2px] bg-white opacity-60'></div>
         </div>
        <div className='flex gap-3 items-end justify-end py-4'>
            <p className='font-open font-normal text-[17px] text-white flex items-center justify-center'>Order Shooting</p>
             <Image
                src="/images/right-arrow1.svg"
                alt="Arrow"
                width={24}
                height={12}
                className="w-auto "
                />
        </div>
       
          <div>
            
          </div>
        
          </div>
          </div>
    </main>
  )
}

export default Prices