import { BloodCrisis } from "@/components/Homepage/BloodCrisis";
import { Credibility } from "@/components/Homepage/Credibility";
import { CTA } from "@/components/Homepage/CTA";
import { Features } from "@/components/Homepage/Features";
import { Footer } from "@/components/Homepage/Footer";
import { HealthcareAccessGap } from "@/components/Homepage/HealthcareAccessGap";
import { HealthcareChallenge } from "@/components/Homepage/HealthcareChallenge";
import { HealthCrisisBridge } from "@/components/Homepage/HealthCrisisBridge";
import { Hero } from "@/components/Homepage/Hero";
import { HowItWorks } from "@/components/Homepage/HowItWorks";
import { Impact } from "@/components/Homepage/Impact";
import { MissionVision } from "@/components/Homepage/MissionVision";
import { OceanAIFeatures } from "@/components/Homepage/OceanAIFeatures";
import Image from "next/image";

export default function Home() {
  return (
     <div className="min-h-screen bg-white">
      <Hero />
      <HealthcareAccessGap />
      <HealthCrisisBridge />
      <BloodCrisis />
      <MissionVision />
      <Features />
      <OceanAIFeatures />
      <HealthcareChallenge />
      <HowItWorks />
      <Impact />
      <Credibility />
      <CTA />
      <Footer />
    </div>
  );
}
