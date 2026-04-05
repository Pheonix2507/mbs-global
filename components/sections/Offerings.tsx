"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getStrapiMedia } from "@/lib/strapi";

interface OfferingData {
  id: number;
  title: string;
  subtitle: string;
  image: any;
}

interface OfferingsProps {
  data?: OfferingData[];
}

const Offerings = ({ data }: OfferingsProps) => {
  const offerings = data || [];
  const totalItems = offerings.length;
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Buffers for infinite scroll
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize index to itemsPerPage for buffer
  useEffect(() => {
    if (totalItems > 0) {
      setCurrentIndex(itemsPerPage);
    }
  }, [itemsPerPage, totalItems]);

  if (!offerings || offerings.length === 0) return null;

  // Duplicate items for seamless loop
  const displayItems = [
    ...offerings.slice(-itemsPerPage),
    ...offerings,
    ...offerings.slice(0, itemsPerPage),
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

  useEffect(() => {
    if (!isTransitioning) {
      // Small delay to allow the jump to happen without animation
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

  const DURATION = 3000;

  useEffect(() => {
    if (offerings.length <= itemsPerPage) return;
    const timer = setInterval(() => {
      nextSlide();
    }, DURATION);
    return () => clearInterval(timer);
  }, [currentIndex, itemsPerPage, offerings.length, isTransitioning, isMoving]);

  // Logical index for dot indicators
  const logicalIndex =
    (((currentIndex - itemsPerPage) % totalItems) + totalItems) % totalItems;

  return (
    <section
      id="offerings"
      className="relative bg-[#1F1F1F] md:bg-white py-[10px] md:py-24 md:dark:bg-black overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 md:mb-16">
          <h2 className="font-zalando text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#D699FF] max-w-[300px] md:max-w-none">
            Core Offerings
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 px-4 flex"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="group relative flex flex-col w-full h-full space-y-4 dark:bg-[#1F1F1F] bg-[#F7F9FB] p-4 md:p-6 pb-10">
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={getStrapiMedia(item.image) || ""}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-col flex-1 space-y-4">
                    <h3 className="font-zalando text-2xl md:text-3xl font-normal text-zinc-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-end justify-end md:justify-end">
          <div className="flex gap-4 md:gap-4 w-full justify-end md:w-auto">
            <button
              onClick={prevSlide}
              className="group flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-white md:border-zinc-200 bg-transparent md:bg-white transition-all hover:bg-white/10 md:hover:bg-zinc-900 text-white md:text-zinc-900 md:hover:text-white dark:md:border-zinc-800 dark:md:bg-zinc-900 dark:md:text-white dark:md:hover:bg-white dark:md:hover:text-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label=""
              disabled={isMoving}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-white md:border-zinc-200 bg-transparent md:bg-white transition-all hover:bg-white/10 md:hover:bg-zinc-900 text-white md:text-zinc-900 md:hover:text-white dark:md:border-zinc-800 dark:md:bg-zinc-900 dark:md:text-white dark:md:hover:bg-white dark:md:hover:text-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label=""
              disabled={isMoving}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
