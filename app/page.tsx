"use client"
import SceneCanvas from "@/components/canvas/SceneCanvas";
import Nav from "@/components/ui/Nav";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Hero from "@/components/sections/Hero";
import CrisisStats from "@/components/sections/CrisisStats";
import AccessGap from "@/components/sections/AccessGap";
import Features from "@/components/sections/Features";
import TechArchitecture from "@/components/sections/TechArchitecture";
import Market from "@/components/sections/Market";
import BusinessModel from "@/components/sections/BusinessModel";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <SceneCanvas />
      <ScrollProgressBar />
      <Nav />
      <main id="main-content">
        <Hero />
        <CrisisStats />
        <AccessGap />
        <Features />
        <TechArchitecture />
        <Market />
        <BusinessModel />
        <Team />
        <CTA />
      </main>
    </>
  );
}