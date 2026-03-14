import Image from "next/image";
import { StrapiHero } from "@/lib/strapi-types";
import { getStrapiMedia } from "@/lib/strapi";

interface HeroProps {
  data?: StrapiHero & { background_image?: any };
}

const Hero = ({ data }: HeroProps) => {
  const title = data?.title;
  const subtitle = data?.subtitle;

  if (!title && !subtitle) return null;

  const backgroundImage = getStrapiMedia(data?.background_image) || "/hero.jpg";
  const isVideo = Array.isArray(data?.background_image) 
    ? data?.background_image[0]?.mime?.startsWith('video/')
    : data?.background_image?.mime?.startsWith('video/');

  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
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
          <Image src={backgroundImage} alt="Hero Background" fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-background/50"></div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5"></div>
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/5"></div>
      </div>

      <div className="relative z-10 px-39 ml-10 min-w-[1134px]">
        <h1 className="mb-8 font-zalando font-semibold text-[49px] tracking-tight">
          {(title || "").split("Engineering").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-purple-400">Engineering</span>
              )}
            </span>
          ))}
        </h1>

        <p className="px-18 mb-10 font-sans font-normal text-center text-xl text-[#FFFFFF] dark:text-[#FFFFFF]">
          {subtitle}
        </p>
      </div>
      <div className="relative z-10 border border-white rounded-sm py-3 px-6 cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
        <span className="font-zalando font-normal">Build Your Team</span>
      </div>
    </section>
  );
};

export default Hero;
