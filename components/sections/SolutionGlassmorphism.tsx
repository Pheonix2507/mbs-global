import React from "react";
import Image from "next/image";

interface Props {
  data?: {
    title: string;
    sub_title?: string;
    description?: string;
  };
}

const SolutionGlassmorphism = ({ data }: Props) => {
  if (!data) return null;

  const title = data.title;
  const description = data.sub_title || data.description;

  if (!title && !description) return null;

  return (
    <section className="relative w-full py-12 overflow-hidden bg-background">
      {/* Background SVG Smudge on the right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-60 dark:opacity-40 animate-pulse pointer-events-none">
        <Image
          src="/smudge.svg"
          alt="Background decoration"
          width={800}
          height={800}
          className="object-contain translate-x-1/4"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-[4px] overflow-hidden shadow-2xl">
          {/* Glassmorphism Card */}
          <div className="p-10 md:p-14 border border-zinc-200 dark:border-zinc-800 rounded-3xl backdrop-blur-xl">
            <h2 className="font-zalando text-left md:text-center text-[#D699FF] dark:text-[#D699FF] font-normal md:font-semibold text-[39px] md:text-[49px] leading-[1.2] tracking-normal mb-6">
              {title}
            </h2>
            <p className="font-sans text-lg text-left md:text-center text-black dark:text-white leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionGlassmorphism;
