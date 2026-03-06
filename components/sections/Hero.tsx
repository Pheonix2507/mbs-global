import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      <div className="absolute inset-0 z-0">
        <Image src="/hero.png" alt="Hero Background" fill />
        <div className="absolute inset-0 bg-background/50"></div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5"></div>
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-600/5"></div>
      </div>

      <div className="relative z-10 px-39 ml-10 min-w-[1134px]">
        <h1 className="mb-8 font-zalando font-semibold text-[49px] tracking-tight">
          Your Vision. Our <span className="text-purple-400">Engineering</span>{" "}
          One Team.
        </h1>

        <p className="px-18 mb-10 font-work-sans font-normal text-center text-xl text-[#FFFFFF] dark:text-[#FFFFFF]">
          We don&apos;t just deliver services; we Co-Engineer your future.
          Experience a people-driven partnership that turns global goals into
          operational reality.
        </p>
      </div>
      <div className="relative z-10 border border-white rounded-sm py-3 px-6">
        <span className="font-zalando font-normal text-white">
          Build Your Team
        </span>
      </div>
    </section>
  );
};

export default Hero;
