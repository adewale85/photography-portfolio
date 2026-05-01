// import { supabase } from "@/utils/superbase"


// export default async function Mynewphoto() {
//   const { data: projects, error } = await supabase
//     .from('projects')
//     .select('*')

//   if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>

//   return (
//     <main className="p-10 bg-[#0a0a0a] min-h-screen text-white">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-5xl font-bold mb-2 tracking-tighter">GALLERY</h1>
//         <p className="text-zinc-500 mb-12 uppercase tracking-widest text-sm">Photography Portfolio</p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects?.map((project) => (
//             <div key={project.id} className="group relative overflow-hidden bg-zinc-900 rounded-sm">
           
//              <div>
//                 <image 
//                 src={project.image_url} 
//                 alt={project.title} 
//                 className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
//               />
//             </div>
          
         
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <h2 className="text-xl font-light tracking-wide">{project.title}</h2>
//                 <p className="text-zinc-400 text-xs uppercase mt-1">{project.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }