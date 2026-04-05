import Image from "next/image";
import type { ReactNode } from "react";

import { getStrapiMedia } from "@/lib/strapi";

interface ValueData {
  id: number;
  description: string;
  icons: {
    id: number;
    icon: any;
    text: string;
  }[];
}

interface ValuesProps {
  data?: {
    title?: string;
    icons: ValueData["icons"];
  };
}

const Values = ({ data }: ValuesProps) => {
  const values = data?.icons || [];
  const title = data?.title || "Core Values";

  if (!data || values.length === 0) return null;

  return (
    <section
      id="values"
      className="relative flex min-h-fit flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 dark:bg-[#1F1F1F] md:px-6 md:py-24"
    >
      <div className="relative z-10 mx-auto mb-12 w-full max-w-7xl md:mb-16">
        <h2 className="text-center font-zalando text-3xl font-medium tracking-tight text-[#D699FF] md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
        {values.map((value, index) => (
          <div
            key={value.id ?? index}
            className="flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-800 rounded-sm"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-sm">
              <Image
                src={getStrapiMedia(value.icon)}
                alt={value.text}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-zalando p-5 mb-3 text-lg font-medium leading-tight text-zinc-900 dark:text-white md:text-xl">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
