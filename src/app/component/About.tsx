import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className=" Wrapper lg:px-0 px-4 ">
      <div className=" relative lg:flex hidden items-end justify-end ">
        <div className="absolute">
          <div className="flex gap-16">
            <div>
              <Image
                src="/images/portrait2.svg"
                alt="portrait2"
                width={383}
                height={376}
              />
            </div>
            <div className="">
              <p className="w-[658px] text-white font-normal font-open text-[15px]">
                As a professional photographer, I aim to capture the essence and
                beauty of the world around me through the lens of my camera.
                With a keen eye for detail, I am able to create stunning images
                that showcase the unique stories and personalities of my
                clients.
              </p>
              <div className="ml-20 mt-8 w-[2px] h-[150px]  bg-[#D0B8AC] opacity-50" />
            </div>
          </div>

          <div>
            <h1 className="font-glinter font-normal text-[130px] text-[#D0B8AC]">
              Photographer
            </h1>
            <h1 className="pl-22 font-glinter font-normal text-[130px] text-[#D0B8AC]">
              Monica Johnson
            </h1>
          </div>
        </div>

        <div className="relatve mt-60 "> 
          <Image
            src="/images/portrait3.svg"
            alt="portrait2"
            width={383}
            height={676}
          />
        </div>

      </div>

        {/* Mobile */}
         <div className="space-y-12 lg:hidden w-full">
              <Image
                src="/images/portrait2.svg"
                alt="portrait2"
                width={383}
                height={376}
              />
              <p className="w-full text-white font-normal font-open text-[16px] leading-7">
                As a professional photographer, I aim to capture the essence and
                beauty of the world around me through the lens of my camera.
                With a keen eye for detail, I am able to create stunning images
                that showcase the unique stories and personalities of my
                clients.
              </p>
              <div className="mt-8 h-[2px] w-full  bg-[#D0B8AC] opacity-50" />
                
            <div>
                <h1 className="font-glinter font-bold text-[40px] text-[#D0B8AC]">
              Photographer 
              <p className="pl-6">Monica Johnson</p>
            </h1>
            </div>

            <div>
            <Image
            src="/images/portrait3.svg"
            alt="portrait2"
            width={383}
            height={676}
          />
          </div>
            </div>
       
    </div>
  );
}

export default About;
