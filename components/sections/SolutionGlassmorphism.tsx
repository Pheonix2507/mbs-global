import React from "react";
import Image from "next/image";

interface Props {
  slug: string;
  data?: {
    title: string;
    description?: string;
  };
}

const getGlassmorphismContent = (slug: string) => {
  switch (slug) {
    case "workspace-solution":
      return {
        title: "Workspace Solutions",
        description:
          "Innovative environments designed for optimal team performance and seamless global connectivity.",
      };
    case "operative-managements":
      return {
        title: "Operative Management",
        description:
          "Streamlined operational workflows engineered to maximize efficiency across your entire enterprise.",
      };
    case "total-talent-solutions":
      return {
        title: "Total Talent Solutions",
        description:
          "End-to-end workforce strategies that integrate recruitment, retention, and development to build world-class engineering teams.",
      };
    case "strategic-consulting":
      return {
        title: "Strategic Consulting",
        description:
          "Expert guidance to help you navigate complex business transformations and achieve sustainable growth.",
      };
    case "innovation":
      return {
        title: "Innovation Hub",
        description:
          "Pioneering technological advancements that establish your brand as an industry leader.",
      };
    default:
      return {
        title: "Solutions",
        description: "Tailored services to accelerate your business goals.",
      };
  }
};

const SolutionGlassmorphism = ({ slug, data }: Props) => {
  const content = data ? { 
    title: data.title, 
    description: data.description || getGlassmorphismContent(slug).description 
  } : getGlassmorphismContent(slug);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-background">
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
          <div className="p-8 md:p-14 text-left">
            <h2 className="font-zalando text-[#D699FF] font-normal text-[39px] md:text-5xl tracking-tight mb-6">
              {content.title}
            </h2>
            <p className="font-sans text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionGlassmorphism;
