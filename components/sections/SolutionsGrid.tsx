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
  data?: SolutionItem[];
}

const DEFAULT_SOLUTIONS_DATA: any[] = [];

const SolutionsGrid = ({ title, data }: SolutionsGridProps) => {
  const solutions = data;
  const gridTitle = title;

  if (!solutions || solutions.length === 0) return null;

  return (
    <section className="bg-[#1F1F1F] py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <span className="flex items-center justify-center text-center font-zalando font-normal text-[#D699FF] text-5xl mb-12">
          {gridTitle}
        </span>
        <div className="flex flex-col gap-24">
          {solutions.map((item, index) => {
            const imageUrl = getStrapiMedia(item.image) || "/mechanism.jpg";
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

                {/* Middle: Image */}
                <div className="order-2 relative aspect-4/3 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 shadow-xl">
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right: Description (Points) */}
                <div className="order-3 space-y-8 md:pt-4">
                  {item.points?.map((point, pIdx) => (
                    <div key={pIdx} className="flex gap-4">
                      <span className="text-2xl font-bold text-purple-400 shrink-0">
                        {pIdx + 1}.
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-zalando text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                          {point.title}
                        </h4>
                        <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
