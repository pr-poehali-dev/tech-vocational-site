import HeroSection from "@/components/sections/HeroSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SpecialtiesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
