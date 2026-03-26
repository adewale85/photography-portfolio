import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="Wrapper relative min-h-screen w-full bg-black flex flex-col-reverse lg:flex-row overflow-hidden">

      

      <div className="flex flex-col justify-center px-6 py-12 lg:px-0 lg:w-[40%] z-10 ">
        
        <h1 className="font-poppins text-[50px] md:text-[90px] lg:text-[120px] text-[70px] leading-[0.85] text-[#D0B8AC] mb-6">
          Monica <br className="hidden lg:block" /> Johnson
        </h1>

        <p className="max-w-md text-[17px] lg:text-[16px] text-gray-300 mb-10 leading-8">
          Our photography services feature highly skilled professionals and the attraction of top talent for each shoot. We excel at solving creative and organizational challenges, regardless of the level of complexity involved.
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


     <div className="relative w-full h-[80vh] lg:h-[90vh] ">
  <Image
    src="/images/black-white-portrait.svg"
    alt="Monica Johnson Portrait"
    fill
    priority
    className="object-cover z-0"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />


<div className=" absolute bottom-10 lg:left-170 top-50 left-0 z-20 flex lg:flex-col flex-row items-center gap-6 justify-center">
          

          <div className="flex flex-row lg:flex-col gap-6 items-center ">
            <div className=" lg:w-[2px] w-20 lg:h-60 h-[2px]  bg-[#D0B8AC] opacity-50" />
            <a href="https://instagram.com" target="_blank">
              <Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://facebook.com" target="_blank">
              <Image src="/images/facebook.svg" alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Image src="/images/twitter.svg" alt="Twitter" width={20} height={20} />
            </a>
           <div className=" lg:w-[2px] w-20 lg:h-60 h-[2px]  bg-[#D0B8AC] opacity-50" />
          </div>

          
    </div>
</div>



        

    </section>
  );
};

export default HeroSection;