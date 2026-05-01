'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function LatestWorkClient({ latestwork }: { latestwork: any[] }) {
  // Duplicate array for seamless infinite loop
  const loopedWork = latestwork ? [...latestwork, ...latestwork] : [];

  return (
    <main className="w-full overflow-hidden bg-black py-20">

      {/* Test animation (you can remove later) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{
          width: 50,
          height: 50,
          backgroundColor: "red",
          margin: "20px",
        }}
      />

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">

          <motion.div
          className="flex w-max gap-6"
          style={{ willChange: "transform" }}
          animate={{
            x: ["0%", "-50%"]   // 🔥 key to seamless loop
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {/* FIRST COPY */}
          {latestwork.map((work, index) => (
            <div
              key={`a-${index}`}
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

          {/* SECOND COPY (THIS IS WHAT PREVENTS BLANK SPACE) */}
          {latestwork.map((work, index) => (
            <div
              key={`b-${index}`}
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