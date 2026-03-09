import Image from "next/image";

const SolutionsSplit = () => {
  return (
    <section className="bg-zinc-50 dark:bg-[#1F2123] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-1 relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/about-hero.jpg"
              alt="Strategic Execution"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>
          <div className="order-2 md:order-2 space-y-8">
            <h2 className="font-zalando text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Unrivaled Execution.{" "}
              <span className="text-purple-500">Unmatched Scale.</span>
            </h2>
            <p className="font-sans text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
              MBS empowers global enterprises to build distributed teams that
              drive workforce transformation and strategic capability
              development. We bridge the gap between ambitious global goals and
              the world-class engineering talent of India.
            </p>
            <div className="pt-4">
              <div className="inline-block border border-zinc-900 dark:border-white/40 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-sm py-4 px-10 cursor-pointer group">
                <span className="font-zalando font-normal text-lg tracking-wide uppercase">
                  Learn More About Scale
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSplit;
