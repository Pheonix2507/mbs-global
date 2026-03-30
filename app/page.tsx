import Hero from "@/components/sections/Hero";
import AboutCompany from "@/components/sections/AboutCompany";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Values from "@/components/sections/Values";
import Offerings from "@/components/sections/Offerings";
import Competencies from "@/components/sections/Competencies";
import WorldMap from "@/components/sections/WorldMap";
import { fetchStrapi } from "@/lib/strapi";
import { StrapiHome } from "@/lib/strapi-types";

export default async function Home() {
  const response = await fetchStrapi<{ data: StrapiHome }>("/home");
  const homeData = response.data;

  return (
    <main className="flex min-h-screen flex-col">
      <Hero data={homeData?.hero} />
      <AboutCompany data={homeData?.impact_count} />
      <Services data={homeData?.co_person} />
      <Offerings data={homeData?.Core_Offerings_components} />
      <Values data={homeData?.core_value_component} />
      <Competencies data={homeData?.Technical_Competencies_component} />
      <Contact data={homeData?.banner} />
      <WorldMap data={homeData?.location} />
    </main>
  );
}
