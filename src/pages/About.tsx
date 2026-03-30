import { ArrowUpRight, Award, HeartHandshake, Users } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Esther Fair",
    "jobTitle": "Level 4 Personal Trainer",
    "description": "Level 4 personal trainer, exercise referral specialist, and cancer rehabilitation qualified. Based in a private studio in Worthing, West Sussex.",
    "url": "https://eternalfitness.co.uk/about",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Eternal Fitness",
      "@id": "https://eternalfitness.co.uk/#business"
    },
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "name": "Level 4 Personal Trainer" },
      { "@type": "EducationalOccupationalCredential", "name": "Exercise Referral Specialist" },
      { "@type": "EducationalOccupationalCredential", "name": "Cancer Rehabilitation Specialist" }
    ]
  }
};
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";

import aboutHero from "@/assets/about-hero.jpg";
import aboutPhilosophy from "@/assets/about-philosophy.jpg";
import estherAbout from "@/assets/esther-about.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import approachConsistency from "@/assets/approach-consistency.jpg";
import mobilityImg from "@/assets/mobility-movement.jpg";
import mindBodyImg from "@/assets/mind-body.jpg";

const qualifications = [
  {
    title: "Level 4 Personal Trainer",
    desc: "The highest level of personal training qualification in the UK — above the Level 3 held by most personal trainers. Registered with a recognised UK fitness body.",
    icon: Award,
  },
  {
    title: "Exercise Referral Specialist",
    desc: "Qualified to work with GP-referred clients and those with clinical conditions requiring adapted exercise programmes.",
    icon: HeartHandshake,
  },
  {
    title: "Cancer Rehabilitation",
    desc: "Specialist training to support people through cancer treatment and recovery, including those currently in active treatment.",
    icon: Award,
  },
];

const longTermCards = [
  {
    title: "The Power of Consistency",
    desc: "Small, steady actions repeated over time create lasting physical and mental change — without extremes.",
    image: approachConsistency,
  },
  {
    title: "Adapting When Things Change",
    desc: "Life and health are unpredictable. Your programme adapts with you, so progress never stops — it just looks different.",
    image: mobilityImg,
  },
  {
    title: "Real Outcomes, Not Aesthetics",
    desc: "Stronger, more capable, more comfortable in your body. These are the results that actually matter.",
    image: mindBodyImg,
  },
];

