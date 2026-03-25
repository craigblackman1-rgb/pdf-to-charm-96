import { ArrowUpRight, Dumbbell, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";

import aboutHero from "@/assets/about-hero.jpg";
import aboutPhilosophy from "@/assets/about-philosophy.jpg";
import coachPatricia from "@/assets/coach-patricia.jpg";
import coachSarah from "@/assets/coach-sarah.jpg";
import coachJohn from "@/assets/coach-john.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";

const coaches = [
  {
    name: "Patricia Doyle",
    role: "Head Coach & Founder",
    desc: "Patricia is the founder and lead coach at Eternal Fitness. With years of experience in personal training, she's passionate about helping individuals improve their health.",
    img: coachPatricia,
  },
  {
    name: "Sarah O'Brien",
    role: "Strength & Mobility Coach",
    desc: "Sarah specialises in functional movement and strength training, helping clients build confidence through safe, progressive programming.",
    img: coachSarah,
  },
  {
    name: "John Doyle",
    role: "Wellness & Rehab Coach",
    desc: "John focuses on injury recovery and long-term wellness, supporting clients through rehabilitation with patience and expertise.",
    img: coachJohn,
  },
];

const longTermCards = [
  {
    title: "The Power of Consistency",
    desc: "Small, steady actions repeated over time create lasting physical and mental change.",
  },
  {
    title: "Commitment to Your Goals",
    desc: "We help you stay accountable and motivated through every phase of your journey.",
  },
  {
    title: "Achieving Sustainable Change",
    desc: "Real results come from habits that fit your lifestyle, not extreme short-term fixes.",
  },
];

const About = () => {
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookConsultation={openDialog} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={aboutHero} alt="About Eternal Fitness" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/65" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
            Unlock Your Strength. Transform Your Health.
          </h1>
          <p className="text-primary-foreground/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
            At Eternal Fitness, we focus on sustainable fitness and long-term well-being, empowering you to achieve real progress without extremes. Private, personalised training tailored just for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book an Initial Consultation
            </button>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Our Goals
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              ✦ Introduction
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-14">Introduction</h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Dumbbell className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h4 className="text-foreground text-lg mb-2">Eternal Fitness</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Eternal Fitness is a privately owned personal training studio based in Worthing, dedicated to supporting long-term health, movement, and wellbeing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h4 className="text-foreground text-lg mb-2">Our Focus</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Is on helping people build strength, mobility, and confidence without the pressure of a busy fitness environment. We believe that real change takes time and consistency, and we're here to guide you on that journey.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book Now <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                ✦ Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl text-foreground leading-tight mb-6">The Philosophy</h2>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                At Eternal Fitness, our training philosophy is simple: sustainability, confidence, and respect for the body. We don't chase trends or focus on short-term weight loss; instead, we prioritise long-lasting progress for life without limits.
              </p>
              <div className="bg-background rounded-2xl p-5 mb-6 border border-border">
                <h4 className="text-foreground mb-2">More Than a Workout</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  It's about finding joy in your own skin, developing healthy habits that fit far beyond the gym.
                </p>
              </div>
              <button
                onClick={openDialog}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book Now <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <img
              src={aboutPhilosophy}
              alt="Our training philosophy"
              loading="lazy"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet Your Coach */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            ✦ Coaching
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">Meet Your Coach</h2>
          <p className="text-muted-foreground font-body text-base mb-14 max-w-2xl mx-auto">
            I hold certifications in [relevant certifications] and I've worked with a wide range of clients — from beginners to seasoned athletes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div key={coach.name} className="text-center">
                <img
                  src={coach.img}
                  alt={coach.name}
                  loading="lazy"
                  className="w-full h-72 object-cover rounded-2xl mb-4"
                />
                <h4 className="text-foreground text-lg">{coach.name}</h4>
                <p className="text-primary text-sm mb-2">{coach.role}</p>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">{coach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Studio */}
      <section className="py-20 md:py-28 bg-section-dark">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              ✦ Studio
            </span>
            <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4">The Studio</h2>
            <p className="text-primary-foreground/70 font-body text-base max-w-2xl mx-auto">
              Our private studio in Worthing offers a calm, welcoming environment where you can focus on your goals without distractions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <img src={studio1} alt="Studio interior" loading="lazy" className="rounded-2xl w-full h-72 object-cover" />
            <img src={studio2} alt="Studio equipment" loading="lazy" className="rounded-2xl w-full h-72 object-cover" />
          </div>

          <div className="bg-accent rounded-2xl p-6 md:p-8 max-w-2xl">
            <h4 className="text-accent-foreground text-lg mb-2">Ability and Comfort</h4>
            <p className="text-accent-foreground/80 font-body text-sm leading-relaxed">
              We keep it small, ensuring that each client receives the attention they deserve. It's your space to train safely, with equipment that supports all levels of ability and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Why Long-Term Matters */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                ✦ Results
              </span>
              <h2 className="text-3xl md:text-4xl text-foreground">Why Long-Term Matters</h2>
            </div>
            <p className="text-muted-foreground font-body text-base max-w-md">
              At Eternal Fitness, we believe in lasting results through consistent effort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {longTermCards.map((card) => (
              <div key={card.title} className="border border-border rounded-2xl overflow-hidden">
                <div className="h-48 bg-muted" />
                <div className="p-5">
                  <h4 className="text-foreground text-base mb-2">{card.title}</h4>
                  <p className="text-muted-foreground font-body text-sm">{card.desc}</p>
                </div>
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

export default About;
