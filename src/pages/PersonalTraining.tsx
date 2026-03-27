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

const specialistAreas = [
  {
    title: "Cancer & cancer rehabilitation",
    desc: "During active treatment, in remission, or post-surgery. Esther is qualified in cancer rehabilitation and adapts to wherever you are in your journey.",
  },
  {
    title: "Chronic health conditions",
    desc: "Including autoimmune conditions, fibromyalgia, ME/CFS, heart conditions, diabetes, and more. Every session adapts to what your body can manage that day.",
  },
  {
    title: "Disability & adaptive training",
    desc: "Physical disabilities, significant mobility limitations, and sensory impairments including visual impairment. Programmes are built around your body, not a template.",
  },
  {
    title: "GP-referred exercise",
    desc: "Esther is qualified in exercise referral and experienced in working alongside medical guidance from GPs and healthcare teams.",
  },
  {
    title: "Injury recovery & rehabilitation",
    desc: "Post-surgical, post-fracture, and musculoskeletal conditions. Esther works within the guidance of your physiotherapist or consultant.",
  },
  {
    title: "Neurological conditions",
    desc: "Including Parkinson's, MS, stroke recovery, and acquired brain injury. Gentle, progressive, and always adapted.",
  },
];

const focusCards = [
  {
    title: "Mobility and joint health",
    desc: "Improving range of motion, reducing stiffness, and moving with less effort and pain day-to-day.",
  },
  {
    title: "Functional strength",
    desc: "Building practical strength for real life — carrying shopping, climbing stairs, getting up from the floor.",
  },
  {
    title: "Balance and stability",
    desc: "Reducing fall risk and building the physical confidence to move through your environment safely.",
  },
  {
    title: "Fatigue management",
    desc: "Learning how to train effectively when energy levels are variable or unpredictable — a common challenge with many health conditions.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Free Consultation",
    desc: "A relaxed 30-minute conversation about your goals, health history, and what has and has not worked before. No pressure, no commitment.",
  },
  {
    icon: Search,
    title: "Movement Assessment",
    desc: "Esther checks your current mobility, strength, and any limitations before any programme begins — so training starts safely and clearly.",
  },
  {
    icon: BarChart3,
    title: "Your Programme",
    desc: "A plan built entirely around your body and your life. Session structure, exercises, and intensity are all tailored specifically to you.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "Esther adjusts your programme as your health and capacity change — keeping training sustainable, realistic, and aligned with where you are.",
  },
];

const PersonalTraining = () => {
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookConsultation={openDialog} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={ptHero} alt="Personal training in Worthing for health conditions and complex needs" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
            Personal Training in Worthing Built Around Your Body and Your Life
          </h1>
          <p className="text-primary-foreground/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
            Private one-to-one sessions with a Level 4 specialist. Whether you have a complex health condition, a disability, an injury, or simply no idea where to start — there is a programme here for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
            </button>
            <a href="#what" className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              What Sessions Involve
            </a>
          </div>
        </div>
      </section>

      {/* What Personal Training at Eternal Fitness Actually Is */}
      <section id="what" className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            ✦ What to Expect
          </span>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-foreground leading-tight mb-6">
                This Is Not Like Other Personal Training
              </h2>
              <div className="flex gap-4 mb-6">
                <img src={approachPrivate} alt="Private one-to-one training session" loading="lazy" className="w-24 h-32 rounded-xl object-cover shrink-0" />
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Personal training at Eternal Fitness is not about pushing harder, going faster, or doing more. It is about finding what your body needs right now — and building a sustainable programme around that. Sessions are private, one-to-one, and held in a small studio in Worthing where there is no gym floor, no other clients watching, and no comparison to anyone else.
                </p>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Esther's background in exercise referral and cancer rehabilitation means she is trained to adapt to medical conditions, medication effects, fatigue, and variable capacity. She does not guess — she asks, she listens, and she adjusts.
              </p>
              <button
                onClick={openDialog}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={strengthImg} alt="Strength training for health and function" loading="lazy" className="rounded-2xl w-full h-64 object-cover" />
              <img src={specialise1} alt="Adapted personal training session Worthing" loading="lazy" className="rounded-2xl w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Areas */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              ✦ Specialist Areas
            </span>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">Who Esther Works With</h2>
            <p className="text-muted-foreground font-body text-base max-w-2xl mx-auto">
              Esther specialises in working with people who have been underserved by mainstream fitness. If your situation is not listed here, please still get in touch — the answer is almost always yes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialistAreas.map((area) => (
              <div key={area.title} className="bg-background rounded-2xl p-6 border border-border">
                <h4 className="text-foreground text-base mb-2">{area.title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sessions Focus On */}
      <section className="py-20 md:py-28 bg-section-dark">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                ✦ What We Work On
              </span>
              <h2 className="text-3xl md:text-4xl text-primary-foreground leading-tight mb-4">
                Strength and Capability for Real Life
              </h2>
              <p className="text-primary-foreground/70 font-body text-base mb-6">
                The focus is functional — building strength, mobility, and stamina that improves day-to-day life. Not aesthetics. Not performance metrics. Real outcomes: carrying shopping, climbing stairs, walking further, sleeping better, managing pain, regaining confidence in your own body.
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
                <img key={i} src={img} alt="Personal training session Worthing" loading="lazy" className="rounded-2xl w-full h-52 object-cover" />
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
            ✦ The Process
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

          <div className="mt-14">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation <ArrowUpRight className="w-4 h-4" />
            </button>
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
