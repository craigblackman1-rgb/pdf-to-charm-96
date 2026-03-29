import { ArrowUpRight, Check, Heart, Dumbbell, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";
import heroImg from "@/assets/pricing-hero.jpg";
import valueImg from "@/assets/pricing-value.jpg";

const plans = [
  {
    name: "Single Session",
    price: "£45",
    per: "per session",
    popular: false,
    description: "Pay as you go. Ideal if you want to try a session before committing to a block.",
    features: [
      "60-minute one-to-one session",
      "Programme adapted to your needs",
      "Private studio in Worthing",
      "Full health and mobility assessment on first visit",
    ],
    cta: "Book a Free Consultation First",
  },
  {
    name: "Block of 12",
    price: "£480",
    per: "£40 per session",
    popular: true,
    description: "The most popular choice. Enough sessions to build real momentum and see meaningful change.",
    features: [
      "12 × 60-minute sessions",
      "Save £5 per session vs pay-as-you-go",
      "Programme review and adjustment included",
      "Private studio in Worthing",
      "Sessions used at your pace — no expiry pressure",
    ],
    cta: "Book a Free Consultation",
  },
  {
    name: "Block of 24",
    price: "£840",
    per: "£35 per session",
    popular: false,
    description: "Best value. For clients committed to long-term progress with complex or ongoing health needs.",
    features: [
      "24 × 60-minute sessions",
      "Save £10 per session vs pay-as-you-go",
      "Ongoing programme management",
      "Priority scheduling",
      "Private studio in Worthing",
    ],
    cta: "Book a Free Consultation",
  },
];

const valueProps = [
  {
    icon: Heart,
    title: "One person. One trainer. One focus.",
    description:
      "Every session is entirely about you — your body, your health history, your goals. There are no group classes, no generic programmes, and no one-size-fits-all approach.",
  },
  {
    icon: Dumbbell,
    title: "Qualified to work where others cannot",
    description:
      "Level 4 personal trainer with specialist qualifications in exercise referral and cancer rehabilitation. The price reflects expertise that is genuinely rare in any fitness setting.",
  },
  {
    icon: Target,
    title: "The first conversation is always free",
    description:
      "Every new client starts with a free 30-minute consultation. No commitment, no pressure. Esther will recommend which option makes sense for your situation — not the most expensive one.",
  },
];

const Pricing = () => {
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookConsultation={openDialog} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Personal training pricing Worthing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
            Straightforward pricing. No contracts. No surprises.
          </h1>
          <p className="text-primary-foreground/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
            Every client starts with a free consultation. From there, choose the level of commitment that suits your situation — and change it as your needs change.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
            </button>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Why the price is what it is */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ What You Are Investing In
            </span>
            <h2 className="text-3xl md:text-5xl text-foreground leading-tight mb-10">
              This is not a gym membership
            </h2>
            <div className="space-y-8">
              {valueProps.map((prop, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <prop.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground text-base mb-1">{prop.title}</h4>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[500px]">
            <img src={valueImg} alt="One-to-one personal training session Worthing" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 md:py-28 px-6 md:px-12 bg-section-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ Pricing
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl text-primary-foreground leading-tight mb-2">
                  Choose what works for you
                </h2>
                <p className="text-primary-foreground/60 font-body text-lg">
                  All sessions are 60 minutes, one-to-one, in a private studio in Worthing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? "bg-background border-2 border-accent"
                    : "bg-background border border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="mb-3">
                  <p className="text-muted-foreground font-body text-sm mb-2">{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm font-body">{plan.per}</p>
                </div>
                <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openDialog}
                  className={`w-full py-3 rounded-full font-medium text-sm transition-opacity hover:opacity-90 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-background/5 border border-primary-foreground/10 rounded-2xl p-6 max-w-2xl">
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              <strong className="text-primary-foreground">Not sure which to choose?</strong> Start with the free consultation. Esther will give you an honest recommendation based on your situation — not the most expensive option.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      <CTASection onBookConsultation={openDialog} />
      <Footer />
      <ConsultationDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Pricing;
