import ServiceHero from "@/components/sections/ServiceHero";
import ServiceTagline from "@/components/sections/ServiceTagline";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceMetrics from "@/components/sections/ServiceMetrics";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import SolutionsBanner from "@/components/sections/SolutionsBanner";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";

export default async function DigitalInfraOpsPage() {
  let strapiData: any = null;
  try {
    const response = await fetchStrapi<{ data: any }>("/digital-infra-op");
    strapiData = response.data;
  } catch (error) {
    console.error("Error fetching digital infra data:", error);
  }

  if (!strapiData) return null;

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

      {result && (
        <ServiceTagline tagline={result.title} description={result.sub_title} />
      )}

      {outcomes && (
        <SolutionsGrid
          data={{ title: outcomes.title, pillar_element: outcomes.card }}
        />
      )}

      {progress && <SolutionAnimatedFeatures slug="infra" data={progress} />}

      {metricsData && (
        <ServiceMetrics
          metrics={metricsData.map((m: any) => ({
            score: m.number,
            description:
              (m.text ? `${m.text} ` : "") + (m.description || m.title || ""),
          }))}
        />
      )}

      {strapiData.banner && <SolutionsBanner data={strapiData.banner} />}
    </main>
  );
}
