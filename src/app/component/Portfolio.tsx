
import { supabase } from "@/utils/superbase";
import Image from "next/image";

import Link from "next/link";

export default async function Portfolio() {
  // 1. Logic: Direct Server-side fetch (No useEffect needed)
  const { data: portfolio, error } = await supabase
    .from("portfolio")
    .select("*")
    .limit(4);

    console.log (portfolio)

  if (error) return <div className="p-10 text-red-500 text-center">Error: {error.message}</div>;
  if (!portfolio || portfolio.length === 0) return null;

  return (
    <section id="portfolio" className="Wrapper bg-black text-white  ">
      
        <h2 className="text-7xl font-glinter  py-22  text-white">Portfolio</h2>
        
        {/* <div className="flex flex-col lg:flex-row gap-10">
          {portfolio.map((photo)=>(
            <div key={photo.id} className=" ">
              <Image
               src={photo[0].image_url}
               alt="Featured Portfolio"
               width={555}
               height={444}
               unoptimized
               className="object-cover"
              />
            </div>
          ))}
        </div> */}


  <div className="flex flex-col lg:flex-row items-center justify-between my-20">
  {/* IMAGE 1: The Left Portrait */}
  <div>
    {portfolio[0] && (
      <div className="w-full lg:w-[500px]">
        <Image
          src={portfolio[0].image_url}
          alt="main shot"
          width={500}
          height={600}
          unoptimized
          className="object-cover"
        />
      </div>
    )}
  </div>

  {/* RIGHT GROUP: Contains Image 2 and the Overlapping Image 3 */}
  <div className="relative"> 
    {/* IMAGE 2: The Base Image */}
    {portfolio[1] && (
      <div className="w-full lg:w-[500px]">
        <Image
          src={portfolio[1].image_url}
          alt="base shot"
          width={500}
          height={600}
          unoptimized
          className="object-cover"
        />
      </div>
    )}

    {/* IMAGE 3: The Overlapping Image */}
    {portfolio[3] && ( 
      <div className="absolute  w-[250px] lg:w-[300px]  border-8 border-black z-30 shadow-2xl">
        <Image
          src={portfolio[2].image_url}
          alt="overlap shot"
          fill // Logic: fill makes it expand to the parent's width/height exactly
          unoptimized
          className="w-12 h-8"
        />
      </div>
    )}
  </div>
</div>
        
      
        <div className="flex justify-end py-12">
          <Link 
            href="/porfolioGalary" 
            className="flex items-center gap-2 text-white hover:text-[#D0B8AC] transition-colors"
          >
            <span className="text-sm tracking-[0.2em] uppercase">See All Portfolio</span>
            <Image src="/images/Right_Arrow.svg" alt="Arrow" width={20} height={10} />
          </Link>
        </div>
      
    </section>
  );
}