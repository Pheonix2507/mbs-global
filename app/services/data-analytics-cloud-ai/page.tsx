import ServiceHero from "@/components/sections/ServiceHero";
import ServiceTagline from "@/components/sections/ServiceTagline";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import ServiceMetrics from "@/components/sections/ServiceMetrics";

export default function DataAnalyticsCloudAiPage() {
  const metrics = [
    { score: "5x", description: "Faster Data Processing" },
    { score: "85%", description: "Model Accuracy Improvement" },
    { score: "10+", description: "Advanced Enterprise Integrations" },
    { score: "360°", description: "Comprehensive Business Visibility" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black w-full overflow-hidden">
      <ServiceHero
        title="Data, Analytics, Cloud & AI"
        description="Unlock the hidden potential of your data ecosystem with advanced AI models and intelligent enterprise analytics."
        image="/mechanism.jpg"
      />

      <ServiceTagline
        tagline="Intelligence Meets Action"
        description="Transform raw data into strategic foresight. We integrate robust data pipelines with frontier AI to drive decisive business outcomes."
      />

      <div className="bg-[#1F1F1F] pt-24 pb-4">
        <div className="container mx-auto px-6 max-w-7xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-zalando font-bold text-white tracking-tight">
            Intelligent Capabilities
          </h2>
        </div>
      </div>
      <SolutionAnimatedFeatures slug="data" />

      <ServiceSemicircleLoader
        title="Data Processing Velocity"
        description="Accelerated data ingestion and real-time analytics streaming that enables instantaneous decision-making at any scale."
      />

      <ServiceMetrics metrics={metrics} />
    </main>
  );
}
