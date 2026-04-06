import Image from "next/image";
import React from "react";

function LatestWork() {
  return (
    <main className="Wrapper lg:px-0 px-4 my-20 lg:my-0 " >
      <div className="flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-12 lg:my-0 my-12">
      <h1 className="font-glinter font-bold lg:text-[100px] text-[60px] text-[#D0B8AC]">
        My Latest Work’s
      </h1>

      <div className="flex lg:flex-row flex-col gap-5 items-center ">
        <div className="space-y-12 ">
        <p className="lg:w-[457px] w-full font-open font-normal text-[15px] text-white mb-">
        Photography has always been considered a form of magic, as it captures
        moments of the past, present and future, preserving them for eternity.
        It has the ability to capture emotions, memories, and expressions of
        people, places, and things in a way that surpasses other art forms,
        creating a world of beauty, wonder, and discovery.
      </p>
      

      
       <div className="flex items-end justify-end lg:pt-12 pt-0 py-3 lg:py-0 ">
       <div className="flex items-center justify-center gap-3">
          <p className="font-open font-normal text-[16px] text-[#D0B8AC] ">See More Work’s</p>
         
        <div className="transition-transform duration-300 group-hover:translate-x-2 py-2 ">
          <Image
            src="/images/Right_Arrow.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto "
          />
        </div>
       </div>
         </div>
      
        </div>
      
      <div className="lg:h-[253px] h-1 w-full lg:w-[2px] text-[#D0B8AC] bg-[#D0B8AC] opacity-50"></div>
      </div>

    </div>
    <div className="flex lg:flex-row  gap-4 lg:py-12 py-0">
       <Image
            src="/images/RecentWork1.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto "
          />
       <Image
            src="/images/RecentWork1.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto "
          />
       <Image
            src="/images/RecentWork1.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto "
          />
       <Image
            src="/images/RecentWork1.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto "
          />
    </div>

    <div className="flex gap-12 items-center justify-center ">
      <Image
            src="/images/right-arrow.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto "
          />

          <Image
            src="/images/right-arrow1.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto "
          />
    </div>
    </main>
  );
}

export default LatestWork;
