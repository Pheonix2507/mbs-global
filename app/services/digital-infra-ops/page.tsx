import ServiceHero from "@/components/sections/ServiceHero";
import ServiceTagline from "@/components/sections/ServiceTagline";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import ServiceMetrics from "@/components/sections/ServiceMetrics";

export default function DigitalInfraOpsPage() {
  const metrics = [
    { score: "40%", description: "Avg. Infrastructure Cost Savings" },
    { score: "0", description: "Downtime During Migrations" },
    { score: "24/7", description: "Proactive Monitoring" },
    { score: "100%", description: "Compliance Standards Met" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black w-full overflow-hidden">
      <ServiceHero
        title="Digital Infra & Ops"
        description="Modernize your IT backbone with secure, scalable, and automated cloud infrastructure designed for maximum reliability."
        image="/about-hero.jpg"
      />

      <ServiceTagline
        tagline="Foundation for the Future"
        description="We orchestrate seamless transitions to the cloud and ensure continuous optimization, so you can focus on core business innovation."
      />

      <div className="bg-[#1F1F1F] pt-24 pb-4">
        <div className="container mx-auto px-6 max-w-7xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-zalando font-bold text-white tracking-tight">
            Infrastructure Arsenal
          </h2>
        </div>
      </div>
      <SolutionAnimatedFeatures slug="infra" />

      <ServiceSemicircleLoader
        title="Operational Resilience"
        description="Unwavering stability powered by automated incident response, rigorous security protocols, and real-time observability."
      />

      <ServiceMetrics metrics={metrics} />
    </main>
  );
}
