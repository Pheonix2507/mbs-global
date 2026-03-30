"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getStrapiMedia } from "@/lib/strapi";
import { StrapiLocation } from "@/lib/strapi-types";

interface WorldMapProps {
  data?: StrapiLocation;
}

const WorldMap = ({ data }: WorldMapProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locations = data?.location_element || [];

  if (locations.length === 0) return null;

  // Duplicate locations to ensure seamless looping for the marquee
  const duplicatedLocations = [...locations];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 412; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#1F2123] py-24 overflow-hidden relative border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-bold text-white tracking-tight mb-4">
            {data?.title}
          </h2>
          <div className="h-1 w-20 bg-white rounded-full"></div>
        </div>

        {/* Navigation Icons */}
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-4 rounded-full border border-zinc-700 hover:bg-white hover:text-black text-white transition-all duration-300 group"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 rounded-full border border-zinc-700 hover:bg-white hover:text-black text-white transition-all duration-300 group"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        {/* Edge masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-[#1F2123] via-[#1F2123]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-[#1F2123] via-[#1F2123]/80 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x"
        >
          <div className="flex gap-8 px-[10vw] animate-marquee hover:[animation-play-state:paused]">
            {duplicatedLocations.map((location, idx) => (
              <div
                key={`${location.id}-${idx}`}
                className="w-[380px] shrink-0 p-6 rounded-3xl transition-all duration-500 group snap-center"
              >
                <div className="aspect-square rounded-sm mb-8 overflow-hidden bg-zinc-800 relative shadow-2xl">
                  {location.image ? (
                    <Image
                      src={getStrapiMedia(location.image) || ""}
                      alt={location.title}
                      fill
                      sizes="380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-white transition-all duration-500 group-hover:bg-zinc-100" />
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-semibold text-white tracking-tight">
                    {location.title}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-zinc-400 text-lg font-light leading-relaxed whitespace-pre-line">
                      {location.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
