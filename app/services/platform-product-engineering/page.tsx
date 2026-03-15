import ServiceHero from "@/components/sections/ServiceHero";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import StrategicBusinessOutcomes from "@/components/sections/StrategicBusinessOutcomes";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import ServiceMetrics from "@/components/sections/ServiceMetrics";
import SolutionsBanner from "@/components/sections/SolutionsBanner";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";

export default async function PlatformProductEngineeringPage() {
  let strapiData: any = null;
  try {
    const response = await fetchStrapi<{ data: any }>(
      "/platform-product-engineering",
    );
    strapiData = response.data;
  } catch (error) {
    console.error("Error fetching platform engineering data:", error);
  }

  if (!strapiData) return null;

  const hero = strapiData.hero_section || strapiData.hero;
  const result = strapiData.Result_section;
  const progress = strapiData.progress;
  const metricsData = strapiData.number_growth;
  const outcomes = strapiData.Strategic_Business_Outcomes;
  const banner = strapiData.banner;

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
        <ServiceSemicircleLoader
          title={result.title}
          description={result.sub_title}
          image={getStrapiMedia(result.swipe_element)}
        />
      )}

      {outcomes && <StrategicBusinessOutcomes data={outcomes} />}

      {progress && <SolutionAnimatedFeatures slug="platform" data={progress} />}

      {metricsData && (
        <ServiceMetrics
          metrics={metricsData.map((m: any) => ({
            score: m.number,
            description:
              (m.text ? `${m.text} ` : "") + (m.description || m.title || ""),
          }))}
        />
      )}

      {banner && <SolutionsBanner data={banner} />}
    </main>
  );
}
