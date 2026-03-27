import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import TutorialsSection from "@/components/TutorialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import MarqueeSection from "@/components/MarqueeSection";
import TwoColumnCTA from "@/components/TwoColumnCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <StepsSection />
      <TutorialsSection />
      <ResourcesSection />
      <MarqueeSection />
      <TwoColumnCTA />
      <Footer />
    </div>
  );
};

export default Index;
