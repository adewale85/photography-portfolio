import { supabase } from '@/utils/superbase'
import Image from 'next/image'


async function Porfolio() {
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
  
    if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>
  

  return (
    <main id="portfolio" className='Wrapper lg:scroll-mt-20 scroll-mt-0 lg:py-40 py-0 space-y-12 lg:px-0 px-4 items-center justify-center '>
      <h3 className='text-white font-glinter font-medium text-7xl '>Portfolio</h3>
  <div className='flex lg:flex-row flex-col justify-between lg:gap-22 gap-2'>
    



 <div className="w-full h-[400px] ">
        {/* <h1 className="text-5xl font-bold mb-2 tracking-tighter">GALLERY</h1>
        <p className="text-zinc-500 mb-12 uppercase tracking-widest text-sm">Photography Portfolio</p> */}
        
        <div className="lg:w-[602px] w-full h-[2px] text-[#D0B8AC] bg-[#D0B8AC] opacity-50  ">
          {projects?.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-zinc-900 rounded-sm">
           
             <div className=''>
                <Image 
                src={project.image_url} 
                alt={project.title} 
                unoptimized
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              width={553} height={190.73}/>
            </div>
          
         
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-xl font-light tracking-wide">{project.title}</h2>
                <p className="text-zinc-400 text-xs uppercase mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
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