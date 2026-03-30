import ServiceHero from "@/components/sections/ServiceHero";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import StrategicBusinessOutcomes from "@/components/sections/StrategicBusinessOutcomes";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceMetrics from "@/components/sections/ServiceMetrics";
import SolutionsBanner from "@/components/sections/SolutionsBanner";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";

export default async function DataAnalyticsCloudAiPage() {
  const response = await fetchStrapi<{ data: any }>("/data-analytics-cloud-ai");
  const strapiData = response.data;

  const hero = strapiData.hero_section || strapiData.hero;
  const result = strapiData.Result_section;
  const progress = strapiData.progress;
  const metricsData = strapiData.number_growth;
  const outcomes = strapiData.Strategic_Business_Outcomes;

  return (
    <main className="min-h-screen bg-white dark:bg-black w-full overflow-hidden">
      {hero && (
        <ServiceHero
          title={hero.title}
          description={hero.subtitle}
          media={hero.background_image}
        />
      )}
      {progress && <SolutionAnimatedFeatures slug="data" data={progress} />}

      {outcomes && <StrategicBusinessOutcomes data={outcomes} />}

      {result && (
        <ServiceSemicircleLoader
          title={result.title}
          description={result.sub_title}
          image={getStrapiMedia(result.background_image)}
        />
      )}

      {metricsData && (
        <ServiceMetrics
          metrics={metricsData.map((m: any) => ({
            score: m.number,
            text: m.text || "",
            description: m.description || m.title || "",
          }))}
        />
      )}

      {strapiData.banner && <SolutionsBanner data={strapiData.banner} />}
    </main>
  );
}
