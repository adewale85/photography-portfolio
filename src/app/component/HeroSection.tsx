import { supabase } from "@/utils/superbase";
import HeroClient from "./HeroClient";

export default async function HeroSection() {
 
  const { data: heroData, error } = await supabase
    .from('heroData')
    .select('*');

  if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>;
  
  return <HeroClient heroinfo={heroData || []} />;
}