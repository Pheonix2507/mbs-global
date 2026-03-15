"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_DATA = [
  {
    title: "Global Market Entry",
    description:
      "Navigate new markets with confidence. Our strategic consulting framework provides deep market analysis, regulatory guidance, and localized launch strategies to ensure your expansion succeeds.",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your legacy systems. We architect scalable solutions that transition your business processes into agile, cloud-native operations with zero downtime.",
  },
  {
    title: "Operational Excellence",
    description:
      "Streamline your workflows. By identifying bottlenecks and implementing automation, we help you achieve higher throughput and significantly reduced overhead costs.",
  },
];

interface SolutionCarouselProps {
  data?: any;
  title?: string;
  description?: string;
}

const SolutionCarousel = ({
  data,
  title: propTitle,
  description: propDescription,
}: SolutionCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract dynamic data from Strapi swipe component or direct array (e.g. Guides)
  const strapiItems =
    data?.title_subtile?.swipe_element ||
    data?.swipe_element ||
    (Array.isArray(data) ? data : null);

  // Extract header info
  const headerTitle = propTitle || data?.title || "Strategic Initiatives";
  const headerDescription =
    propDescription ||
    data?.sub_title ||
    data?.subtitle ||
    data?.description ||
    "Explore our curated approaches to solving your most complex business challenges.";

  const displayData =
    Array.isArray(strapiItems) && strapiItems.length > 0
      ? strapiItems.map((item: any) => ({
          title: item.title,
          description: item.subtitle || item.sub_title || item.description,
        }))
      : CAROUSEL_DATA;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === displayData.length - 1 ? 0 : prev + 1));
  };

  if (!displayData || displayData.length === 0) return null;

  return (
    <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-zalando text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-6">
            {headerTitle}
          </h2>
          <p className="font-sans text-lg text-zinc-600 dark:text-zinc-400">
            {headerDescription}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 -ml-8 bg-white dark:bg-black rounded-full shadow-lg border border-zinc-100 dark:border-zinc-800 text-purple-600 hover:text-purple-400 hover:scale-110 transition-all focus:outline-none items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Card Content & Mobile Layout Wrapper */}
          <div className="w-full md:px-20">
            <div className="bg-white dark:bg-black rounded-[4px] px-4 py-8 sm:px-8 md:p-16 shadow-2xl border border-zinc-100 dark:border-zinc-800 text-left md:text-center transform transition-all duration-500 min-h-[300px] flex flex-col justify-center">
              <h3
                className="font-zalando text-[39px] md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-6 animate-in fade-in zoom-in duration-500 break-words leading-[110%]"
                key={`title-${currentIndex}`}
              >
                {displayData[currentIndex].title}
              </h3>
              <p
                className="font-sans text-base md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl md:mx-auto animate-in fade-in zoom-in duration-500 delay-100"
                key={`desc-${currentIndex}`}
              >
                {displayData[currentIndex].description}
              </p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {displayData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-purple-600 w-8"
                      : "bg-zinc-300 dark:bg-zinc-700 hover:bg-purple-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Navigation Arrows (Below card, aligned right) */}
            <div className="flex md:hidden justify-end gap-4 mt-8 mr-4">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center p-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600/10 transition-all focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center justify-center p-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600/10 transition-all focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 -mr-8 bg-white dark:bg-black rounded-full shadow-lg border border-zinc-100 dark:border-zinc-800 text-purple-600 hover:text-purple-400 hover:scale-110 transition-all focus:outline-none items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionCarousel;
