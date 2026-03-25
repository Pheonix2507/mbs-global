import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

interface OutcomeItem {
  title: string;
  subtitle: string;
  image: any;
}

interface OutcomeItem {
  title: string;
  subtitle: string;
  image: any;
}

interface StrategicBusinessOutcomesProps {
  data: {
    title: string;
    card: OutcomeItem[];
  };
}

const StrategicBusinessOutcomes = ({
  data,
}: StrategicBusinessOutcomesProps) => {
  if (!data) return null;

  // Handle plural cards if it exists
  const cards =
    (data as any).card || (data as any).cards || (data as any).pillar_element;
  if (!cards || !Array.isArray(cards)) return null;

  return (
    <section className="py-24 bg-white dark:bg-[#1F2123] font-zalando text-zinc-900 dark:text-zinc-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-zalando font-medium mb-16 text-center">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
          {cards.map((item: any, index: number) => {
            const subtitle = item.subtitle || item.sub_title;
            const imageUrl =
              getStrapiMedia(item.image) || getStrapiMedia(item.icon);

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group bg-[#F7F9FB] dark:bg-[#1F1F1F]"
              >
                <div className="relative w-full aspect-4/3 mb-8 overflow-hidden">
                  <Image
                    src={imageUrl || "/placeholder.jpg"}
                    alt={item.title || ""}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-zalando font-semibold text-[#1F2123] dark:text-zinc-100 mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-sans text-lg leading-relaxed">
                  {subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategicBusinessOutcomes;
