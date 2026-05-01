import { supabase } from "@/utils/superbase";
import HeroClient from "./HeroClient";

export default async function HeroSection() {
  // Fetch data on the server
  const { data: heroData, error } = await supabase
    .from('heroData')
    .select('*');

  if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>;

  // Pass the data to the interactive Client Component
  return <HeroClient heroData={heroData || []} />;
}