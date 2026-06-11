"use client";

import { PanInfo, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ReviewItem {
  id: string | number;
  image_url: string;
  name: string;
  category: string;
  reviewtext: string;
}

export default function ReviewClient({ reviewsData = [] }: { reviewsData: ReviewItem[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Safety Shield: Ensures your loops only run on real iterable arrays, never crashing on raw objects
  const safeReviews = Array.isArray(reviewsData) ? reviewsData : [];

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const getActiveDataIndex = (index: number) => {
    const len = safeReviews.length;
    if (len === 0) return 0;
    return ((index % len) + len) % len;
  };

  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => setCurrentIndex((prev) => prev - 1);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40 || info.velocity.x < -200) {
      handleNext();
    } else if (info.offset.x > 40 || info.velocity.x > 200) {
      handlePrev();
    }
  };

  if (safeReviews.length === 0) return null;

  return (
    <section className="Wrapper bg-black lg:py-20 py-12 overflow-hidden w-full max-w-full flex flex-col items-start lg:items-center">
      
      <div className="Wrapper w-full lg:px-0 px-4 md:px-12 mb-12">
        <h2 className="text-white text-5xl md:text-7xl font-glinter">Reviews</h2>
      </div>

      {/* 1. DESKTOP INFINITE TICKER */}
      {!isMobile && (
        <div className="w-full overflow-hidden lg:flex hidden">
          <motion.div
            className="flex flex-nowrap gap-8 items-center cursor-pointer select-none"
            style={{ willChange: "transform" }}
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: isPaused ? 1000000 : 25,
              ease: "linear",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicating the layout cleanly across an absolute seamless looping stream */}
            {[...safeReviews, ...safeReviews, ...safeReviews, ...safeReviews].map((review, id) => (
              <div
                key={`desktop-review-${id}`}
                className="relative group overflow-hidden rounded-sm bg-zinc-900 w-[380px] shrink-0"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={review.image_url}
                    alt={review.name || "Reviewer Image"}
                    unoptimized
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 text-left">
                    <h4 className="text-white font-bold text-xl mb-1">{review.name}</h4>
                    <p className="text-[#D0B8AC] text-xs uppercase tracking-wider mb-2">{review.category}</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{review.reviewtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* 2. MOBILE SWIPE MANUAL CAROUSEL WITH RIGHT PEEK */}
      {isMobile && (
        <div className="w-full overflow-hidden px-4 relative min-h-[480px] flex items-center justify-start">
          <motion.div
            className="relative w-[86vw] h-[450px] cursor-grab active:cursor-grabbing lg:hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {safeReviews.map((review, id) => {
              let offsetIndex = id - getActiveDataIndex(currentIndex);
              
              if (offsetIndex < -1) offsetIndex += safeReviews.length;
              if (offsetIndex > 1) offsetIndex -= safeReviews.length;

              let translateX = `${offsetIndex * 104}%`;
              if (offsetIndex === -1) {
                translateX = "-130%"; 
              }

              return (
                <motion.div
                  key={`mobile-review-${id}`}
                  style={{ position: "absolute", top: 0, left: 0 }}
                  animate={{
                    x: translateX,
                    opacity: offsetIndex === -1 ? 0 : 1,
                    zIndex: offsetIndex === 0 ? 10 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 32 }}
                  className="w-[86vw] shrink-0 pointer-events-none rounded-sm overflow-hidden bg-zinc-900"
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={review.image_url}
                      alt={review.name || "Reviewer Image"}
                      unoptimized
                      fill
                      className="object-cover grayscale"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 text-left">
                      <h4 className="text-white font-bold text-xl mb-1">{review.name}</h4>
                      <p className="text-[#D0B8AC] text-xs uppercase tracking-wider mb-2">{review.category}</p>
                      <p className="text-zinc-300 text-sm leading-relaxed">{review.reviewtext}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}

      {/* MOBILE ACTIVE BULLET INDICATORS */}
      {isMobile && (
        <div className="flex gap-2 mt-6 lg:hidden self-center">
          {safeReviews.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === getActiveDataIndex(currentIndex) ? "w-6 bg-[#D0B8AC]" : "w-2 bg-[#D0B8AC]/30"
              }`}
            />
          ))}
        </div>
      )}
      
    </section>
  );
}