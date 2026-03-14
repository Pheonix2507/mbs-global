import Image from "next/image";
import { StrapiHero } from "@/lib/strapi-types";
import { getStrapiMedia } from "@/lib/strapi";

interface SolutionsHeroProps {
  data?: StrapiHero & { background_image?: any };
}

const SolutionsHero = ({ data }: SolutionsHeroProps) => {
  const title = data?.title;
  const subtitle = data?.subtitle;

  if (!title && !subtitle) return null;

  const backgroundImage = getStrapiMedia(data?.background_image) || "/hero.jpg";
  const isVideo = Array.isArray(data?.background_image)
    ? data?.background_image[0]?.mime?.startsWith("video/")
    : data?.background_image?.mime?.startsWith("video/");

  return (
    <section className="relative h-[60vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
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
          alt="Solutions Hero"
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-zalando text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          {(title || "").split("Global Ambitions").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-purple-400">Global Ambitions</span>
              )}
            </span>
          ))}
        </h1>
        <p className="text-xl text-zinc-200 font-sans font-normal animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default SolutionsHero;
