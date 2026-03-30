import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

interface SolutionPoint {
  title: string;
  description: string;
}

interface SolutionItem {
  title: string;
  image: any;
  points: SolutionPoint[];
}

interface SolutionsGridProps {
  title?: string;
  data?: any;
}

const DEFAULT_SOLUTIONS_DATA: any[] = [];

const SolutionsGrid = ({
  title: propTitle,
  data: rawData,
}: SolutionsGridProps) => {
  const solutions = Array.isArray(rawData)
    ? rawData
    : (rawData as any)?.pillar_element;
  const gridTitle = propTitle || (rawData as any)?.title;

  if (!solutions || solutions.length === 0) return null;

  return (
    <section className="bg-white dark:bg-[#1F1F1F] py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <span className="flex items-center justify-center text-left md:text-center font-zalando font-normal text-[#D699FF] text-3xl md:text-5xl mb-8 md:mb-12">
          {gridTitle}
        </span>
        <div className="flex flex-col gap-12 md:gap-24">
          {solutions.map((item: any, index: number) => {
            const mediaUrl = getStrapiMedia(item.image) || "";
            const isVideo = Array.isArray(item.image)
              ? item.image[0]?.mime?.startsWith("video/")
              : item.image?.mime?.startsWith("video/");

            // Map either title_subtile (API) or swipe_element or points (previous) or simple subtitle/sub_title
            const itemPoints = item.title_subtile
              ? item.title_subtile.map((p: any) => ({
                  title: p.sub_title ? p.title : "",
                  description: p.sub_title || p.title,
                }))
              : item.swipe_element
                ? item.swipe_element.map((p: any) => ({
                    title: p.title,
                    description: p.subtitle || p.sub_title,
                  }))
                : item.points
                  ? item.points
                  : item.subtitle || item.sub_title
                    ? [
                        {
                          title: "",
                          description: item.subtitle || item.sub_title,
                        },
                      ]
                    : [];

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start"
              >
                {/* Left: Title */}
                <div className="order-1 md:pt-4">
                  <h3 className="font-zalando text-3xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Middle: Media */}
                <div className="order-2 relative aspect-4/3 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 shadow-xl">
                  {isVideo ? (
                    <video
                      src={mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={mediaUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>

                {/* Right: Description (Points) */}
                <div className="order-3 space-y-8 md:pt-4">
                  {itemPoints.map((point: any, pIdx: number) => (
                    <div key={pIdx} className="flex gap-4">
                      {/* <span className="text-2xl font-bold text-purple-400 shrink-0">
                        {pIdx + 1}.
                      </span> */}
                      <div className="space-y-1">
                        <h4 className="font-zalando text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                          {point.title} 
                        </h4>
                        <p className="font-zalando font-normal text-lg md:text-[25px] text-black dark:text-white leading-[1.2] tracking-normal">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
