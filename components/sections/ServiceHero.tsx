import React from "react";
import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Overlay for text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-zalando font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-200 font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
