import { supabase } from "@/utils/superbase";
import { div } from "framer-motion/client";
import Image from "next/image";


export default async function PortfolioGallery() {
  // Fetch all photography work
  const { data: gallery, error } = await supabase
    .from("portfolio")
    .select("*")
    .order('created_at', { ascending: false });

  if (error) return <div className="p-20 text-red-500">Error loading portfolio: {error.message}</div>;
  const categories = ["Wedding", "Birthday", "Studio","Portrait"];

  return (
    <main className="Wrapper bg-black min-h-screen text-white px-4 lg:px-0 py-12">
      

      {categories.map((cat)=>{
        const photos = gallery?.filter(p=> p.category.toLowerCase() === cat.toLowerCase());
      
        if(!photos || photos.length === 0)
          return null

        return (
    <section key={cat} className=" space-y-12 py-22">
  <div className="flex items-baseline gap-4 mb-10">
    <h2 className="text-6xl font-glinter uppercase">{cat}</h2>
    <span className="text-zinc-500">({photos.length} Shots)</span>
  </div>

  {/* THE GRID: This controls how many images appear per row */}
<div className="flex lg:flex-row flex-col gap-8">
  {photos.map((photo) => (
    
    <div key={photo.id} className="relative h-[450px] w-full group overflow-hidden bg-zinc-900">
      <Image
        src={photo.image_url}
        alt={photo.title || "Gallery Image"}
        fill
        unoptimized
        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
      />
      
    
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <p className="text-sm text-white uppercase ">
          {photo.title}
        </p>
      </div>
    </div>
  ))}
</div>
</section>
        )
      })}

        {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-12">
          <div>
            <Link href="/" className="text-[#D0B8AC] text-sm uppercase tracking-[0.3em] mb-4 block hover:opacity-70 transition-opacity">
              ← Back to Home
            </Link>
          </div>
          <div className="space-y-4">
            <h1 className="text-7xl font-glinter leading-none">Full Gallery</h1>
          <p className="text-zinc-500 max-w-md text-xl uppercase tracking-widest leading-relaxed">
            A curated collection of captured moments, from studio sessions to events.
          </p>
          </div>
        </div> */}


       {/* <h1 className="text-7xl font-glinter leading-none">Birthday Shoot</h1>
        
        <div className="flex lg:flex-row flex-col gap-6">
          {gallery?.map((photo) => (
            <div key={photo.id} className="break-inside-avoid group relative cursor-crosshair">
              <Image
                src={photo.image_url}
                alt={photo.title || "Photography Work"}
                width={800}
                height={1000}
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#D0B8AC] text-xs uppercase tracking-[0.2em] mb-2">
                  {photo.category || "General"}
                </span>
                <h3 className="text-xl font-glinter">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>  */}

     
      
    </main>
  );
}