import ServiceHero from "@/components/sections/ServiceHero";
import ServiceSemicircleLoader from "@/components/sections/ServiceSemicircleLoader";
import SolutionsSplit from "@/components/sections/SolutionsSplit";
import SolutionGlassmorphism from "@/components/sections/SolutionGlassmorphism";
import ServiceMetrics from "@/components/sections/ServiceMetrics";
import SolutionsBanner from "@/components/sections/SolutionsBanner";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import { StrapiAiCentricProductEngineering } from "@/lib/strapi-types";

export default async function AiCentricProductEngineeringPage() {
  const response = await fetchStrapi<{
    data: StrapiAiCentricProductEngineering;
  }>("/ai-centric-product-engineering");
  const strapiData = response.data;

  if (!strapiData) return null;

  const hero = strapiData.hero_section;
  const titleSubtitle = strapiData.title_subtile;
  const info = strapiData.info;
  const result = strapiData.Result_section[0];
  const metricsData = strapiData.number_growth;
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

      {titleSubtitle && (
        <SolutionGlassmorphism
          data={{
            title: titleSubtitle.title,
            sub_title: titleSubtitle.sub_title,
          }}
        />
      )}

      {info && (
        <SolutionsSplit
          data={{
            title: info.title,
            subtitle: info.subtitle,
            image: info.image,
            button: info.button,
          }}
        />
      )}

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

      {banner && <SolutionsBanner data={banner} />}
    </main>
  );
}
