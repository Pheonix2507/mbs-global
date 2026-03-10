import React from "react";

interface ServiceTaglineProps {
  tagline: string;
  description: string;
}

const ServiceTagline = ({ tagline, description }: ServiceTaglineProps) => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-zalando font-medium text-[#AF33FF] mb-8 leading-tight">
          "{tagline}"
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ServiceTagline;
