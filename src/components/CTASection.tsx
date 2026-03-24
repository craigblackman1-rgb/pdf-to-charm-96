import { ArrowUpRight } from "lucide-react";
import ctaImg from "@/assets/cta-gym.jpg";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[420px]">
        {/* Image */}
        <div className="relative h-64 md:h-auto">
          <img
            src={ctaImg}
            alt="Personal training session"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-accent flex items-center px-8 md:px-16 py-12 md:py-0">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-accent-foreground leading-tight mb-4">
              Book a Personal Training Session in Worthing
            </h2>
            <p className="text-accent-foreground/80 font-body text-base mb-8 max-w-md">
              Ready to move better, feel stronger, and rebuild confidence in your body? Book your initial consultation today from our private, fully equipped Worthing studio.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book Now <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="tel:07517658128"
                className="inline-flex items-center gap-2 border border-accent-foreground/40 text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent-foreground/10 transition-colors"
              >
                Speak to Esther <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
