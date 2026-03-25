import { ArrowUpRight, ChevronLeft, ChevronRight, ClipboardList, Search, BarChart3, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";
import ptHero from "@/assets/pt-hero.jpg";
import approachPrivate from "@/assets/approach-private.jpg";
import strengthImg from "@/assets/strength-tasks.jpg";
import specialise1 from "@/assets/specialise-1.jpg";
import specialise2 from "@/assets/specialise-2.jpg";

const sessionImages = [specialise2, specialise1];

const focusCards = [
  {
    title: "Mobility and joint health",
    desc: "Improve range of motion, reduce stiffness, and move with less effort day-to-day.",
  },
  {
    title: "Functional strength",
    desc: "Build practical strength for lifting, carrying, climbing stairs, and everyday tasks.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Consultation",
    desc: "We discuss your goals, lifestyle, concerns, and what \"progress\" should look like for you.",
  },
  {
    icon: Search,
    title: "Assessment",
    desc: "We check movement basics, mobility, strength foundations, and any limitations so training starts safely and clearly.",
  },
  {
    icon: BarChart3,
    title: "Personalised Plan",
    desc: "You get a simple, realistic plan built around your body and routine, with clear session structure and progression.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "We coach, adjust, and refine as you improve, keeping training sustainable, motivating, and aligned.",
  },
];

const PersonalTraining = () => {
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookConsultation={openDialog} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={ptHero} alt="Personal Training in Worthing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
            Personal Training in Worthing, Built for the Long Term
          </h1>
          <p className="text-primary-foreground/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
            Private 1:1 coaching focused on strength, mobility, and confidence in movement. No extremes. No pressure. Just steady progress that fits real life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
            </button>
            <a href="#what" className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* What Is Personal Training */}
      <section id="what" className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            ✦ Personal Training
          </span>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-foreground leading-tight mb-6">
                What Is Personal Training at Eternal Fitness?
              </h2>
              <div className="flex gap-4 mb-6">
                <img src={approachPrivate} alt="Training session" loading="lazy" className="w-24 h-32 rounded-xl object-cover shrink-0" />
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Personal Training at Eternal Fitness is a private, calm, studio-based experience built around long-term wellbeing, not quick transformations. Unlike traditional gym personal training that can feel rushed, crowded, or performance-focused, our sessions are intentionally personalised and paced to suit your body, lifestyle, and confidence level.
                </p>
              </div>
              <button
                onClick={openDialog}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book Now <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={strengthImg} alt="Strength training" loading="lazy" className="rounded-2xl w-full h-64 object-cover" />
              <img src={specialise1} alt="Mobility training" loading="lazy" className="rounded-2xl w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* What Sessions Focus On */}
      <section className="py-20 md:py-28 bg-section-dark">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                ✦ Sessions
              </span>
              <h2 className="text-3xl md:text-4xl text-primary-foreground leading-tight mb-4">
                What Sessions Focus On
              </h2>
              <p className="text-primary-foreground/70 font-body text-base mb-6">
                Mobility and joint health. Improve range of motion, reduce stiffness, and move with less effort day-to-day.
              </p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {sessionImages.map((img, i) => (
                <img key={i} src={img} alt="Training session" loading="lazy" className="rounded-2xl w-full h-52 object-cover" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {focusCards.map((card) => (
              <div key={card.title} className="bg-accent rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center mb-4">
                  <span className="text-accent-foreground text-lg">✦</span>
                </div>
                <h4 className="text-accent-foreground text-lg mb-2">{card.title}</h4>
                <p className="text-accent-foreground/70 font-body text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            ✦ How It Works
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-14">How It Works</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full border-4 border-muted bg-accent/10 flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <h4 className="text-foreground text-base mb-2">{step.title}</h4>
                <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onBookConsultation={openDialog} />
      <Footer />
      <ConsultationDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default PersonalTraining;
