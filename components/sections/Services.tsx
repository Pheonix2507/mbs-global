"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getStrapiMedia } from "@/lib/strapi";

interface ServiceData {
  id: number;
  title: string;
  sub_title: string;
  background_image?: any;
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
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="relative h-full w-full shrink-0">
              <Image
                src={getStrapiMedia(service.background_image) || ""}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0"></div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5"></div>
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/5"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto p-4 md:p-6 mt-20 md:mt-50">
        {/* Rotating Index */}
        <div className="absolute top-0 right-4 md:top-10 md:right-10 flex h-12 md:h-16 flex-col items-end overflow-hidden">
          <div
            className="flex flex-col items-end transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(-${activeIndex * (typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 4)}rem)`,
            }}
          >
            {services.map((_, i) => (
              <span
                key={i}
                className="flex h-12 md:h-16 items-center font-zalando text-4xl md:text-6xl font-black text-purple-600/10 leading-none"
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
              className="w-full min-w-full snap-center rounded-3xl border border-white/20 bg-white/20 backdrop-blur-xs p-8 md:p-12 shadow-2xl"
            >
              <h3 className="mb-6 font-zalando text-3xl md:text-5xl font-semibold text-white">
                {service.title.startsWith("Co-") ? (
                  <>
                    Co-
                    <span className="text-purple-600">
                      {service.title.replace("Co-", "")}
                    </span>
                    :
                  </>
                ) : (
                  <>
                    Co-<span className="text-purple-600">{service.title}</span>:
                  </>
                )}
              </h3>
              <p className="font-zalando font-normal text-lg md:text-2xl text-white">
                {service.sub_title} 
              </p>
            </div>
          ))}
        </div>

        {/* Arrows outside card — desktop only */}
        <div className="mt-8 hidden md:flex justify-end gap-[11.8px]">
          <button
            onClick={() => scroll("left")}
            className="flex h-[59px] w-[59px] items-center justify-center"
            aria-label=""
          >
            <div
              className="flex h-[44.25px] w-[44.25px] items-center justify-center rounded-full transition-all hover:scale-110"
              style={{
                borderWidth: "2.95px",
                borderStyle: "solid",
                borderColor: "#FFFFFF",
              }}
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </div>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-[59px] w-[59px] items-center justify-center"
            aria-label=""
          >
            <div
              className="relative flex h-[44.25px] w-[44.25px] items-center justify-center rounded-full transition-all hover:scale-110"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #AF33FF 100%)",
                padding: "2.95px",
              }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-black ">
                <ChevronRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
