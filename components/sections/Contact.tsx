import Image from "next/image";

import { getStrapiMedia } from "@/lib/strapi";

interface ContactData {
  id: number;
  title: string;
  subtitle: string;
  image: any;
  button: Array<{
    id: number;
    text: string;
  }>;
}

interface ContactProps {
  data?: ContactData[];
}

const Contact = ({ data }: ContactProps) => {
  const banner = data?.[0];
  const title = banner?.title || "";
  const backgroundImage = getStrapiMedia(banner?.image) || "";
  const buttonText = banner?.button?.[0]?.text || "Build Your Team";

  if (!data || data.length === 0) return null;

  return (
    <section
      id="contact"
      className="relative flex flex-col h-[612px] items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5"></div>
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/5"></div>
      </div>
      <div className="relative z-10 mx-auto rounded-[40px] p-12 sm:p-20 text-center">
        <div className="text-6xl font-normal font-zalando mb-6.5">{title}</div>
        <div className="relative z-10 max-w-fit mx-auto border border-white rounded-sm py-3 px-6 text-center">
          <span className="font-zalando font-normal text-white">
            {buttonText}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
