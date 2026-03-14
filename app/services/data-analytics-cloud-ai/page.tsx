import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceTagline from "@/components/sections/ServiceTagline";
import ServiceMetrics from "@/components/sections/ServiceMetrics";
import Image from "next/image";

export default function DataAnalyticsCloudAiPage() {
  const metrics = [
    { score: "5x", description: "Faster Data Processing" },
    { score: "85%", description: "Model Accuracy Improvement" },
    { score: "10+", description: "Advanced Enterprise Integrations" },
    { score: "360°", description: "Comprehensive Business Visibility" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#1F1F1F] w-full overflow-hidden">
      {/* Desktop Hero - ORIGINAL DESIGN */}
      <div className="hidden md:block">
        <ServiceHero
          title="Data, Analytics, Cloud & AI"
          description="Unlock the hidden potential of your data ecosystem with advanced AI models and intelligent enterprise analytics."
          image="/mechanism.jpg"
        />
      </div>

      {/* Mobile Hero - PREVIOUS TASK DESIGN */}
      <section className="md:hidden relative w-full h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/mechanism.jpg" 
            alt="Data, Analytics, Cloud & AI" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full max-w-[360px] h-auto flex flex-col items-center justify-center gap-6 px-6 text-center pt-20">
          <h1 className="text-[32px] font-zalando font-bold text-white tracking-tight leading-[120%]">
            Data, Analytics,<br /> Cloud & AI.
          </h1>
          <p className="text-sm text-zinc-300 font-sans leading-relaxed max-w-[320px]">
            Unlock the hidden potential of your data ecosystem with advanced AI models and intelligent enterprise analytics.
          </p>
        </div>
      </section>

      {/* Desktop Tagline - ORIGINAL DESIGN */}
      <div className="hidden md:block">
        <ServiceTagline
          tagline="Intelligence Meets Action"
          description="Transform raw data into strategic foresight. We integrate robust data pipelines with frontier AI to drive decisive business outcomes."
        />
      </div>

      {/* Mobile Tagline - PREVIOUS TASK DESIGN */}
      <section className="md:hidden bg-[#1F1F1F] py-[60px] flex items-center justify-center min-h-[350px]">
        <div className="w-full max-w-[412px] px-6 flex flex-col items-center gap-[10px] text-center">
          <h2 className="text-[32px] font-zalando font-bold text-[#AF33FF] tracking-tight leading-[120%] mb-4">
            Intelligence<br /> Meets<br /> Action.
          </h2>
          <p className="text-sm text-zinc-400 font-sans leading-relaxed">
            Transform raw data into strategic foresight. We integrate robust data pipelines with frontier AI to drive decisive business outcomes.
          </p>
        </div>
      </section>

      <div className="bg-[#1F1F1F] pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-zalando font-bold text-white tracking-tight mb-8 text-center md:text-left">
            Intelligent Capabilities
          </h2>
        </div>
      </div>
      <SolutionAnimatedFeatures slug="data" />

      {/* Shared Section - Metrics & Resilience Responsive Stack */}
      <div className="hidden md:block">
        <ServiceSemicircleLoader
          title="Data Processing Velocity"
          description="Accelerated data ingestion and real-time analytics streaming that enables instantaneous decision-making at any scale."
        />
        <ServiceMetrics metrics={metrics} />
      </div>

      {/* Mobile-only Metrics Design from Previous Task */}
      <section className="md:hidden bg-[#1F1F1F] py-20 flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
          <h2 className="text-3xl font-zalando font-bold text-white text-center mb-16 leading-tight">
            Data Processing Velocity.
          </h2>
          <div className="w-full mb-12">
            <ServiceSemicircleLoader
              title=""
              description=""
              className="bg-[#1F1F1F]"
            />
          </div>
          <div className="w-full max-w-[360px] bg-[#1A1A1A] border border-[#AF33FF]/40 p-8 rounded-[20px] mb-20 text-center">
            <p className="text-zinc-300 font-sans text-base leading-relaxed">
              Accelerated data ingestion and real-time analytics streaming that enables instantaneous decision-making at any scale.
            </p>
          </div>
          <div className="w-full max-w-[298px] flex flex-col items-center gap-[31px]">
            {[
              { score: "5x", label: "Faster", desc: "Faster Data Processing", offset: 100 },
              { score: "85%", label: "Accuracy", desc: "Model Accuracy Improvement", offset: 45 },
              { score: "10+", label: "Integrations", desc: "Advanced Enterprise Integrations", offset: 80 },
              { score: "360°", label: "Visibility", desc: "Comprehensive Business Visibility", offset: 0 }
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-full flex flex-col items-center justify-center bg-black/40 border border-[#AF33FF]/20 backdrop-blur-xl mb-6">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#AF33FF" strokeWidth="2" className="opacity-10" />
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#AF33FF" strokeWidth="2" strokeDasharray="301.59" strokeDashoffset={metric.offset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                  </svg>
                  <span className="text-3xl font-light text-white font-zalando">{metric.score}</span>
                  <span className="text-sm text-zinc-400 font-sans mt-1">{metric.label}</span>
                </div>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed max-w-[280px]">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Shared */}
      <div className="relative mt-20 py-24 md:py-32 overflow-hidden text-center w-full">
        <div className="absolute inset-0 z-0 w-full">
          <Image src="/join.jpg" alt="CTA Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-[40px] md:text-7xl font-normal font-zalando mb-6 md:mb-8 tracking-tight text-white leading-[110%] text-center">
            Ready to Reach<br className="md:hidden" /> the Pinnacle?.
          </h2>
          <p className="text-lg md:text-2xl font-sans font-normal text-zinc-200 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            At MBS, the sky is the limit. Let&apos;s build your next strategic powerhouse together.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center w-[235px] h-[48px] border border-white rounded-[4px] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group">
            <span className="font-zalando font-normal text-sm md:text-lg tracking-wide text-white group-hover:text-black">Schedule your call</span>
          </a>
        </div>
      </div>
    </main>
  );
}
