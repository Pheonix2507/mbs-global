import Image from "next/image";

import { getStrapiMedia } from "@/lib/strapi";
import Link from "next/link";

interface CompetencyData {
  id: number;
  title: string;
  title_subtile: Array<{
    id: number;
    title: string;
    sub_title: string;
  }>;
  side_image: any;
  button: Array<{
    id: number;
    text: string;
  }>;
}

interface CompetenciesProps {
  data?: CompetencyData;
}

const Competencies = ({ data }: CompetenciesProps) => {
  const title = data?.title;
  const items = data?.title_subtile || [];
  const sideImage = getStrapiMedia(data?.side_image);
  const buttonText = data?.button?.[0]?.text;

  if (!data) return null;

  return (
    <section
      id="competencies"
      className="relative flex flex-col h-[90vh] items-center justify-center overflow-hidden bg-[#EEF1F4] dark:bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-fit">
        <div className="relative w-full h-[400px] md:h-full bg-[#EEF1F4] dark:bg-black flex items-center justify-center overflow-hidden">
          {/* Radial Blur Effect */}
          {/* <div className="absolute inset-0 z-0 bg-radial-[at_center] from-white via-[#AF33FF] to-transparent blur-[2px]"></div> */}

          <div className="relative z-10 w-full h-full">
            <Image src={sideImage} alt="" fill className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col bg-[#1F2123] dark:bg-white w-full p-6 sm:p-12 lg:p-12">
          <div className="font-zalando font-normal text-[#D699FF] text-3xl md:text-5xl mb-6 lg:text-6xl">
            {title}
          </div>
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-white dark:text-[#1F2123] py-3"
              >
                <span className="font-zalando font-medium text-xl md:text-2xl">
                  {item.title}
                </span>
                <div className="font-sans font-normal text-zinc-400 dark:text-zinc-600 text-base md:text-xl pt-2">
                  {item.sub_title}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="z-10 max-w-fit mt-3 md:mt-12 border text-white hover:text-black dark:text-black border-white dark:border-[#1F1F1F] hover:border-white hover:bg-white dark:hover:bg-black dark:hover:text-white rounded-sm py-3 px-6"
          >
            <span className="font-zalando font-normal text-sm md:text-base">
              {buttonText}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
