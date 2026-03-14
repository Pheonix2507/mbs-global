"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const WhyTalentWins = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const points = [
    {
      title: "Talent Orchestration",
      description:
        "Scalable architectures built for 24/7 global availability and high-performance workflows.",
      image: "/talent-pyramid.jpg",
    },
    {
      title: "Digital Ops & Automation",
      description:
        "Streamlining repetitive operational tasks to enhance speed-to-value and reduce human error.",
      image: "/mechanism.jpg",
    },
    {
      title: "Cloud Operations",
      description:
        "Expert management of multi-cloud environments, ensuring cost-efficiency and robust disaster recovery.",
      image: "/hero.jpg",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-grade protection across your digital workspace, from endpoint security to data encryption.",
      image: "/join.jpg",
    },
  ];

  const DURATION = 5000; // 5 seconds per slide

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const currentProgress = Math.min((elapsed / DURATION) * 100, 100);

      setProgress(currentProgress);

      if (currentProgress >= 100) {
        setActiveIndex((prev) => (prev + 1) % points.length);
        setProgress(0);
        startTime = time; // Reset start time for next point
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [points.length]);

  return (
    <section className="bg-[#1F1F1F] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <h2 className="font-zalando text-[39px] md:text-[49px] font-semibold text-white text-center leading-[120%] mb-16 md:mb-20">
          Why Our Talent Wins
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Dynamic Image Container */}
          <div className="order-1 relative aspect-square w-full max-w-[520px] mx-auto lg:mx-0 rounded-[4px] overflow-hidden shadow-2xl bg-zinc-900">
            {points.map((point, idx) => (
              <Image
                key={idx}
                src={point.image}
                alt={point.title}
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  activeIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Dark overlay for depth */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Right: Content Text Box */}
          <div className="order-2 flex flex-col gap-[38px] max-w-[538px] mx-auto lg:mx-0 text-left">
            {points.map((point, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className="flex flex-col gap-4 cursor-pointer group"
                  onClick={() => {
                    setActiveIndex(index);
                    setProgress(0);
                  }}
                >
                  <div className="space-y-3">
                    <h3 className={`font-zalando text-2xl md:text-[32px] font-semibold tracking-tight transition-colors duration-500 ${isActive ? "text-[#AF33FF]" : "text-white"}`}>
                      {point.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-40 lg:opacity-100"}`}>
                      <p className="font-sans text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
                        {point.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Bar Container - Only visible for active item */}
                  <div className={`relative w-full overflow-hidden transition-all duration-500 ${isActive ? "h-[6px] mt-2 opacity-100" : "h-0 opacity-0 mt-0"}`}>
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-[#AF33FF] rounded-full" 
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

export default WhyTalentWins;
