import ServiceHero from "@/components/sections/ServiceHero";
import ServiceTagline from "@/components/sections/ServiceTagline";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import ServiceMetrics from "@/components/sections/ServiceMetrics";
import Image from "next/image";

export default function PlatformProductEngineeringPage() {
  const metrics = [
    { score: "99.9%", description: "System Uptime Guaranteed" },
    { score: "3x", description: "Faster Time to Market" },
    { score: "50%", description: "Reduction in Tech Debt" },
    { score: "10M+", description: "Concurrent Users Handled" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#1F1F1F] w-full overflow-hidden">
      <section className="relative w-full h-[800px] md:h-[80vh] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Engineering the Future" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Box - Mobile Specs: 360x213, Gap: 24 */}
        <div className="relative z-10 w-full max-w-[360px] md:max-w-4xl h-auto md:h-auto flex flex-col items-center justify-center gap-6 md:gap-8 px-6 text-center pt-20">
          <h1 className="text-[32px] md:text-5xl lg:text-7xl font-zalando font-bold text-white tracking-tight leading-[120%]">
            Engineering<br /> the Future of<br /> Software.
          </h1>
          <p className="text-sm md:text-xl text-zinc-300 font-sans leading-relaxed max-w-[320px] md:max-w-2xl">
            We Co-Engineer platforms for market dominance. From legacy modernization to cloud innovation, we deliver excellence at your vision&apos;s speed.
          </p>
        </div>
      </section>

      {/* Your Vision Section - Mobile Specs: Width 412, Height 350, Padding 60/24, Gap 10, BG #1F1F1F */}
      <section className="bg-[#1F1F1F] py-[60px] md:py-32 flex items-center justify-center min-h-[350px]">
        <div className="w-full max-w-[412px] md:max-w-4xl px-6 flex flex-col items-center gap-[10px] text-center">
          <h2 className="text-[32px] md:text-5xl font-zalando font-bold text-white tracking-tight leading-[120%] mb-4">
            Your Vision, Our<br /> Product DNA.
          </h2>
          <p className="text-sm md:text-xl text-zinc-400 font-sans leading-relaxed">
            At MBS, we co-develop your dreams. As your engineering partner, we deliver scalability and innovation around your user journeys.
          </p>
        </div>
      </section>

      <div className="bg-[#1F1F1F] pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-zalando font-bold text-white tracking-tight mb-12">
            Technical Pillars
          </h2>
          
          <div className="relative w-full aspect-[4/3] md:aspect-video md:rounded-3xl overflow-hidden mb-16">
            <Image 
              src="/technical-pillars.jpg" 
              alt="Technical Pillars" 
              fill 
              className="object-cover"
            />
          </div>

          {/* <h2 className="text-3xl md:text-5xl font-zalando font-bold text-white tracking-tight mb-8">
            Core Capabilities
          </h2> */}
        </div>
      </div>
      <SolutionAnimatedFeatures slug="platform" />

      <section className="bg-[#1F1F1F] py-20 flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-zalando font-bold text-white text-center mb-16 leading-tight">
            Captivating<br className="md:hidden" /> Experiences. Tangible<br className="md:hidden" /> Results.
          </h2>

          {/* 100% Gauge */}
          <div className="w-full mb-12">
            <ServiceSemicircleLoader
              title=""
              description=""
              className="bg-[#1F1F1F]"
            />
          </div>

          {/* Purple Bordered Card */}
          <div className="w-full max-w-[360px] md:max-w-2xl bg-[#1A1A1A] border border-[#AF33FF]/40 p-8 md:p-12 rounded-[20px] mb-20 text-center">
            <p className="text-zinc-300 font-sans text-base md:text-lg leading-relaxed">
              We create products at the intersection of data, design thinking, and the science of user behavior. Our team crafts digital journeys—across mobile apps and responsive websites—that are delightful, accessible, and friendly.
            </p>
          </div>

          <div className="w-full max-w-[298px] md:max-w-4xl flex flex-col items-center gap-[31px] md:gap-20">
            {[
              { 
                score: "32%", 
                label: "Faster", 
                description: "Time-to-Market for cloud-native platforms.",
                offset: 205
              },
              { 
                score: "50%-70%", 
                label: "Reduction", 
                description: "in product defects and fallouts.",
                offset: 150
              },
              { 
                score: "40%", 
                label: "Lower", 
                description: "operational and development costs.",
                offset: 180
              },
              { 
                score: "3x", 
                label: "Increase", 
                description: "development speed via our technology.",
                offset: 100
              }
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Gauge */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center bg-black/40 border border-[#AF33FF]/20 backdrop-blur-xl mb-6">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#AF33FF"
                      strokeWidth="2"
                      strokeDasharray="301.59"
                      strokeDashoffset={metric.offset}
                      strokeLinecap="round"
                      className="opacity-60"
                    />
                  </svg>
                  <span className="text-3xl md:text-5xl font-light text-white font-zalando tracking-tight">{metric.score}</span>
                  <span className="text-sm md:text-base text-zinc-400 font-sans mt-1">{metric.label}</span>
                </div>
                {/* Description */}
                <p className="text-sm md:text-lg text-zinc-300 font-sans leading-relaxed max-w-[280px]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Full-width CTA Section */}
      <div className="relative mt-20 py-24 md:py-32 overflow-hidden text-center w-full">
        {/* CTA Background */}
        <div className="absolute inset-0 z-0 w-full">
          <Image
            src="/join.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* CTA Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-[40px] md:text-7xl font-normal font-zalando mb-6 md:mb-8 tracking-tight text-white leading-[110%]">
            Ready to Reach<br className="md:hidden" /> the Pinnacle?.
          </h2>
          <p className="text-lg md:text-2xl font-sans font-normal text-zinc-200 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            At MBS, the sky is the limit. Let&apos;s build your next strategic powerhouse together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center w-auto min-w-[235px] h-[48px] border border-white rounded-[4px] px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group overflow-hidden"
          >
            <span className="font-zalando font-normal text-sm md:text-lg tracking-wide text-white group-hover:text-black whitespace-nowrap">
              Schedule your call
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
