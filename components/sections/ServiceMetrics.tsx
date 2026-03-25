"use client";

import React, { useEffect, useRef, useState } from "react";

interface Metric {
  score: string;
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
              {/* Circular Glass Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center mb-6 px-4 bg-white dark:bg-black/20 backdrop-blur-xl border border-purple-200 dark:border-white/10 shadow-[0_8px_32px_0_rgba(175,51,255,0.08)] dark:shadow-[0_8px_32px_0_rgba(175,51,255,0.05)] transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(175,51,255,0.2)] hover:border-purple-300 dark:hover:bg-white/5">
                {/* SVG for Animated Stroke */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90 overflow-visible"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient
                      id={`metric-gradient-${idx}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#A3A3A3" />
                      <stop offset="100%" stopColor="#4B0082" />
                    </linearGradient>
                  </defs>

                  {/* Foreground Animated Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r={48}
                    fill="none"
                    stroke={`url(#metric-gradient-${idx})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 48}
                    strokeDashoffset={isVisible ? 0 : 2 * Math.PI * 48}
                    className="transition-all duration-2000 ease-out"
                    style={{ transitionDelay: `${idx * 150 + 300}ms` }}
                  />
                </svg>

                <span className="text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-zinc-900 dark:text-zinc-100 relative z-10 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  {metric.score}
                </span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-sans max-w-[200px]">
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
