import SolutionsHero from "@/components/sections/SolutionsHero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import SolutionsSplit from "@/components/sections/SolutionsSplit";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsSplit />
    </main>
  );
}
