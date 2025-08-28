import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AwardsSection from "@/components/AwardsSection";
import TuitionSection from "@/components/TuitionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <AwardsSection />
      <TuitionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
