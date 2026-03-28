import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/strapi";

interface SolutionsBannerProps {
  data?: {
    title: string;
    subtitle: string;
    image: any;
    button?: { id: number; text: string };
  };
}

const SolutionsBanner = ({ data }: SolutionsBannerProps) => {
  const title = data?.title || "";
  const subtitle = data?.subtitle || "";
  const mediaUrl = getStrapiMedia(data?.image);
  const isVideo = Array.isArray(data?.image)
    ? data?.image[0]?.mime?.startsWith("video/")
    : data?.image?.mime?.startsWith("video/");
  const buttonText =
    (Array.isArray(data?.button)
      ? data?.button[0]?.text
      : data?.button?.text) || "";

  return (
    <div className="relative mt-32 py-32 overflow-hidden text-center w-full">
      {/* CTA Background */}
      <div className="absolute inset-0 z-0 w-full">
        {isVideo ? (
          <video
            src={mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={mediaUrl}
            alt="CTA Background"
            fill
            className="object-cover"
          />
        )}
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* CTA Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-7xl font-normal font-zalando mb-8 tracking-tighter text-white">
          {title}
        </h2>
        <p className="text-xl md:text-2xl font-sans font-normal text-zinc-200 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link href="/contact" className="inline-block border border-white/40 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm py-4 px-12 cursor-pointer group">
          <span className="font-zalando font-normal text-lg text-white hover:text-black tracking-wide uppercase">
            {buttonText}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SolutionsBanner;
