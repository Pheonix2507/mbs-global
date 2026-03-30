import Image from "next/image";
import { StrapiHero } from "@/lib/strapi-types";
import { getStrapiMedia } from "@/lib/strapi";

interface SolutionsHeroProps {
  data?: { background_image?: any; title?: string; subtitle?: string };
}

const SolutionsHero = ({ data }: SolutionsHeroProps) => {
  const title = data?.title;
  const subtitle = data?.subtitle;

  if (!title && !subtitle) return null;

  const backgroundImage = getStrapiMedia(data?.background_image) || "";
  const isVideo = Array.isArray(data?.background_image)
    ? data?.background_image[0]?.mime?.startsWith("video/")
    : data?.background_image?.mime?.startsWith("video/");

  return (
    <section className="relative h-[60vh] min-h-[400px] md:min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {isVideo ? (
          <video
            src={backgroundImage}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={backgroundImage}
            alt={title || "Solutions Hero"}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="font-zalando text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter text-white mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-200 font-sans font-normal animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default SolutionsHero;
