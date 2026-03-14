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
        <div>
          {/* Glassmorphism Card */}
          <div className="p-10 md:p-14">
            <h2 className="font-zalando text-[#D699FF] font-normal text-4xl md:text-5xl tracking-tight mb-6">
              {content.title}
            </h2>
            <p className="font-sans text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionGlassmorphism;
