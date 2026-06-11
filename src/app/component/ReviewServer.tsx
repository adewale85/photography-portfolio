import { supabase } from "@/utils/superbase";
import ReviewClient from "./Review";
// Ensure this matches your file folder structure

export default async function Review() {
  const { data: reviews, error } = await supabase
    .from('Reviews')
    .select('*');

  if (error) {
    return (
      <div className="p-10 text-red-500 text-center font-open">
        Error loading reviews: {error.message}
      </div>
    );
  }
  
  // Clean fallback layout while your data table is empty
  if (!reviews || reviews.length === 0) {
    return (
      <section className="bg-black lg:py-20 py-12 px-4 text-center">
        <h2 className="text-white text-5xl md:text-7xl font-glinter mb-12">Reviews</h2>
        <div className="text-zinc-500 font-open">Waiting for reviews to be uploaded...</div>
      </section>
    );
  }

  // Pass the verified array down securely
  return <ReviewClient reviewsData={reviews} />;
}