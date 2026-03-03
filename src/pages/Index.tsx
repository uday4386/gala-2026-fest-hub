import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <EventsSection />
      <GuidelinesSection />
      <Footer />
    </div>
  );
};

export default Index;
