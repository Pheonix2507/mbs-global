import Image from "next/image";

import { getStrapiMedia } from "@/lib/strapi";

interface SolutionsSplitProps {
  data?: {
    title: string;
    subtitle: string;
    image: any;
    button?: { id: number; text: string };
  };
}

const SolutionsSplit = ({ data }: SolutionsSplitProps) => {
  const title = data?.title || "";
  const subtitle = data?.subtitle || "";
  const image = getStrapiMedia(data?.image) || "";
  const buttonText =
    (Array.isArray(data?.button)
      ? data?.button[0]?.text
      : data?.button?.text) || "";

  return (
    <section className="bg-zinc-50 dark:bg-[#1F2123] py-6 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-1 relative h-[320px] md:h-[600px] w-full max-w-[360px] md:max-w-none mx-auto rounded-[4px] overflow-hidden shadow-2xl group mb-8 md:mb-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>
          <div className="order-2 space-y-6 md:space-y-8">
            <h2 className="font-zalando text-3xl md:text-6xl font-semibold tracking-tight text-left md:text-left text-[#D699FF] dark:text-[#D699FF] leading-[120%]">
              {title}
            </h2>
            <p className="font-sans text-base md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {subtitle}
            </p>
            {buttonText && (
              <div className="pt-4">
                <div className="inline-block border border-zinc-900 dark:border-white/40 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-sm py-3 px-8 md:py-4 md:px-10 cursor-pointer group">
                  <span className="font-zalando font-normal text-base md:text-lg tracking-wide uppercase">
                    {buttonText}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSplit;
