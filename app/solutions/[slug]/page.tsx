import SolutionsHero from "@/components/sections/SolutionsHero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import SolutionsSplit from "@/components/sections/SolutionsSplit";
import SolutionGlassmorphism from "@/components/sections/SolutionGlassmorphism";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import SolutionCarousel from "@/components/sections/SolutionCarousel";
import SolutionsBanner from "@/components/sections/SolutionsBanner";
import ServiceMetrics from "@/components/sections/ServiceMetrics";
import { fetchStrapi } from "@/lib/strapi";

const SLUG_TO_ENDPOINT: Record<string, string> = {
  "workspace-solution": "/workspace-solution",
  "operative-management": "/operative-management",
  "operative-managements": "/operative-management",
  "strategic-consulting": "/strategic-consulting",
  innovation: "/innovation",
  "total-talent-solution": "/total-talent-solution",
  "total-talent-solutions": "/total-talent-solution",
  "data-analytics-cloud-ai": "/data-analytics-cloud-ai",
  "digital-infra-op": "/digital-infra-op",
  "business-transformation": "/business-information",
  "business-information": "/business-information",
  "business-informations": "/business-information",
  "platform-product-engineering": "/platform-product-engineering",
};

function normalizeArray(data: any) {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}

export default async function SolutionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const endpoint = SLUG_TO_ENDPOINT[slug];

  let strapiData: any = null;

  if (endpoint) {
    const response = await fetchStrapi<{ data: any }>(endpoint);
    strapiData = response.data;
  }

  if (!strapiData) {
    return <main className="min-h-screen" />;
  }

  /* ---------------- HERO ---------------- */

  const heroData = Array.isArray(strapiData?.hero_section)
    ? strapiData.hero_section[0]
    : strapiData?.hero_section || strapiData?.hero;

  /* ---------------- TITLE SUBTITLE ---------------- */

  const titleSubtitle =
    strapiData?.title_subtile ||
    strapiData?.Result_section ||
    strapiData?.swipe?.title_subtile;

  /* ---------------- GRID / PILLARS ---------------- */

  const pillars =
    strapiData?.Pillar ||
    strapiData?.Workspaces_pillar ||
    strapiData?.Core_Transformation_Pillars ||
    strapiData?.Strategic_Excellence ||
    strapiData?.Global_Efficiency ||
    strapiData?.Toolkit ||
    strapiData?.MBS_Lifecycle;

  /* ---------------- PROGRESS / FEATURES ---------------- */

  const progress =
    strapiData?.progress ||
    strapiData?.talent_progess ||
    strapiData?.Managed_Services ||
    strapiData?.Concept_to_Reality;

  /* ---------------- SPLIT SECTION ---------------- */

  const info =
    strapiData?.info ||
    strapiData?.Workspaces_info ||
    strapiData?.Strategic_info ||
    strapiData?.total_talent_info ||
    strapiData?.operative_management_info;

  /* ---------------- CAROUSEL ---------------- */

  const guides = strapiData?.Guides || strapiData?.swipe;

  /* ---------------- METRICS ---------------- */

  const metrics = strapiData?.number_growth;

  /* ---------------- BANNER ---------------- */

  const banner = strapiData?.banner;

  return (
    <main className="min-h-screen">
      {/* HERO */}
      {heroData && <SolutionsHero data={heroData} />}

      {/* TITLE SUBTITLE */}
      {titleSubtitle && <SolutionGlassmorphism data={titleSubtitle} />}

      {/* FEATURES / PROGRESS */}
      {progress &&
        normalizeArray(progress).map((item: any, i: number) => (
          <SolutionAnimatedFeatures
            key={`progress-${i}`}
            slug={slug}
            data={item}
          />
        ))}

      {/* GRID (3 IMAGE SECTION) */}
      {pillars &&
        normalizeArray(pillars).map((pillar: any, i: number) => (
          <SolutionsGrid key={`pillar-${i}`} data={pillar} />
        ))}

      {/* CAROUSEL */}
      {guides &&
        normalizeArray(guides).map((guide: any, i: number) => (
          <SolutionCarousel key={`guide-${i}`} data={guide} />
        ))}

      {/* SPLIT SECTION */}
      {info &&
        normalizeArray(info).map((item: any, i: number) => (
          <SolutionsSplit key={`info-${i}`} data={item} />
        ))}

      {/* METRICS */}
      {metrics && (
        <ServiceMetrics
          metrics={metrics.map((m: any) => ({
            score: m.number,
            text: m.text || "",
            description: m.description || m.title || "",
          }))}
        />
      )}

      {/* BANNER */}
      {banner && <SolutionsBanner data={banner} />}
    </main>
  );
}
