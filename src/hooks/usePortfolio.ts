// import { useQuery } from "@tanstack/react-query";
// import { supabase } from "@/utils/superbase";

// export function usePortfolio(category: string) {
//   return useQuery({
//     // Logic: The queryKey changes when category changes, triggering a re-fetch
//     queryKey: ["portfolio", category],
//     queryFn: async () => {
//       let query = supabase.from("Portfolio-images").select("*");

//       // Logic: If a category is selected (and it's not 'All'), filter the results
//       if (category && category !== "All") {
//         query = query.eq("category", category);
//       }

//       const { data, error } = await query;
//       if (error) throw new Error(error.message);
//       return data;
//     },
//   });
// }