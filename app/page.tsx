import Loader from "@/components/site/Loader";
import SiteNav from "@/components/site/SiteNav";
import SiteHero from "@/components/site/SiteHero";
import StatsSection from "@/components/site/StatsSection";
import AccessSection from "@/components/site/AccessSection";
import FeatureSection from "@/components/site/FeatureSection";
import TechSection from "@/components/site/TechSection";
import MarketSection from "@/components/site/MarketSection";
import BusinessSection from "@/components/site/BusinessSection";
import TeamSection from "@/components/site/TeamSection";
import CTASection from "@/components/site/CTASection";
import SiteFooter from "@/components/site/SiteFooter";

export default function HomePage() {
  return (
    <div className="oc-home">
      <Loader />
      <SiteNav />
      <main id="main-content">
        <SiteHero />
        <StatsSection />
        <AccessSection />
        <FeatureSection />
        <TechSection />
        <MarketSection />
        <BusinessSection />
        <TeamSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
