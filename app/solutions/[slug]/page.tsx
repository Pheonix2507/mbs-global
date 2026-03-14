import SolutionsHero from "@/components/sections/SolutionsHero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import SolutionsSplit from "@/components/sections/SolutionsSplit";
import SolutionGlassmorphism from "@/components/sections/SolutionGlassmorphism";
import SolutionAnimatedFeatures from "@/components/sections/SolutionAnimatedFeatures";
import SolutionCarousel from "@/components/sections/SolutionCarousel";
import { fetchStrapi } from "@/lib/strapi";

const SLUG_TO_ENDPOINT: Record<string, string> = {
  "workspace-solution": "/workspace-solution",
  "operative-managements": "/operative-management",
  "strategic-consulting": "/strategic-consulting",
  innovation: "/innovation",
  "total-talent-solution": "/total-talent-solution",
};

export default async function SolutionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const endpoint = SLUG_TO_ENDPOINT[slug];
  let strapiData: any = null;

  if (endpoint) {
    try {
      // populate is now automatically handled by fetchStrapi using population-map.json
      const response = await fetchStrapi<{ data: any }>(endpoint);
      strapiData = response.data;
    } catch (error) {
      console.error(`Error fetching dynamic solution data for ${slug}:`, error);
    }
  }

  // Render the glassmorphism component for specific slugs
  const showGlassmorphism = [
    "workspace-solution",
    "operative-managements",
    "strategic-consulting",
    "innovation",
  ].includes(slug);

  // Render the carousel for the specific slug
  const showCarousel = slug === "strategic-consulting";

  // Render animated features for specific slugs
  const showAnimatedFeatures = ["innovation", "operative-managements"].includes(
    slug,
  );

  const heroData = Array.isArray(strapiData?.hero_section) 
    ? strapiData?.hero_section[0] 
    : (strapiData?.hero_section || strapiData?.hero);

  // Map Pillar/Grid data based on slug
  let gridRawData: any = null;
  let gridTitle: string | undefined = undefined;

  switch (slug) {
    case "workspace-solution":
      gridRawData = strapiData?.Workspaces_pillar?.pillar_element;
      gridTitle = strapiData?.title_subtile?.title;
      break;
    case "operative-managements":
      gridRawData = strapiData?.Global_Efficiency?.pillar_element;
      gridTitle = strapiData?.title_subtile?.title;
      break;
    case "strategic-consulting":
      gridRawData = strapiData?.Strategic_Excellence?.pillar_element;
      gridTitle = "Strategic Excellence";
      break;
    case "innovation":
      // Flattening Concept_to_Reality title_subtile_image items
      gridRawData = Array.isArray(strapiData?.Concept_to_Reality)
        ? strapiData.Concept_to_Reality.flatMap((item: any) => item.title_subtile_image)
        : strapiData?.Concept_to_Reality?.title_subtile_image;
      gridTitle = strapiData?.Concept_to_Reality?.[0]?.title || "Concept to Reality";
      break;
    case "total-talent-solution":
      gridRawData = strapiData?.MBS_Lifecycle?.pillar_element;
      gridTitle = "MBS Lifecycle";
      break;
  }

  // Common mapping for grid items
  const mappedGridData = Array.isArray(gridRawData)
    ? gridRawData.map((item: any) => {
        // Handle different structures (Workspaces_pillar vs innovation others)
        const itemTitle = item.title || item.title_subtile?.title || "";
        const itemImage = item.image || item.background_image || item.icon || item.side_image;
        
        let points = [];
        if (Array.isArray(item.points)) {
          points = item.points;
        } else if (item.title_subtile?.subtitle) {
          points = [
            {
              title: "",
              description: item.title_subtile.subtitle,
            },
          ];
        } else if (item.subtitle || item.description) {
           points = [
            {
              title: "",
              description: item.subtitle || item.description || "",
            },
          ];
        }

        return {
          title: itemTitle,
          image: itemImage,
          points: points,
        };
      })
    : undefined;

  return (
    <main className="min-h-screen pt-20">
      <SolutionsHero data={heroData} />
      {showGlassmorphism && (
        <SolutionGlassmorphism 
          slug={slug} 
          data={slug === "innovation" ? { 
            title: strapiData?.Toolkit?.title, 
            description: strapiData?.Toolkit?.pillar_element?.[0]?.title 
          } : undefined} 
        />
      )}
      {showAnimatedFeatures && (
        <SolutionAnimatedFeatures 
          slug={slug} 
          data={slug === "innovation" ? strapiData?.innovation : undefined} 
        />
      )}
      <SolutionsGrid title={gridTitle} data={mappedGridData} />
      {showCarousel && <SolutionCarousel />}
      <SolutionsSplit data={slug === "innovation" ? strapiData?.banner?.[0] : undefined} />
    </main>
  );
}
