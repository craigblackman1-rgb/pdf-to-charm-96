import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import SpecialiseSection from "@/components/SpecialiseSection";
import ApproachSection from "@/components/ApproachSection";
import WhoSection from "@/components/WhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";

const Index = () => {
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Eternal Fitness | Level 4 Personal Trainer in Worthing"
        description="Specialist one-to-one personal training in Worthing with Level 4 qualified trainer Esther Fair. Expert support for health conditions, cancer rehabilitation, disability and complex needs. Book a free consultation."
        canonical="/"
      />
      <Navbar onBookConsultation={openDialog} />
      <HeroSection onBookConsultation={openDialog} />
      <WhySection />
      <SpecialiseSection />
      <ApproachSection />
      <WhoSection />
      <TestimonialsSection />
      <CTASection onBookConsultation={openDialog} />
      <Footer />
      <ConsultationDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Index;
