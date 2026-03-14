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
  const title = data?.title || "Technical Competencies";
  const items = data?.title_subtile || [];
  const sideImage = getStrapiMedia(data?.side_image) || "/competencies.png";
  const buttonText = data?.button?.[0]?.text || "Explore More";

  if (!data) return null;

  return (
    <section
      id="competencies"
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-fit">
        <div className="relative w-full h-[400px] md:h-full bg-white flex items-center justify-center overflow-hidden">
          {/* Radial Blur Effect */}
          <div className="absolute inset-0 z-0 bg-radial-[at_center] from-white via-[#AF33FF] to-transparent blur-xs"></div>

          <div className="relative z-10 w-full h-full">
            <Image
              src={sideImage}
              alt="Competencies"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-[#1F2123] w-full p-12 sm:p-20">
          <div className="font-zalando font-normal text-[#D699FF] text-6xl mb-12">
            {title}
          </div>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col text-[#FFFFFF] text-2xl">
              <span className="font-zalando font-medium">{item.title}</span>
              <div className="font-sans font-normal text-[#FFFFFF] text-xl pt-3">
                {item.sub_title}
              </div>
            </div>
          ))}
          <div className="z-10 max-w-fit mt-12 border border-white rounded-sm py-3 px-6">
            <span className="font-zalando font-normal text-white">
              {buttonText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
