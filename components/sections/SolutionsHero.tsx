import Image from "next/image";

const SolutionsHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Solutions Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-zalando text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          Tailored Solutions for Your{" "}
          <span className="text-purple-400">Global Ambitions</span>
        </h1>
        <p className="text-xl text-zinc-200 font-sans font-normal animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 max-w-2xl mx-auto">
          We provide end-to-end strategic engineering solutions that bridge the
          gap between complex business challenges and world-class technological
          execution.
        </p>
      </div>
    </section>
  );
};

export default SolutionsHero;
