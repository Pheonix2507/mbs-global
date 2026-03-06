import Image from "next/image";

const values = [
  {
    image: "/value-1.png",
    description: "Technology Focused",
  },
  {
    image: "/value-2.png",
    description: "Power the Future",
  },
  {
    image: "/value-3.png",
    description: "Partnership Commited to Collaborative success",
  },
  {
    image: "/value-4.png",
    description: "Unleash Innovation",
  },
];

const Values = () => {
  return (
    <section
      id="values"
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden px-6 py-24 bg-white"
    >
      <div className="relative z-10 mx-auto rounded-[40px] mb-16">
        <div className="text-6xl font-normal font-zalando text-[#AF33FF] text-center">
          Core Values
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-7xl mx-auto gap-12 md:gap-20">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-6"
          >
            <div className="relative w-32 h-32 rounded-full bg-[#EEF1F4] flex items-center justify-center overflow-hidden">
              <Image
                src={value.image}
                alt=""
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="text-lg max-w-[345px] leading-tight text-[#1F2123] font-zalando font-medium">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
