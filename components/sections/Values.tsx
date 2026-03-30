import Image from "next/image";
import type { ReactNode } from "react";

import { getStrapiMedia } from "@/lib/strapi";

const LEAF_PATH =
  "M100 0.5H194.5V95C194.5 149.952 149.952 194.5 95 194.5H0.5V100C0.5 45.0477 45.0477 0.500004 100 0.5Z";

/** Same path as public/leaf.svg; rotation by column so left leaves match (TL/BL) and right leaves match (TR/BR). */
function leafRotationDeg(index: number): number {
  return index % 2 === 0 ? 90 : 0;
}

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

function LeafFrame({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const deg = leafRotationDeg(index);
  return (
    <div className="relative aspect-square w-[min(100%,6.5rem)] shrink-0 sm:w-28 md:w-36">
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 195 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g transform={`rotate(${deg} 97.5 97.5)`}>
          <path
            d={LEAF_PATH}
            fill="#1F1F1F"
            stroke="white"
            strokeWidth={1}
          />
        </g>
      </svg>
      <div className="relative z-10 flex size-full items-center justify-center p-[18%]">
        {children}
      </div>
    </div>
  );
}

const Values = ({ data }: ValuesProps) => {
  const values = data?.icons || [];
  const title = data?.title || "";

  if (!data || values.length === 0) return null;

  return (
    <section
      id="values"
      className="relative flex min-h-fit flex-col items-center justify-center overflow-hidden bg-[#1F1F1F] px-4 py-14 md:px-6 md:py-24"
    >
      <div className="relative z-10 mx-auto mb-12 w-full max-w-4xl md:mb-16">
        <h2 className="text-left font-zalando text-3xl font-normal leading-[120%] tracking-normal text-[#D699FF] md:text-center md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8 md:max-w-4xl md:gap-x-10 md:gap-y-12">
        {values.map((value, index) => {
          const col = index % 2;
          const isLeftColumn = col === 0;

          return (
            <div
              key={value.id ?? index}
              className={`flex items-center gap-3 sm:gap-5 md:gap-8 ${
                isLeftColumn
                  ? "flex-row justify-end text-right"
                  : "flex-row justify-start text-left"
              }`}
            >
              {isLeftColumn ? (
                <>
                  <p className="max-w-44 font-zalando text-sm font-medium leading-tight text-white sm:max-w-52 sm:text-base md:text-lg">
                    {value.text}
                  </p>
                  <LeafFrame index={index}>
                    <Image
                      src={getStrapiMedia(value.icon)}
                      alt=""
                      width={86}
                      height={86}
                      className="h-full w-full object-contain"
                    />
                  </LeafFrame>
                </>
              ) : (
                <>
                  <LeafFrame index={index}>
                    <Image
                      src={getStrapiMedia(value.icon)}
                      alt=""
                      width={86}
                      height={86}
                      className="h-full w-full object-contain"
                    />
                  </LeafFrame>
                  <p className="max-w-44 font-zalando text-sm font-medium leading-tight text-white sm:max-w-52 sm:text-base md:text-lg">
                    {value.text}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
