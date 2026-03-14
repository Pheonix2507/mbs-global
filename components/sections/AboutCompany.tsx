import Image from "next/image";

interface AboutCompanyProps {
  data?: {
    title?: string;
    numbers?: Array<{
      id: number;
      number: string;
      text: string;
    }>;
  };
}

const AboutCompany = ({ data }: AboutCompanyProps) => {
  const stats = data?.numbers || [];
  const title = data?.title || "Proven Scale. Global Impact.";

  if (!data) return null;

  return (
    <section
      id="about-company"
      className="relative bg-white dark:bg-[#1F2123] py-32 px-6 overflow-hidden min-h-screen"
    >
      {/* Smudge SVG at relative px distance */}
      <div
        className="absolute pointer-events-none z-1"
        style={{ left: "1260px", top: "386px" }}
      >
        <Image src="/smudge.svg" alt="" width={814} height={664} />
      </div>

      <div className="relative mx-auto max-w-5xl z-10">
        <div className="text-[#AF33FF] text-6xl font-normal font-zalando mb-28">
          {title}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-baseline gap-1">
                <span className="font-zalando text-6xl font-normal tracking-tighter text-[#020203] dark:text-white">
                  {stat.number}
                </span>
              </div>
              <p className="text-lg max-w-[200px] leading-tight text-[#020203] dark:text-white">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
