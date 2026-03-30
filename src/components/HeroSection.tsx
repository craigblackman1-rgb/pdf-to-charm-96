import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

interface HeroSectionProps {
  onBookConsultation?: () => void;
}

const HeroSection = ({ onBookConsultation }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
      <img
        src={heroImg}
        alt="Esther Fair, Level 4 personal trainer at Eternal Fitness Worthing"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay/65" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6 pt-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
            Fitness That Works for Your Body — Whatever It Is Dealing With
          </h1>
          <p className="text-primary-foreground/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
            I offer private, one-to-one personal training in Worthing for people with health conditions, injuries, mobility challenges, and those who have been told fitness is not for them. No pressure. No judgement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
            </button>
            <a
              href="#why"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Find Out How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Social proof bar */}
      <div className="relative z-10 px-6 pb-8 pt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 border border-primary-foreground/10 shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary text-xl font-bold">4</span>
            </div>
            <div>
              <p className="text-primary-foreground font-bold text-xl">Level 4 Qualified</p>
              <p className="text-primary-foreground/60 text-sm">The highest personal training qualification in the UK — plus exercise referral and cancer rehabilitation. That is what I bring to every session.</p>
            </div>
          </div>
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-5 border border-primary-foreground/10 shadow-md">
            <p className="text-primary-foreground/80 text-base italic mb-2">
              "As someone who has dealt with chronic pain for years, I was sceptical. But the personalised approach has genuinely changed my quality of life."
            </p>
            <p className="text-primary-foreground font-semibold text-sm">Angela M · <span className="text-primary-foreground/50">Worthing client</span></p>
          </div>
          <div className="bg-primary rounded-2xl p-5 flex flex-col justify-center shadow-md">
            <h4 className="text-primary-foreground text-lg mb-1">Free Consultation</h4>
            <p className="text-primary-foreground/80 text-sm">Every new client starts with a free 30-minute conversation with me. No commitment, no sales pitch.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
