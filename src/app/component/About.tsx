import { supabase } from "@/utils/superbase";
import Image from "next/image";


export default async function About() {
const {data: profile, error} = await supabase 
.from('profile')
.select('*')

if (error) return <div className="p-10 text-red">Error: {error.message}</div>

  return (
    <main id="about" className=" Wrapper lg:px-0 px-4 my-15 lg:my-0 ">
      <div className=" relative lg:flex hidden items-center justify-end ">
        <div className="absolute">
          <div className="flex items-center gap-30">
            <div>
              <Image
                src={profile[0].image_url}
                alt={profile[0].title}
                 width={400}
                 height={450}
                 unoptimized
                className="w-[400px] h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"  
              />
            </div>
            <div className="">
              <p className="w-[658px] text-white font-normal font-open text-[15px]">
               {profile[0].bio_text}
              </p>
              <div className="ml-20 mt-8 w-[2px] h-[150px]  bg-[#D0B8AC] opacity-50" />
            </div>
          </div>

          <div className="text-left">
            <h1 className="font-glinter font-normal  text-[130px] text-[#D0B8AC]">
              Photographer
            </h1>
            <h1 className="font-glinter font-normal leading-20 text-[150px] text-[#D0B8AC]">
             {profile[0].headline}
            </h1>
          </div>
        </div>

        <div className="relatve mt-60 "> 
          <Image
            alt={profile[0].title}
            src={profile[0].image_url}
            width={383}
            height={676}
            unoptimized
          />
        </div>

      </div>

        {/* Mobile */}
         <div className="space-y-12 lg:hidden w-full">
              <Image
                src="/images/portrait2.svg"
                alt="portrait2"
                width={383}
                height={376}
                unoptimized
              />
              <p className="w-full text-white font-normal font-open text-[16px] leading-7">
                {profile[0].bio_text}
              </p>
              <div className="mt-8 h-[2px] w-full  bg-[#D0B8AC] opacity-50" />
                
            <div>
                <h1 className="font-glinter font-bold lg:text-[40px] text-[50px] text-[#D0B8AC]">
            {profile[0].headline}
              <p className="pl-6">Photographer </p>
            </h1>
            </div>

            <div>
            <Image
            src="/images/portrait3.svg"
            alt="portrait2"
            width={383}
            height={676}
          />
          </div>
            </div>
       
    </main>
  );
}

