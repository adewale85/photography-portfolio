import { supabase } from "@/utils/superbase";
import Image from "next/image";

export default async function About() {
  const { data: profile, error } = await supabase
    .from('profile')
    .select('*')

  if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>
  if (!profile || profile.length === 0) return null;

  return (
    <main id="about" className="Wrapper lg:px-0 px-4 my-15  ">
      
    
      <div className="hidden lg:flex relative items-center justify-end min-h-[800px]">
        
      
        <div className="absolute left-0 z-20 w-full">
          <div className="flex items-center gap-30">
            <div>
              <Image
                src={profile[0].image_url}
                alt={profile[0].title}
                width={400}
                height={450}
                unoptimized
                className="w-[400px] h-[450px] object-cover grayscale"
              />
            </div>
            
            <div className="flex flex-col">
              <p className="w-[658px] text-white font-normal font-open text-[15px]">
                {profile[0].bio_text}
              </p>
              <div className="ml-20 mt-8 w-[2px] h-[150px] bg-[#D0B8AC] opacity-50" />
            </div>
          </div>

          <div className="text-left mt-[-50px]">
            <h1 className="font-glinter font-normal text-[130px] text-[#D0B8AC] leading-none">
              Photographer
            </h1>
            <h1 className="font-glinter font-normal text-[150px] text-[#D0B8AC] leading-none">
              {profile[0].headline}
            </h1>
          </div>
        </div>

        {/* My Right Image */}
        <div className="relative z-10 mt-60">
          <Image
            alt={profile[0].title}
            src={profile[0].image_url}
            width={383}
            height={676}
            unoptimized
          />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden flex flex-col space-y-20 pt-10">
        <Image
          src={profile[0].image_url}
          alt={profile[0].title}
          width={400}
          height={450}
          unoptimized
          className="w-full h-auto object-cover grayscale"
        />
        
        <div className="space-y-12 py-12">
  <h1 className="font-glinter font-normal text-[50px] leading-tight text-[#D0B8AC]">
            Photographer <br />
            {profile[0].headline}
          </h1>
          <div className="h-[2px] w-full bg-[#D0B8AC] opacity-50 mb-6" />
          <p className="text-green- font-open text-[17px] leading-relaxed">
            {profile[0].bio_text}
          </p>
        </div>

        <Image
          src={profile[0].image_url}
          alt={profile[0].title}
          width={383}
          height={676}
          unoptimized
          className="w-full h-auto opacity-70"
        />
      </div>

    </main>
  );
}