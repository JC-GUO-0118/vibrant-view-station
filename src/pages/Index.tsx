import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TutorialsSection from "@/components/TutorialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TutorialsSection />
      <ResourcesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
