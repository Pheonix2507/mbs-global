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
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mb-6 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/ellipse.svg"
                  alt="Metric Background"
                  fill
                  className="object-contain"
                />
              {/* Circular Container with Ellipse SVG */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mb-6 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/ellipse.svg"
                  alt="Metric Background"
                  fill
                  className="object-contain"
                />

                <span className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-zinc-900 dark:text-white relative z-10 flex flex-col items-center text-center px-6 leading-tight max-w-full wrap-break-word">
                  {metric.score}
                  <span className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 font-sans max-w-[220px] mx-auto leading-relaxed">
                    {metric.text}
                  </span>
                </span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 font-sans max-w-[220px] mx-auto leading-relaxed">
                {metric.description}
              </p>
            </div>
        </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default ServiceMetrics;
