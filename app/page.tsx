import Hero from "@/components/sections/Hero";
import AboutCompany from "@/components/sections/AboutCompany";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Values from "@/components/sections/Values";
import Offerings from "@/components/sections/Offerings";
import Competencies from "@/components/sections/Competencies";
import WorldMap from "@/components/sections/WorldMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutCompany />
      <Services />
      <Offerings />
      <Values />
      <Competencies />
      <Contact />
      <WorldMap />
    </main>
  );
}
