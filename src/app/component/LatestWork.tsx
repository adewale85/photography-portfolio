import Image from "next/image";
import React from "react";

function LatestWork() {
  return (
    <div className="Wrapper flex">
      <h1 className="font-glinter font-medium text-[100px] text-[#D0B8AC]">
        My Latest Work’s
      </h1>

      <div className="flex gap-5 items-center">
        <div className="">
            <p className="w-[477px] font-open font-normal text-[15px] text-white">
        Photography has always been considered a form of magic, as it captures
        moments of the past, present and future, preserving them for eternity.
        It has the ability to capture emotions, memories, and expressions of
        people, places, and things in a way that surpasses other art forms,
        creating a world of beauty, wonder, and discovery.
      </p>
      

      <div className="flex items-center gap-2 space-y-6">
       <div className="flex items-center gap-3 ">
         <p className="text-white">See More Work’s</p>
         
        <div className="transition-transform duration-300 group-hover:translate-x-2 py-12">
          <Image
            src="/images/Right_Arrow.svg"
            alt="Arrow"
            width={24}
            height={12}
            className="w-auto"
          />
        </div>
         </div>
      
      </div>
        </div>
      
      <div className="mt-12 lg:h-[193px] w-full lg:w-[2px] text-[#D0B8AC] bg-[#D0B8AC] opacity-50">
      </div>
      </div>
    </div>
  );
}

export default LatestWork;