const About = () => {
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Esther Fair — Level 4 Personal Trainer in Worthing"
        description="Meet Esther Fair: Level 4 personal trainer, exercise referral specialist and cancer rehabilitation qualified. Private studio in Worthing, West Sussex. Specialist support for complex needs."
        canonical="/about"
        schema={aboutSchema}
      />
      <Navbar onBookConsultation={openDialog} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={aboutHero} alt="Esther Fair, Level 4 personal trainer in Worthing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/65" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
            About Me — and Why I Do This
          </h1>
          <p className="text-primary-foreground/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
            Level 4 personal trainer. Exercise referral specialist. Cancer rehabilitation qualified. I know first-hand what it feels like to start from zero.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
            </button>
            <a
              href="#story"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              My Story
            </a>
          </div>
        </div>
      </section>

      {/* Esther's Story */}
      <section id="story" className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              ✦ My Story
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-14">I Have Been Where You Are</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-5">
                I did not come to fitness from a place of confidence. There was a time when exercise felt inaccessible, intimidating, and simply not something that was meant for me. When that changed, it changed everything — my health, my mood, my sense of what was possible.
              </p>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-5">
                That experience is the reason I became a personal trainer. Not to help people lose weight or achieve an aesthetic ideal — but to help people feel stronger, more capable, and more at home in their own bodies.
              </p>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
                I qualified to Level 4 — the highest personal training qualification in the UK — specifically to work with people who have more complex needs: exercise referral, cancer rehabilitation, and clients whose situations have led other trainers to say they cannot help. Those are exactly the clients I am here for.
              </p>
              <button
                onClick={openDialog}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <img
              src={estherAbout}
              alt="Esther Fair, personal trainer at Eternal Fitness Worthing"
              loading="lazy"
              className="rounded-2xl w-full h-[460px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              ✦ Qualifications
            </span>
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">Qualified to Help Where Others Cannot</h2>
            <p className="text-muted-foreground font-body text-base max-w-2xl mx-auto">
              Most personal trainers hold a Level 3 qualification. I hold Level 4 — alongside specialist certifications that are rare in any fitness setting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {qualifications.map((q) => (
              <div key={q.title} className="bg-background rounded-2xl p-6 border border-border shadow-md">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <q.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h4 className="text-foreground text-lg mb-2">{q.title}</h4>
                <p className="text-muted-foreground font-body text-base leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Esther Works With */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              ✦ Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-foreground text-center mb-6">Experience Across the Full Range of Human Complexity</h2>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-5">
              Over the years, I have worked with clients that most personal trainers would not know how to support — people managing serious and complex health conditions, people going through cancer treatment, people with physical disabilities, clients with significant visual impairment, and people whose gender identity or physical goals do not fit neatly into the mainstream fitness mould.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              I mention this not to boast, but because you might be wondering whether your situation is too complicated, too unusual, or too much. It almost certainly is not. I treat every client as an individual, and every programme is built from scratch — with complete respect for whatever your body, health, identity, or history looks like.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-accent/10 rounded-2xl px-6 py-4 max-w-xl">
              <Users className="w-5 h-5 text-accent shrink-0" />
              <p className="text-foreground font-body text-base leading-relaxed">
                If you are wondering whether your situation is too complex — please get in touch. The answer is almost always yes, I can help.
              </p>
            </div>
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
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-5">
                Eternal Fitness is not a weight loss service. It is not about transforming your body into something it is not. It is about finding out what your body is capable of — right now, with everything it is currently dealing with — and building steadily from there.
              </p>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                The goal is not a six-week result. It is feeling stronger at sixty than you did at fifty. Being able to pick something up off the floor without pain. Having the energy to do the things you love. Moving through life with more ease and confidence than before. That takes time, consistency, and working with someone who genuinely understands your body and adjusts when things change. That is what I do.
              </p>
              <div className="bg-background rounded-2xl p-5 mb-6 border border-border shadow-md">
                <h4 className="text-foreground mb-2">More Than a Workout</h4>
                <p className="text-muted-foreground font-body text-base leading-relaxed">
                  No weigh-ins. No before-and-after photos. No pressure to look a certain way. Just steady, meaningful progress — measured against your own baseline, not anyone else's.
                </p>
              </div>
              <button
                onClick={openDialog}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <img
              src={aboutPhilosophy}
              alt="Personal training philosophy at Eternal Fitness Worthing"
              loading="lazy"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
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
            <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4">A Private Space in Worthing</h2>
            <p className="text-primary-foreground/70 font-body text-base max-w-2xl mx-auto">
              Sessions take place in a small, private, fully equipped studio. No public gym floor. No other clients watching. No ambient pressure of what anyone else around you is doing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <img src={studio1} alt="Eternal Fitness private training studio Worthing" loading="lazy" className="rounded-2xl w-full h-72 object-cover" />
            <img src={studio2} alt="Training equipment at Eternal Fitness Worthing" loading="lazy" className="rounded-2xl w-full h-72 object-cover" />
          </div>

          <div className="bg-accent rounded-2xl p-6 md:p-8 max-w-2xl shadow-md">
            <h4 className="text-accent-foreground text-lg mb-2">Built for All Abilities</h4>
            <p className="text-accent-foreground/80 font-body text-base leading-relaxed">
              The studio is set up to accommodate a wide range of abilities and mobility levels. Equipment is chosen to support functional movement — not performance aesthetics. The environment is deliberately calm, because the last thing most clients need is more noise.
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
                ✦ Long-Term Progress
              </span>
              <h2 className="text-3xl md:text-4xl text-foreground">Why the Long-Term Approach Matters</h2>
            </div>
            <p className="text-muted-foreground font-body text-base max-w-md">
              Quick fixes do not work. Sustainable change does — and Eternal Fitness is built around that belief.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {longTermCards.map((card) => (
              <div key={card.title} className="border border-border rounded-2xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={card.image} alt={card.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="text-foreground text-lg mb-2">{card.title}</h4>
                  <p className="text-muted-foreground font-body text-base">{card.desc}</p>
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
