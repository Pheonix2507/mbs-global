import Image from "next/image";

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
    icons: ValueData["icons"]; // Corrected to reference the inner icons array type
  };
}

const Values = ({ data }: ValuesProps) => {
  const values = data?.icons || [];
  const title = data?.title || "";

  if (!data || values.length === 0) return null;

  return (
    <section
      id="values"
      className="relative flex flex-col min-h-fit items-center justify-center overflow-hidden px-6 py-[60px] md:py-24 bg-[#1F1F1F] md:bg-white dark:bg-[#1F2123]"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal font-zalando text-[#D699FF] md:text-[#D699FF] text-left md:text-center leading-[120%] letter-spacing-0">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto gap-12 md:gap-[60px]">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-6"
          >
            <div className="relative w-40 h-40 md:w-56 lg:w-64 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={getStrapiMedia(value.icon)}
                alt=""
                width={86}
                height={86}
                className="object-contain"
              />
            </div>
            <p className="text-base md:text-lg max-w-[345px] leading-tight text-white md:text-[#1F2123] dark:text-white font-zalando font-medium">
              {value.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
