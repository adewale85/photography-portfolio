'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


export default function LatestWorkClient({ latestwork }: { latestwork: any[] }) {
  // Duplicate array for seamless infinite loop
  const loopedWork = latestwork ? [...latestwork, ...latestwork] : [];
  const [ispaused, setIsPaused] = useState(false);

  return (
    <main className="w-full Wrapper overflow-hidden bg-black lg:py-20 py-12">

      {/* Test animation (you can remove later) */}
      <motion.div 
        animate={{ rotate: 360 }}
         whileHover={{animationPlayState: "paused"}}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: 30,
          height: 30,
          backgroundColor: "red",
          margin: "20px",
          
        }}
      />

      {/* Slider Container */}
      <div className="Wrapper relative w-full overflow-hidden ">

         <motion.div
          className="flex w-max gap-6 cursor-pointer"
          style={{ willChange: "transform" , 
            animationPlayState: ispaused ? "paused" : "running"
          }}
          animate={{ x: ispaused ? undefined : ["0%", "-50%"]}}
          // Use the whileHover property directly
          whileHover={{ animationPlayState: "paused" }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          onMouseEnter={()=> setIsPaused(true)}
          onMouseLeave={()=> setIsPaused(false)}
        >
          {loopedWork.map((work, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] h-[400px]"
            >
              <Image
                src={work.image_url}
                alt={work.title || "Gallery Item"}
                fill
                sizes="300px"
                unoptimized
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}