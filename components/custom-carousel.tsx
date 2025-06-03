"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type CustomCarouselProps = {
  images: string[];
  title: string;
};

export default function CustomCarousel({ images, title }: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync scroll with currentIndex
  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const itemWidth = container.clientWidth;
    const index = Math.round(container.scrollLeft / itemWidth);
    setCurrentIndex(index);
  };

  // Attach scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" relative group">
      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="carousel-container hide-scrollbar"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full h-[300px] p-2 relative"
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg bg-gray-800">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
                onError={(e) => {
                  console.error("Failed to load:", image);
                  e.currentTarget.src = "/fallback.jpg"; // optional fallback
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Navigation Arrows */}
      <button
        onClick={() =>
          containerRef.current?.scrollBy({ left: -containerRef.current.clientWidth, behavior: "smooth" })
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-all"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() =>
          containerRef.current?.scrollBy({ left: containerRef.current.clientWidth, behavior: "smooth" })
        }
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-all"
        aria-label="Next slide"
        title="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const container = containerRef.current;
              if (container) {
                container.scrollTo({
                  left: container.clientWidth * index,
                  behavior: "smooth",
                });
              }
            }}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-purple-400" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}