"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

interface FeaturePoint {
  title: string;
  description: string;
  image: string;
  media?: any;
}
interface Props {
  slug: string;
  data?: any;
}

const SolutionAnimatedFeatures = ({ slug, data: strapiFeaturesRaw }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const strapiFeatures = Array.isArray(strapiFeaturesRaw)
    ? strapiFeaturesRaw
    : (strapiFeaturesRaw as any)?.title_subtile_image ||
      (strapiFeaturesRaw as any)?.progress_item;

  const data: FeaturePoint[] = strapiFeatures
    ? strapiFeatures.map((item: any) => ({
        title: item.title,
        description: item.subtitle || item.sub_title,
        image: getStrapiMedia(item.image) || "",
        media: item.image,
      }))
    : [];

  const DURATION = 6000; // 6 seconds per slide

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      if (elapsed >= DURATION) {
        // Switch to next item
        setActiveIndex((prev) => (prev + 1) % data.length);
        setProgress(0);
        startTime = time; // Reset start time for the next cycle
      } else {
        setProgress((elapsed / DURATION) * 100);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [data.length]);

  return (
    <section className="py-16 md:py-24 bg-[#1F1F1F]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Dynamic Media */}
          <div className="relative aspect-square md:aspect-4/3 lg:aspect-square overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            {data.map((item, idx) => {
              const isVideo = Array.isArray(item.media)
                ? item.media[0]?.mime?.startsWith("video/")
                : item.media?.mime?.startsWith("video/");

              if (isVideo) {
                return (
                  <video
                    key={idx}
                    src={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                      activeIndex === idx ? "opacity-100" : "opacity-0"
                    }`}
                  />
                );
              }

              return (
                <Image
                  key={idx}
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    activeIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                />
              );
            })}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
          </div>

          {/* Right: Points with Loaders */}
          <div className="flex flex-col gap-10 md:gap-12">
            {data.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className="flex flex-col gap-4 cursor-pointer"
                  onClick={() => {
                    setActiveIndex(idx);
                    setProgress(0);
                  }}
                >
                  <div className="space-y-3">
                    <h3
                      className={`font-zalando text-2xl md:text-4xl font-semibold tracking-tight text-left text-white transition-colors duration-500 leading-[110%] ${
                        isActive ? "text-[#AF33FF]" : ""
                      }`}
                    >
                      {item.title}:
                    </h3>

                    {/* Description - always show or only active? Screenshot shows active one expanded */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-40 lg:opacity-100"}`}
                    >
                      <p className="font-sans text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar - Visible for active item on both desktop and mobile */}
                  <div
                    className={`relative w-full overflow-hidden transition-all duration-500 rounded-full ${isActive ? "h-[6px] mt-2 opacity-100" : "h-0 opacity-0 mt-0"}`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full" />
                    <div
                      className="absolute top-0 left-0 h-full bg-linear-to-r from-purple-600 to-[#AF33FF] rounded-full transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionAnimatedFeatures;
