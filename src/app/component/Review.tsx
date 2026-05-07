import { supabase } from "@/utils/superbase";
import Image from "next/image";

export default async function Review() {
  
  const { data: Reviews, error } = await supabase
    .from('Reviews')
    .select('*');

    if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>;
  if (!Reviews || Reviews.length === 0) {
  return <div className="text-zinc-500 p-10">Waiting for reviews to be uploaded...</div>;
}
    return (
      <section className="Wrapper bg-black py-20 px-4">
      <h2 className="text-white text-7xl font-glinter mb-12">Reviews</h2>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {Reviews?.map((review) => (
          <div key={review.id} className="relative group overflow-hidden rounded-sm">

            
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={review.image_url}
                alt={review.name}
                unoptimized
                width={400} height={500}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              
              
              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-bold text-xl">{review.name}</h4>
                <p className="text-zinc-400 text-sm">{review.category}</p>
              </div>
            </div>
            
            {/* Optional: Review Text display on hover or below */}
            
          </div>
        ))}
      </div>
    </section>
    )
}