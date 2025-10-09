import { CategoriesSection } from "@/components/sections/categories";
import { FeaturedOpportunitiesSection } from "@/components/sections/featured-opportunities";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";

export default function Index() {
  return (
    <div className="space-y-20 pb-24">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedOpportunitiesSection />
    </div>
  );
}
