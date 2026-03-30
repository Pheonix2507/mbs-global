"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ServiceSemicircleLoaderProps {
  title?: string;
  description?: string;
  image?: string | null;
  className?: string;
}

const ServiceSemicircleLoader = ({
  title,
  description,
  image,
  className,
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
      className={`py-24 relative overflow-hidden ${className || "bg-white dark:bg-black"}`}
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Container */}
        <div className="flex flex-col items-center max-w-4xl w-full">
          {title && (
            <h3 className="text-3xl md:text-4xl font-zalando text-zinc-900 dark:text-zinc-100 mb-16 font-medium text-center max-w-2xl leading-tight">
              {title}
            </h3>
          )}

          {/* Semicircle SVG */}
          <div className="relative w-full max-w-[500px] aspect-2/1 mb-12 flex flex-col justify-end">
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
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="60%" stopColor="#AF33FF" />
                  <stop offset="100%" stopColor="#AF33FF" />
                </linearGradient>
              </defs>

              {/* Background Track */}
              <path
                d="M 10 97 A 90 90 0 0 1 190 97"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-10 text-zinc-400 dark:text-zinc-600"
              />

              {/* Foreground Track (Animated) */}
              <path
                d="M 10 97 A 90 90 0 0 1 190 97"
                fill="none"
                stroke="url(#loader-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>

            {/* Center content: image or percentage text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform w-full flex justify-center items-center">
              {image ? (
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src={image}
                    alt="Result center"
                    fill
                    className="object-contain brightness-0 dark:brightness-100 dark:bg-black"
                  />
                </div>
              ) : (
                <div className="text-5xl md:text-7xl font-light text-zinc-900 dark:text-zinc-100 tracking-wider flex items-center">
                  {Math.round(progress)}
                  <span className="text-3xl md:text-4xl ml-1">%</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 w-full max-w-4xl mx-auto relative group">
            {/* Dark mode gradient border wrapper */}
            <div className="absolute inset-0 rounded-2xl p-1 bg-linear-to-r from-white to-[#AF33FF] opacity-0 dark:opacity-100">
              <div
                className="w-full h-full rounded-[15px] bg-[#000000]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(175, 51, 255, 0.03) 0%, rgba(214, 153, 255, 0.03) 100%), #000000",
                }}
              />
            </div>

            {/* The actual content box */}
            <div className="relative text-center w-full p-6 md:p-10 rounded-2xl bg-linear-to-r from-white to-purple-50/50 dark:bg-none dark:bg-transparent border border-purple-200 dark:border-transparent drop-shadow-sm dark:drop-shadow-none z-10">
              <p className="text-zinc-800 dark:text-zinc-300 font-sans text-[20px] md:text-xl leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSemicircleLoader;
