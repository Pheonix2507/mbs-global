"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceData {
  id: number;
  title: string;
  sub_title: string; // Strapi uses sub_title in co_person
}

interface ServicesProps {
  data?: ServiceData[];
}

const defaultServices: any[] = [];

const Services = ({ data }: ServicesProps) => {
  const services = data;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!services || services.length === 0) return null;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth;
      const gap = 32;
      const index = Math.round(scrollPosition / (itemWidth + gap));

      if (index !== activeIndex && index >= 0 && index < services.length) {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    const scrollNode = scrollRef.current;
    if (scrollNode) {
      scrollNode.addEventListener("scroll", handleScroll);
      return () => scrollNode.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex, services.length]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth + 32;

      if (direction === "right" && activeIndex === services.length - 1) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === "left" && activeIndex === 0) {
        scrollRef.current.scrollTo({
          left: (services.length - 1) * scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="services"
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/mechanism.jpg"
          alt="Services Background"
          fill
          className="object-cover"
        />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5"></div>
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/5"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto p-5 mt-50">
        {/* Rotating Index */}
        <div className="absolute top-10 right-10 flex h-16 flex-col items-end overflow-hidden">
          <div
            className="flex flex-col items-end transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${activeIndex * 4}rem)` }}
          >
            {services.map((_, i) => (
              <span
                key={i}
                className="flex h-16 items-center font-zalando text-6xl font-black text-purple-600/10 leading-none"
              >
                0{i + 1}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full min-w-full snap-center rounded-3xl border border-white/20 bg-white/20 backdrop-blur-xs p-12 shadow-2xl"
            >
              <h3 className="mb-6 font-zalando text-5xl font-semibold">
                {service.title.startsWith("Co-") ? (
                  <>
                    Co-<span className="text-purple-600">{service.title.replace("Co-", "")}</span>:
                  </>
                ) : (
                  <>
                    Co-<span className="text-purple-600">{service.title}</span>:
                  </>
                )}
              </h3>
              <p className="font-zalando font-normal text-2xl text-white">
                {service.sub_title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800"
            aria-label="Next service"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
