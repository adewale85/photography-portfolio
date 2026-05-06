import { supabase } from "@/utils/superbase";
import LatestWorkClient from "./LatestWorkClient";

export default async function LatestWork() {
  // Fetch data on the server
  
  const { data: latestwork, error } = await supabase
    .from('latestwork') // Double check your table name spelling!
    .select('*')
    .order('display_order', { ascending: true });

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

 
  return <LatestWorkClient latestwork={latestwork || []} />;
}