import { CapabilitySection } from "@/components/landing/capability-section";
import { FeatureSection } from "@/components/landing/feature-section";
import { GrowthSection } from "@/components/landing/growth-section";
import { LandingHeader } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { LoginSection } from "@/components/landing/login-section";

export default function Home() {
  return <main className="min-h-screen bg-white">
    <LandingHeader />
    <HeroSection />
    <CapabilitySection />
    <FeatureSection />
    <GrowthSection />
    <LoginSection />
  </main>;
}
