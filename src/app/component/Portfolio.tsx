import { supabase } from "@/utils/superbase";
import Image from "next/image";
import Link from "next/link";

export default async function Portfolio() {
  // 1. Logic: Direct Server-side fetch (No useEffect needed)
  const { data: portfolio, error } = await supabase
    .from("portfolio")
    .select("*")
    .limit(4);

  console.log(portfolio);

  if (error) {
    return <div className="p-10 text-red-500 text-center">Error: {error.message}</div>;
  }
  
  if (!portfolio || portfolio.length === 0) {
    return null;
  }

  return (
    <section id="portfolio" className="Wrapper lg:px-0 px-4 bg-black text-white">
      
      <h2 className="text-7xl font-glinter pt-22 text-white">Portfolio</h2>

      <div className="flex flex-col lg:flex-row items-center justify-between my-8">
        
        {/* IMAGE 1: The Left Portrait */}
        <div className="relative">
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

          {/* IMAGE 4: The Overlapping Image */}
          {portfolio[2] && ( 
            <div className="absolute top-1/2 -right-26 w-[250px] lg:w-[200px] h-[250px] lg:h-[400px] border-8 border-black z-30 shadow-2xl lg:block hidden">
              <Image
                src={portfolio[0].image_url}
                alt="overlap shot"
                fill 
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
          {portfolio[2] && ( 
            <div className="absolute top-1/18 -left-26 w-[250px] lg:w-[200px] h-[250px] lg:h-[400px] border-8 border-black z-30 shadow-2xl lg:block hidden">
              <Image
                src={portfolio[0].image_url}
                alt="overlap shot"
                fill 
                unoptimized
                className="object-cover"
              />
            </div>
          )}
          
          
        </div>
      </div>
      
      {/* Footer Navigation Link */}
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