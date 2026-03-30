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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const offerings = data || [];
  const totalItems = offerings.length;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!offerings || offerings.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalItems ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalItems - 1 : prev - 1));
  };

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
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {offerings.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-4"
                style={{ width: `${100 / itemsPerPage}%`, height: "100%" }}
              >
                <div className="group relative flex flex-col space-y-4 dark:bg-[#1F1F1F] bg-[#F7F9FB] p-3">
                  <div className="relative aspect-3/3 overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={getStrapiMedia(item.image) || ""}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-zalando text-2xl md:text-3xl font-normal text-white md:text-zinc-900 md:dark:text-white">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base md:text-lg text-[#E0E0E0] md:text-zinc-600 md:dark:text-zinc-400 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center md:justify-between">
          <div className="hidden md:flex gap-2">
            {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * itemsPerPage)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === i
                      ? "w-8 bg-zinc-900 dark:bg-white"
                      : "w-2 bg-zinc-200 dark:bg-zinc-800"
                  }`}
                />
              ),
            )}
          </div>
          <div className="flex gap-4 md:gap-4 w-full justify-end md:w-auto">
            <button
              onClick={prevSlide}
              className="group flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-white md:border-zinc-200 bg-transparent md:bg-white transition-all hover:bg-white/10 md:hover:bg-zinc-900 text-white md:text-zinc-900 md:hover:text-white dark:md:border-zinc-800 dark:md:bg-zinc-900 dark:md:text-white dark:md:hover:bg-white dark:md:hover:text-zinc-900"
              aria-label=""
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex h-[64px] w-[64px] items-center justify-center rounded-full border-2 border-white md:border-zinc-200 bg-transparent md:bg-white transition-all hover:bg-white/10 md:hover:bg-zinc-900 text-white md:text-zinc-900 md:hover:text-white dark:md:border-zinc-800 dark:md:bg-zinc-900 dark:md:text-white dark:md:hover:bg-white dark:md:hover:text-zinc-900"
              aria-label=""
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
