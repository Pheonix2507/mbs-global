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
  const locations = data?.location_element || [];
  const totalItems = locations.length;
  const [itemsPerPage, setItemsPerPage] = React.useState(3);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const [isMoving, setIsMoving] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize index to itemsPerPage for buffer
  React.useEffect(() => {
    if (totalItems > 0) {
      setCurrentIndex(itemsPerPage);
    }
  }, [itemsPerPage, totalItems]);

  if (locations.length === 0) return null;

  // Duplicate locations to ensure seamless looping for the marquee
  const displayItems = [
    ...locations.slice(-itemsPerPage),
    ...locations,
    ...locations.slice(0, itemsPerPage),
  ];

  const handleTransitionEnd = () => {
    setIsMoving(false);
    if (currentIndex >= totalItems + itemsPerPage) {
      setIsTransitioning(false);
      setCurrentIndex(itemsPerPage);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalItems);
    }
  };

  React.useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isMoving || !isTransitioning) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isMoving || !isTransitioning) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev - 1);
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
            onClick={prevSlide}
            className="p-4 rounded-full border border-zinc-700 hover:bg-white hover:text-black text-white transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll left"
            disabled={isMoving}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full border border-zinc-700 hover:bg-white hover:text-black text-white transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll right"
            disabled={isMoving}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-[#1F2123] via-[#1F2123]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-[#1F2123] via-[#1F2123]/80 to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-8 px-8 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayItems.map((location, idx) => (
            <div
              key={`${location.id}-${idx}`}
              className="shrink-0 p-6 rounded-3xl transition-all duration-500 group"
              style={{ width: `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * 32) / itemsPerPage}px)` }}
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
    </section>
  );
};

export default WorldMap;
