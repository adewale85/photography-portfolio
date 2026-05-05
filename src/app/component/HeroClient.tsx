import Image from 'next/image'
import Link from 'next/link'


function HeroClient({ heroData }: { heroData: any[] }) {
  return (
   <section className="Wrapper relative min-h-screen w-full bg-black flex flex-col-reverse lg:flex-row lg:gap-22 gap-0 lg:mb-22 mb-0 overflow-hidden">
      
      {/* Content Area */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-0 lg:w-[50%] z-10 ">
        <h1 className="font-glinter text-[50px] md:text-[70px] lg:text-[120px] leading-[0.85] text-[#D0B8AC] mb-6">
          {heroData[0]?.headline}
        </h1>

        <p className="max-w-md text-[17px] lg:text-[16px] text-gray-300 mb-10 leading-8">
          {heroData[0]?.subheadline}
        </p>

        <Link href="/about" className="flex items-center gap-4 group">
          <span className="text-[#D0B8AC] group-hover:underline">
            Read More
          </span>
          <div className="transition-transform duration-300 group-hover:translate-x-2">
            <Image src="/images/Right_Arrow.svg" alt="Arrow" width={24} height={12} className="w-auto" />
          </div>
        </Link>
      </div>

      {/* Image Gallery Area */}
      <div className="relative w-full h-[90vh] lg:h-[90vh] py-22 lg:w-[50%]">
        {heroData?.map((content) => (
          <div key={content.id} className="relative w-full h-full">
             <Image
              src={content.image_url}
              alt={content.title || "Hero Image"}
              fill
              className="object-cover"
              priority 
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />

        {/* Social Links Sidebar */}
        <div className="absolute bottom-10 lg:left-170 lg:top-50 top-120 left-10 z-20 flex lg:flex-col flex-row items-center gap-6 justify-center">
          <div className="flex flex-row lg:flex-col gap-6 items-center">
            <div className="lg:w-[2px] w-20 lg:h-60 h-[2px] bg-[#D0B8AC] opacity-50" />
            <a href="https://www.instagram.com/Shollystarphotography" target="_blank" rel="noreferrer">
              <Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://www.facebook.com/Odusola.Adewale" target="_blank" rel="noreferrer">
              <Image src="/images/facebook.svg" alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Image src="/images/twitter.svg" alt="Twitter" width={20} height={20} />
            </a>
            <div className="lg:w-[2px] w-20 lg:h-60 h-[2px] bg-[#D0B8AC] opacity-50" />
          </div>  
        </div>
      </div>
    </section>
  )
}

export default HeroClient