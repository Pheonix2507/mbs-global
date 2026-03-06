import Image from "next/image";

const stats = [
  { number: "15+", description: "Years of industry-leading experience." },
  { number: "150+", description: "Active tech resources ready to deploy." },
  {
    number: "20+",
    description: "Active global clients across diverse sectors.",
  },
  { number: "100+", description: "Skills served across tech and operations." },
  {
    number: "5",
    description: "Strategic offices in India, Europe, Canada, and the US.",
  },
  { number: "", description: "" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-32 px-6 overflow-hidden min-h-screen"
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
          Proven Scale. Global Impact.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-baseline gap-1">
                <span className="font-zalando text-6xl font-normal tracking-tighter text-[#020203]">
                  {stat.number}
                </span>
              </div>
              <p className="text-lg max-w-[200px] leading-tight text-[#020203]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
