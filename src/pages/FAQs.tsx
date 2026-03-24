import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-gym.jpg";

const faqs = [
  {
    question: "Do I need to be fit to start?",
    answer:
      'Whether it\'s running, weightlifting, or yoga, every "expert" you see once had a Day 1 where they felt out of breath, clumsy, or weak. The gym (or the track, or the mat) is a laboratory for improvement, not a showroom for finished products.',
  },
  {
    question: "Is this suitable if I have an injury or medical condition?",
    answer:
      "Absolutely. We work with clients recovering from injuries, managing chronic conditions, and going through cancer rehabilitation. Every programme is tailored to your needs with input from your healthcare team when appropriate.",
  },
  {
    question: "How often should I train?",
    answer:
      "For most clients, 2–3 sessions per week delivers excellent results. We'll design a schedule that fits your lifestyle and recovery needs, ensuring sustainable progress without burnout.",
  },
  {
    question: "Do you offer short-term programmes?",
    answer:
      "Yes. While we recommend committing to at least 12 weeks for meaningful change, we offer flexible packages including 4-week and 8-week options to suit your goals and budget.",
  },
  {
    question: "Where is the studio located?",
    answer:
      "Our private, fully equipped studio is located in Worthing, West Sussex. Contact us for the exact address and directions.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Frequently Asked Questions" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/70 font-body text-lg md:text-xl mb-8 max-w-lg mx-auto">
            Reduce friction and answer common concerns. Reduce friction and answer common concerns.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Book an Initial Consultation
            </a>
            <a href="#faq" className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              Visit the Studio
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ Specialise
            </span>
            <h2 className="text-3xl md:text-5xl text-foreground leading-tight mb-4">
              Frequently asked question
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Reduce friction and answer common concerns.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book Now <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-body text-foreground text-left text-base py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default FAQs;
