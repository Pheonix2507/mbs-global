import Image from "next/image";
import Link from "next/link";


import { getStrapiMedia } from "@/lib/strapi";

interface ContactData {
  id: number;
  title: string;
  subtitle: string | null;
  image?: any;
  button?: any;
}

interface ContactProps {
  data?: ContactData | ContactData[];
}

const Contact = ({ data }: ContactProps) => {
  const banner = Array.isArray(data) ? data[0] : data;
  const title = banner?.title || "";
  const backgroundImage = getStrapiMedia(banner?.image) || "";
  const buttonText =
    (Array.isArray(banner?.button)
      ? banner?.button[0]?.text
      : banner?.button?.text) || "";

  if (!data) return null;
  if (Array.isArray(data) && data.length === 0) return null;

  return (
    <section
      id="contact"
      className="relative flex flex-col h-[500px] md:min-h-screen shrink-0 items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src={backgroundImage}
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full "></div>
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full "></div>
      </div>
      <div className="relative z-10 mx-auto rounded-[40px] px-4 py-12 md:p-20 text-center">
        <div className="text-4xl md:text-6xl font-normal font-zalando mb-8 text-white">
          {title}
        </div>
        <Link href="/contact" className="relative z-10 max-w-fit mx-auto border border-white rounded-sm py-3 px-6 text-center text-white block hover:bg-white hover:text-black transition-colors duration-300">
          <span className="font-zalando font-normal">
            {buttonText}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
