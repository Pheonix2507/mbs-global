import Image from "next/image";

const Competencies = () => {
  return (
    <section
      id="competencies"
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-fit">
        <div className="relative w-full h-[400px] md:h-full bg-white flex items-center justify-center overflow-hidden">
          {/* Radial Blur Effect */}
          <div className="absolute inset-0 z-0 bg-radial-[at_center] from-white via-[#AF33FF] to-transparent blur-md"></div>

          <div className="relative z-10 w-full h-full">
            <Image
              src="/competencies.png"
              alt="Competencies"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-[#1F2123] w-full p-12 sm:p-20">
          <div className="font-zalando font-normal text-[#D699FF] text-6xl mb-12">
            Technical Competencies
          </div>
          <div className="flex flex-col text-[#FFFFFF] text-2xl">
            <span className="font-zalando font-medium">
              Platform & Product Engineering
            </span>
            <div className="font-work-sans font-normal text-[#FFFFFF] text-xl pt-3">
              Modern architecture for scalable global products.
            </div>
          </div>
          <div className="flex flex-col text-[#FFFFFF] text-2xl">
            <span className="font-zalando font-medium">
              Digital Infra & Ops
            </span>
            <div className="font-work-sans font-normal text-[#FFFFFF] text-xl pt-3">
              Robust infrastructure management for 24/7 availability.
            </div>
          </div>
          <div className="flex flex-col text-[#FFFFFF] text-2xl">
            <span className="font-zalando font-medium">
              Data, Analytics & AI
            </span>
            <div className="font-work-sans font-normal text-[#FFFFFF] text-xl pt-3">
              Actionable intelligence to power your digital evolution.
            </div>
          </div>
          <div className="z-10 max-w-fit mt-12 border border-white rounded-sm py-3 px-6">
            <span className="font-zalando font-normal text-white">
              Explore More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
