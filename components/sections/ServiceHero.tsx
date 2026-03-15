import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

interface ServiceHeroProps {
  title: string;
  description: string;
  image?: string;
  media?: any;
}

const ServiceHero = ({ title, description, image, media }: ServiceHeroProps) => {
  const mediaUrl = getStrapiMedia(media) || image || "";
  const isVideo = Array.isArray(media)
    ? media[0]?.mime?.startsWith("video/")
    : media?.mime?.startsWith("video/");

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {isVideo ? (
          <video
            src={mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={mediaUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        )}
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
