"use client";

import { useEffect, useRef, useState } from "react";

export default function TimelineStem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePiece, setActivePiece] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Compute how far the container has advanced past the vertical center of the viewport
      const distanceFromCenter = (windowHeight / 2) - rect.top;
      
      // Number between 0 and 1 indicating percentage completion 
      let rawProgress = distanceFromCenter / rect.height;
      rawProgress = Math.max(0, Math.min(1, rawProgress));
      
      // Divide the progress equally into 3 segments
      if (rawProgress < 0.33) {
        setActivePiece(0);
      } else if (rawProgress < 0.66) {
        setActivePiece(1);
      } else {
        setActivePiece(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    // Trigger instantly on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-around py-10 z-0"
    >
      <div
        className={`w-[10px] h-[270px] transition-colors duration-700 ease-in-out ${
          activePiece === 0 ? "bg-gradient-to-b from-[#C873FF] to-black" : "bg-black"
        }`}
      />
      <div
        className={`w-[10px] h-[270px] transition-colors duration-700 ease-in-out ${
          activePiece === 1 ? "bg-gradient-to-b from-[#C873FF] to-black" : "bg-black"
        }`}
      />
      <div
        className={`w-[10px] h-[270px] transition-colors duration-700 ease-in-out ${
          activePiece === 2 ? "bg-gradient-to-b from-[#C873FF] to-black" : "bg-black"
        }`}
      />
    </div>
  );
}
