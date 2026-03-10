"use client";

import React, { useState, useEffect, useRef } from "react";

interface ServiceSemicircleLoaderProps {
  title?: string;
  description: string;
}

const ServiceSemicircleLoader = ({
  title = "Performance",
  description,
}: ServiceSemicircleLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
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

  useEffect(() => {
    if (isVisible) {
      let animationFrameId: number;
      let start: number | null = null;
      const duration = 4000;

      const animate = (time: number) => {
        if (!start) start = time;
        const elapsed = time - start;
        const currentProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(currentProgress);

        if (currentProgress < 100) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isVisible]);

  const radius = 90;
  // Circumference of half circle is PI * radius
  const pathLength = 282.743; // Math.PI * 90
  const strokeDashoffset = pathLength - (progress / 100) * pathLength;

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Container */}
        <div className="flex flex-col items-center max-w-2xl w-full">
          <h3 className="text-2xl md:text-3xl font-zalando text-zinc-900 dark:text-zinc-100 mb-16 font-medium text-center max-w-md">
            {title}
          </h3>

          {/* Semicircle SVG */}
          <div className="relative w-full max-w-[400px] aspect-2/1 mb-12 flex flex-col justify-end">
            <svg
              viewBox="0 0 200 100"
              className="w-full h-full overflow-visible absolute bottom-0 left-0"
            >
              <defs>
                <linearGradient
                  id="loader-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#A3A3A3" />
                  <stop offset="100%" stopColor="#4B0082" />
                </linearGradient>
              </defs>

              {/* Foreground Track (Animated) */}
              <path
                d="M 10 97 A 90 90 0 0 1 190 97"
                fill="none"
                stroke="url(#loader-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
                className="transition-all ease-out duration-75"
              />
            </svg>

            {/* Center percentage text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform text-5xl md:text-6xl font-light text-zinc-900 dark:text-zinc-100 tracking-wider flex items-center">
              {Math.round(progress)}
              <span className="text-3xl md:text-4xl">%</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-600 dark:text-zinc-400 font-sans text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSemicircleLoader;
