import { supabase } from "@/utils/superbase";

import Image from "next/image";
import Link from "next/link";


export default async function PortfolioGallery() {
  // Fetch all photography work
  const { data: gallery, error } = await supabase
    .from("portfolio")
    .select("*")
    .order('created_at', { ascending: false });

  if (error) return <div className="p-20 text-red-500">Error loading portfolio: {error.message}</div>;
  const categories = ["Wedding", "Birthday", "Studio","Portrait","Outdoor"];
  const categoryList = [ "Wedding","Birthday","Studio","Portrait", "Outdoor"]

  return (
    <main className="Wrapper bg-black min-h-screen text-white px-4 lg:px-0 pt-32 pb-12">
         <div className="space-y-8 mt-12">
           <div>
            <Link href="/" className="text-[#D0B8AC] text-sm uppercase tracking-[0.3em] mb-4 block hover:opacity-70 transition-opacity">
              ← Back to Home
            </Link>
          </div>
          <div className="space-y-4">
            <h1 className="text-7xl font-glinter leading-none">Full Gallery</h1>
          <p className="text-zinc-500 max-w-md text-xl uppercase tracking-wider leading-relaxed">
            A curated collection of captured moments, from studio sessions to events.
          </p>
          </div>
         </div>
  <nav className="fixed left-0 top-0 z-50 w-full bg-white text-black py-6 shadow-2xl p-6">
      <div className="Wrapper flex items-center justify-center gap-8 md:gap-16">
      {categoryList.map((list) => (
        <a 
          key={list} 
          href={`#${list.toLowerCase()}`}
          className="text-sm md:text-xl font-bold uppercase tracking-tighter hover:text-[#D0B8AC] transition-colors"
        >
          {list}
        </a>
      ))}
    </div>
  </nav>

      {categories.map((cat)=>{
        const photos = gallery?.filter(p=> p.category.toLowerCase() === cat.toLowerCase());
      
        if(!photos || photos.length === 0)
          return null

        return (
        
   <section key={cat} id={cat.toLowerCase()} className="pt-24 pb-12">
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="text-6xl font-glinter uppercase">{cat}</h2>
            <span className="text-zinc-500 text-xl">({photos.length} Shots)</span>
          </div>

  {/* THE GRID: This controls how many images appear per row */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
  {photos.map((photo) => (
    
    <div key={photo.id} className="relative h-[450px] w-full group overflow-hidden bg-zinc-900">
      <Image
        src={photo.image_url}
        alt={photo.title || "Gallery Image"}
        fill
        unoptimized
        className="object-cover transition-all duration-700 group-hover:scale-110"
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

      

     
      
    </main>
  );
}