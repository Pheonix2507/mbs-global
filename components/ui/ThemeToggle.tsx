"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-[#E9EAF0] dark:bg-[#24272C] animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-14 h-8 rounded-full p-1 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 ${isDark ? "bg-[#24272C]" : "bg-[#E9EAF0]"
        }`}
      aria-label="Toggle theme"
    >
      <div
        className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-500 shadow-sm ${isDark
            ? "translate-x-6 bg-[#E9EAF0]"
            : "translate-x-0 bg-[#24272C]"
          }`}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/light.svg"
            alt="Light mode"
            width={15}
            height={15}
            priority
          />
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/dark.svg"
            alt="Dark mode"
            width={15}
            height={15}
            priority
          />
        </div>
      </div>
    </button>
  );
}
