import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Personal training at Eternal Fitness"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay/70" />

      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="font-display text-4xl md:text-6xl text-primary-foreground leading-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-primary-foreground/70 font-body text-lg md:text-xl mb-8 max-w-lg mx-auto">
          Reduce friction and answer common concerns. Reduce friction and answer common concerns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Book an Initial Consultation
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Visit the Studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
