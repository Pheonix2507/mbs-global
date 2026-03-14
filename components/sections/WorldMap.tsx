"use client";

import Image from "next/image";
import { useState } from "react";

interface Location {
  id: string;
  country: string;
  flag: string;
  address: string;
  // position as percentage of container
  left: string;
  top: string;
}

const locations: Location[] = [
  {
    id: "india",
    country: "India",
    flag: "🇮🇳",
    address: "B/1205 Empire Business Hub,\nScience City Road, Sola,\nAhmedabad GJ 380060",
    left: "71%",
    top: "44%",
  },
  {
    id: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    address: "123 Business Lane,\nLondon, EC1A 1BB,\nUnited Kingdom",
    left: "44%",
    top: "20%",
  },
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    address: "456 Commerce Ave,\nToronto, ON M5V 2H1,\nCanada",
    left: "10%",
    top: "10%",
  },
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    address: "789 Innovation Blvd,\nNew York, NY 10001,\nUSA",
    left: "17%",
    top: "35%",
  },
];

const Pin = ({ location }: { location: Location }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute z-10 flex flex-col items-center cursor-pointer"
      style={{ left: location.left, top: location.top, transform: "translate(-50%, -100%)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip below pin */}
      <div
        className={`
          absolute top-full mt-2 left-1/2 -translate-x-1/2
          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700
          rounded-xl shadow-xl px-4 py-3 z-20
          transition-all duration-200 pointer-events-none
          ${hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
        style={{ minWidth: "190px", whiteSpace: "nowrap" }}
      >
        {/* Tooltip arrow pointing up */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0 h-0 border-l-[7px] border-r-[7px] border-b-[7px] border-l-transparent border-r-transparent border-b-white dark:border-b-zinc-900" />
        <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
          {location.flag} {location.country}
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed whitespace-pre-line">
          {location.address}
        </p>
      </div>

      {/* Classic teardrop map pin using SVG */}
      <svg
        width="40"
        height="52"
        viewBox="0 0 52 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "transform 0.2s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          filter: hovered
            ? "drop-shadow(0 6px 16px rgba(0,0,0,0.22))"
            : "drop-shadow(0 3px 8px rgba(0,0,0,0.15))",
        }}
      >
        {/* Pin body — teardrop shape */}
        <path
          d="M26 1C12.2 1 1 12.2 1 26C1 41.5 26 67 26 67C26 67 51 41.5 51 26C51 12.2 39.8 1 26 1Z"
          fill="#cdd8df"
          stroke="#b8c6cf"
          strokeWidth="1"
        />
        {/* Inner circle highlight */}
        <circle cx="26" cy="24" r="17" fill="rgba(255,255,255,0.35)" />

        {/* Flag emoji via foreignObject */}
        <foreignObject x="7" y="5" width="38" height="38">
          <div
            style={{
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              overflow: "hidden",
              fontSize: "24px",
              lineHeight: 1,
            }}
          >
            {location.flag}
          </div>
        </foreignObject>
      </svg>

      {/* White oval beneath pin tip */}
      <div
        style={{
          width: "16px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.75)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
          marginTop: "-2px",
          transition: "all 0.2s",
          transform: hovered ? "scaleX(1.2)" : "scaleX(1)",
        }}
      />
    </div>
  );
};


const WorldMap = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Map container */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "2/1" }}
        >
          {/* World map image */}
          <Image
            src="/world-map.png"
            alt="World map showing MBS Global office locations"
            fill
            className="object-fit"
            priority
          />

          {/* Location pins */}
          {locations.map((loc) => (
            <Pin key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
