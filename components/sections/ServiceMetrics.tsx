"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Metric {
  score: string;
  text: string;
  description: string;
}

interface ServiceMetricsProps {
  metrics: Metric[];
}

const ServiceMetrics = ({ metrics }: ServiceMetricsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#FAFAFA] dark:bg-[#111111]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Circular Container with Ellipse SVG */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mb-8 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/ellipse.svg"
                  alt="Metric Background"
                  fill
                  className="object-contain"
                />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                  <span className="text-4xl md:text-5xl font-zalando font-normal text-zinc-900 dark:text-white leading-none mb-2">
                    {metric.score}
                  </span>
                  <span className="text-base text-black md:text-lg font-sans font-medium dark:text-zinc-100">
                    {metric.text}
                  </span>
                </div>
              </div>

              {/* Description outside the SVG */}
              <p className="font-sans text-black font-normal text-lg md:text-[25px] leading-[1.2] tracking-normal text-center max-w-[300px] mx-auto dark:text-white">
                {metric.description}
              </p>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default ServiceMetrics;
