import { supabase } from "@/utils/superbase";
import Image from "next/image";

export default async function Review() {
  
  const { data: Reviews, error } = await supabase
    .from('Reviews')
    .select('*');
    console.log(Reviews)

  if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>;
  
  if (!Reviews || Reviews.length === 0) {
    return <div className="text-zinc-500 p-10">Waiting for reviews to be uploaded...</div>;
  }

  return (
    <section className="Wrapper bg-black lg:py-2 py-12 lg:px-0 px-4 md:px-12 ">
      <h2 className="text-white text-5xl md:text-7xl font-glinter mb-12">Reviews</h2>
      
      {/* Changed flex to grid so cards distribute width evenly and look professional */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Reviews.map((review) => (
          <div key={review.id} className="relative group overflow-hidden rounded-sm bg-zinc-900">
            
            {/* The Image Wrapper Box controlling aspect ratio */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={review.image_url}
                alt={review.name || "Reviewer Image"}
                unoptimized
                fill // 1. Uses 'fill' to expand naturally to match the 4:5 box aspect ratio
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" // 2. Removed 'h-10' and 'w-full' styles
              />
              
              {/* Text Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                <h4 className="text-white font-bold text-xl mb-1">{review.name}</h4>
                <p className="text-[#D0B8AC] text-xs uppercase tracking-wider mb-2">{review.category}</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{review.reviewtext}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}