import Hero from "@/components/home/Hero";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import TechStack from "@/components/home/TechStack";
import InvestorSection from "@/components/home/InvestorSection";
import DownloadCTA from "@/components/home/DownloadCTA";

export default function HomePage() {
  return (
    // id for skip-to-content accessibility link
    <div id="main-content">
      <Hero />
      <FeaturesGrid />
      <TechStack />
      <InvestorSection />
      <DownloadCTA />
    </div>
  );
}
