
import Image from 'next/image'


const reviewData = [
  {
    id: 1,
    name: "Sara and Brayan",
    category: "Portrait",
    image: "/images/couple-looking.svg",
  },
  {
    id: 2,
    name: "James and Lily",
    category: "Wedding",
    image: "/images/Second-review.svg",
  },
  {
    id: 3,
    name: "The Smiths",
    category: "Family",
    image: "/images/third-review.svg",
  },
]

function Review() {

// const {Products, error, status} = useGet();

// if (status === "pending") {
//   return <p className="text-center py-10">Loading products...</p>;

//   if (status === "error") {
//     return <p className='text-center text-red-600 '>Error loading products</p>
//   }
// }

  return (
    <main className='Wrapper lg:px-0 px-4 lg:py-12 py-2'>
      <div>
        <h2 className='py-5 font-glinter font-normal lg:text-[100px] text-[70px] text-[#D0B8AC]'>
          Reviews
        </h2>
        
        <div className='flex lg:flex-row flex-col gap-12 items-center justify-center'>
          {reviewData.map((review) => (
            <div key={review.id} className='relative group overflow-hidden'>
              <Image
                src={review.image}
                alt={review.name}
                width={400} // Increased for better quality
                height={500}
                className="w-full h-auto relative object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Text */}
              <div className='absolute bottom-5 left-4 z-10'>
                <p className='font-open text-[20px] text-white font-semibold'>
                  {review.name}
                </p>
                <span className='font-open text-[15px] text-white opacity-80'>
                  {review.category}
                </span>
              </div>

              {/* Optional: Dark gradient overlay so text is easier to read */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
          ))}
        </div>


        {/* <div className='flex'>
          {Products.slice(5,8).map((product)=>(
            <div key={product.id} className='flex gap-22 bg-green-300 p-12'>
              <Image 
              src={product.thumbnail}
              alt={""}
              width={100}
              height={100}
              />  
            </div>
          ))}
        </div> */}
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-12 items-center justify-center mt-12">
        <button className="hover:scale-110 transition-transform">
          <Image
            src="/images/right-arrow.svg"
            alt="Previous"
            width={30}
            height={15}
            className="w-auto rotate-180" 
          />
        </button>
        
        <button className="hover:scale-110 transition-transform">
          <Image
            src="/images/right-arrow1.svg"
            alt="Next"
            width={30}
            height={15}
            className="w-auto"
          />
        </button>
      </div>
    </main>
  )
}

export default Review