import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutBooSection } from "@/components/sections/about-boo-section";
import { StatsSection } from "@/components/sections/stats-section";
import { StoryTimeline } from "@/components/sections/story-time-section";
import { LegacySection } from "@/components/sections/legacy-section";
import { MemoryWall } from "@/components/sections/memory-section";
import { FooterSection } from "@/components/sections/footer-section";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutBooSection />
      <StatsSection />
      <StoryTimeline />
      <LegacySection />
      <MemoryWall />
      <FooterSection />
    </div>
  );
}

export default App;
