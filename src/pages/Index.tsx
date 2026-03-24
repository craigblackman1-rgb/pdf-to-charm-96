import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
