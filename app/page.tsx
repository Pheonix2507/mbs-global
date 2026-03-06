import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Values from "@/components/sections/Values";
import Offerings from "@/components/sections/Offerings";
import Competencies from "@/components/sections/Competencies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Services />
      <Offerings />
      <Values />
      <Competencies />
      <Contact />
    </main>
  );
}
