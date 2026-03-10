import ServiceHero from "@/components/sections/ServiceHero";
import ServiceTagline from "@/components/sections/ServiceTagline";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import ServiceMetrics from "@/components/sections/ServiceMetrics";

export default function PlatformProductEngineeringPage() {
  const metrics = [
    { score: "99.9%", description: "System Uptime Guaranteed" },
    { score: "3x", description: "Faster Time to Market" },
    { score: "50%", description: "Reduction in Tech Debt" },
    { score: "10M+", description: "Concurrent Users Handled" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black w-full overflow-hidden">
      <ServiceHero
        title="Platform & Product Engineering"
        description="Build scalable, resilient, and future-proof digital products that drive exponential growth and unmatched user experiences."
        image="/hero.jpg"
      />

      <ServiceTagline
        tagline="Engineering Excellence at Scale"
        description="We bridge the gap between visionary ideas and robust execution, transforming complex technical challenges into competitive advantages."
      />

      <div className="bg-[#1F1F1F] pt-24 pb-4">
        <div className="container mx-auto px-6 max-w-7xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-zalando font-bold text-white tracking-tight">
            Core Capabilities
          </h2>
        </div>
      </div>
      <SolutionAnimatedFeatures slug="platform" />

      <ServiceSemicircleLoader
        title="Delivery Efficiency"
        description="Our agile methodologies ensure rapid iterations and continuous delivery without compromising on rigorous quality standards."
      />

      <ServiceMetrics metrics={metrics} />
    </main>
  );
}
