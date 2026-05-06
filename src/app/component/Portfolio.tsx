import { supabase } from "@/utils/superbase";
import Image from "next/image";

export default async function Portfolio() {
    const { data: portfolio, error } = await supabase
      .from('portfolio')
      .select('*')

    if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>

    // Directly assigning rows from your Supabase table
    const firstImage = portfolio?.[0];  // Row 1
    const secondImage = portfolio?.[1]; // Row 2
    const overlapImage = portfolio?.[2]; // Row 3

  return (
    <main id="portfolio" className='Wrapper lg:scroll-mt-20 scroll-mt-0 lg:py-40 py-0 space-y-12 lg:px-0 px-4 items-center justify-center '>
      <h3 className='text-white font-glinter font-medium text-7xl '>Portfolio</h3>
      
      <div className='flex lg:flex-row flex-col justify-between lg:gap-22 gap-2'>
        
        {/* LEFT SECTION (Main Image from Row 1) */}
        <div className="w-full h-[400px]">
          <div className="lg:w-[602px] w-full h-[2px] text-[#D0B8AC] bg-[#D0B8AC] opacity-50">
            {firstImage && (
              <div key={firstImage.id} className="group relative overflow-hidden bg-zinc-900 rounded-sm">
                <Image 
                  src={firstImage.image_url} 
                  alt={firstImage.title} 
                  unoptimized
                  className=" object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  width={553} height={190.73}
                />
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SECTION (Row 2 and Row 3) */}
        <div className='space-y-5'>
          {secondImage && (
            <div className='w-full text-white font-normal font-open text-[16px] leading-7'>
              <p className='lg:w-[502px] w-full text-white text-[16px] font-normal font-open'>
                {secondImage.description}
              </p>

              <div className='relative z-10 w-full'>
                {/* Main Image on Right from Row 2 */}
                <Image
                  src={secondImage.image_url}
                  alt={secondImage.title}
                  width={502}
                  height={300}
                />

                {/* THE OVERLAP IMAGE from Row 3 */}
                {overlapImage && (
                  <div className='absolute z-40 -bottom-12 -left-12 border-4 border-black'>
                    <Image 
                      src={overlapImage.image_url} 
                      alt={overlapImage.title} 
                      width={276} 
                      height={294}
                      className="object-cover h-[294px]"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

     
       
        <p className='flex lg:items-center gap-3 font-open font-normal text-[16px] text-[#D0B8AC] items-end justify-end lg:py-0 py-3'>
          See All Portfolio
          <span className=''>
            <Image src="/images/Right_Arrow.svg" alt="Arrow" width={24} height={12} className="w-auto" />
          </span>
        </p>
      
    </main>
  );
}