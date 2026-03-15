import Image from "next/image";

import { getStrapiMedia } from "@/lib/strapi";

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
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-[#1F2123]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 dark:bg-[#1F2123] w-full min-h-fit">
        <div className="relative w-full h-[400px] md:h-full bg-white dark:bg-[#1F2123] flex items-center justify-center overflow-hidden">
          {/* Radial Blur Effect */}
          {/* <div className="absolute inset-0 z-0 bg-radial-[at_center] from-white via-[#AF33FF] to-transparent blur-[2px]"></div> */}

          <div className="relative z-10 w-full h-full">
            <Image
              src={sideImage}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col bg-[#1F2123] dark:bg-white w-full p-12 sm:p-20">
          <div className="font-zalando font-normal text-[#D699FF] text-6xl mb-12">
            {title}
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-[#FFFFFF] dark:text-[#1F1F1F] text-2xl p-6"
            >
              <span className="font-zalando font-medium">{item.title}</span>
              <div className="font-sans font-normal text-[#FFFFFF] dark:text-[#1F1F1F] text-xl pt-3">
                {item.sub_title}
              </div>
            </div>
          ))}
          <div className="z-10 max-w-fit mt-12 border border-white dark:border-[#1F1F1F] rounded-sm py-3 px-6 ms-3">
            <span className="font-zalando font-normal text-white dark:text-[#1F1F1F]">
              {buttonText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
