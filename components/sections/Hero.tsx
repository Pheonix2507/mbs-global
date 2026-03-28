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

  const backgroundImage = getStrapiMedia(data?.background_image) || "";
  const isVideo = Array.isArray(data?.background_image)
    ? data?.background_image[0]?.mime?.startsWith("video/")
    : data?.background_image?.mime?.startsWith("video/");

  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {isVideo ? (
          <video
            src={backgroundImage}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-50"
          />
        ) : (
          <Image
            src={backgroundImage}
            alt={title || "Hero Background"}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0"></div>
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5"></div>
        <div className="absolute right-0 top-0 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/5"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <h1 className="mb-8 font-zalando font-semibold text-4xl md:text-[49px] tracking-tight text-white">
          {title}
        </h1>

        <p className="mb-8 md:mb-10 font-sans font-normal text-base sm:text-lg md:text-xl leading-[120%] tracking-normal text-center text-white max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* CTA Button */}
      {data?.button?.[0]?.text && (
        <div className="relative z-10 flex items-center justify-center w-[266.52px] h-[55.26px] md:w-auto md:h-auto gap-[11.36px] rounded-[4.54px] border-[1.14px] border-[#FFFFFF] py-[13.63px] md:py-4 px-[27.26px] md:px-10 opacity-100">
          <span className="font-zalando font-normal text-white text-sm sm:text-base md:text-lg">
            {data.button[0].text}
          </span>
        </div>
      )}
    </section>
  );
};

export default Hero;
