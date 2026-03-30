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
  data?: any;
}

const AboutValues = ({ data: strapiFeaturesRaw }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  // const DURATION = 6000; // 6 seconds per slide

  // useEffect(() => {
  //   if (data.length <= 1) return;

  //   const timer = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % data.length);
  //   }, DURATION);

  //   return () => clearInterval(timer);
  // }, [data.length]);

  if (data.length === 0) return null;

  return (
    <div className="mb-16 md:mb-48">
      {/* Heading */}
      <div className="text-left md:text-center mb-8 md:mb-20">
        <h3 className="font-zalando font-semibold text-3xl md:text-5xl mb-4 text-zinc-900 dark:text-white leading-[120%] tracking-tight">
          {strapiFeaturesRaw?.title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Media Block (Mobile: Top, Desktop: Left) */}
        <div className="relative aspect-square md:aspect-4/3 lg:aspect-656/601 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
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
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </div>

        {/* Content Block (Mobile: Bottom, Desktop: Right) */}
        <div className="flex flex-col gap-8 md:gap-10 py-2">
          {data.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                className="flex flex-col gap-2 cursor-pointer transition-all duration-300"
                onClick={() => setActiveIndex(idx)}
              >
                <div className="space-y-2">
                  <h4
                    className={`font-zalando text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-500 text-black dark:text-white`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`font-sans text-sm md:text-lg leading-relaxed transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "max-h-40 opacity-100 text-zinc-700 dark:text-white"
                        : "max-h-20 opacity-60 text-zinc-500 dark:text-zinc-400 md:max-h-40 md:opacity-100 md:text-zinc-600 dark:md:text-white/80"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
