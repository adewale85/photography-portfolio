"use client";

import Image from 'next/image'
import Link from 'next/link'

function HeroClient({ heroinfo }: { heroinfo: any[] }) {
 

  return (
    <section className="Wrapper relative min-h-screen w-full bg-black flex flex-col-reverse lg:flex-row lg:items-center justify-center overflow-hidden">
      
      {/* Text Content Area - Left Side */}
      <div className="lg:px-0 px-4 relative flex flex-col justify-center py-16  w-full lg:w-[50%] z-10 min-h-[50vh] lg:-mt-12">
        
        {/* DESIGN ACCENT 1: Giant Background Watermark Number */}
        <div className="absolute top-4 left-6 lg:left-20 font-glinter text-[120px] lg:text-[200px] text-[#D0B8AC] opacity-[0.03] select-none pointer-events-none z-0">
          01
        </div>

        {/* DESIGN ACCENT 2: Top Minimal Tag & Fine Line (Fills Upper Space) */}
        <div className="z-10 flex items-center gap-4 mb-6 opacity-60">
          <span className="text-[14px] uppercase tracking-[0.3em] text-[#D0B8AC] font-medium">
            Fine Art Portfolio
          </span>
          <div className="h-[1px] w-12 bg-[#D0B8AC] opacity-40" />
        </div>

        {/* Main Heading */}
        <h1 className="z-10 font-glinter text-[70px] md:text-[70px] lg:text-[120px] xl:text-[150px] leading-[0.85] text-[#D0B8AC] mb-6">
          {heroinfo[0]?.headline}
        </h1>

        {/* Subheading */}
        <p className="z-10 max-w-md text-[18px] text-gray-300 mb-10 leading-8">
          {heroinfo[0]?.subheadline}
        </p>

        {/* Read More Link */}
        <Link href="#about" className="z-10 flex items-center gap-4 group w-fit mb-12">
          <span className="text-[#D0B8AC] group-hover:underline text-[20px]">
            Read More
          </span>
          <div className="transition-transform duration-300 group-hover:translate-x-2">
            <Image src="/images/Right_Arrow.svg" alt="Arrow" width={24} height={12} className="w-auto" />
          </div>
        </Link>

        {/* DESIGN ACCENT 3: Technical Details (Fills Bottom Space) */}
        <div className="z-10 hidden lg:flex items-center gap-6 text-[11px] tracking-widest text-gray-500 uppercase border-t border-white/5 pt-6 w-fit">
          <span>Est. 2026</span>
          <span className="text-white/20">•</span>
          <span>Captured Narrative</span>
          <span className="text-white/20">•</span>
          <span>Ondo State, NG</span>
        </div>

      </div>

      {/* Image Gallery Area - Right Side */}
      <div className="relative w-full h-[70vh] lg:w-[50%]">
        {heroinfo?.map((content) => (
          <div key={content.id} className="absolute inset-0 w-full h-full">
            <Image
              src={content.image_url}
              alt={content.title || "Hero Image"}
              unoptimized
              fill
              className="object-cover"
              priority 
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent" />

        {/* Social Links Sidebar */}
       {/* Social Links Sidebar - Centered row on mobile with flanking lines, vertical sidebar on desktop */}
<div className="absolute bottom-6 left-0 w-full px-6 lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-auto lg:px-0 z-20 flex flex-row lg:flex-col items-center justify-center gap-4">
  
  {/* Left Line on Mobile / Top Line on Desktop */}
  <div className="h-[1px] flex-1 lg:flex-none lg:w-[2px] lg:h-28 bg-[#D0B8AC] opacity-50" />
  
  {/* Social Icons Container */}
  <div className="flex flex-row lg:flex-col gap-6 items-center bg-black/30 backdrop-blur-sm p-2 rounded-lg lg:bg-transparent lg:p-0 shrink-0">
    <a href="https://www.instagram.com/Shollystarphotography" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
      <Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} />
    </a>
    <a href="https://www.facebook.com/Odusola.Adewale" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
      <Image src="/images/facebook.svg" alt="Facebook" width={20} height={20} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
      <Image src="/images/twitter.svg" alt="Twitter" width={20} height={20} />
    </a>
  </div>
  
  {/* Right Line on Mobile / Bottom Line on Desktop */}
  <div className="h-[1px] flex-1 lg:flex-none lg:w-[2px] lg:h-28 bg-[#D0B8AC] opacity-50" />
  
</div>

      </div>
    </section>
  )
}

export default HeroClient;