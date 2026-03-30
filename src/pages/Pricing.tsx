import { useState } from "react";
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
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    features: [
      "Basic growth audit (website + socials)",
      "1 platform recommendation plan",
      "1 ad concept + creative direction",
      "Keyword + competitor snapshot",
      "Starter reporting template",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 9,
    yearlyPrice: 90,
    popular: true,
    features: [
      "Everything in Starter",
      "Ad campaign setup + management",
      "2–4 creatives per month",
      "Weekly optimization + A/B testing",
      "Conversion tracking setup guidance",
      "Weekly performance report",
    ],
  },
  {
    name: "Scale",
    monthlyPrice: 29,
    yearlyPrice: 290,
    popular: false,
    features: [
      "Everything in Growth",
      "Advanced tracking",
      "Retargeting + lookalike audiences",
      "Monthly strategy call",
      "Multi-platform ads",
      "Priority chat support",
    ],
  },
];

const valueProps = [
  {
    icon: Heart,
    title: "Invest in Your Long-Term Health",
    description:
      "Your health is not a short-term purchase — it is a long-term investment in your energy, confidence, and overall quality of life. Prioritising wellness now pays dividends for years to come.",
  },
  {
    icon: Dumbbell,
    title: "Personalized Coaching That Works",
    description:
      "My pricing reflects personalised coaching focused on real, sustainable change — not quick fixes. You are paying for private sessions, tailored programmes, and expert guidance designed around your goals.",
  },
  {
    icon: Target,
    title: "Build Habits That Last",
    description:
      "Most importantly, you are investing in a process that develops strength, consistency, and lasting habits. After your consultation, I will recommend the right level of support to help you progress safely and effectively.",
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookConsultation={openDialog} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Personal training pricing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
            Simple pricing. Personal coaching. Real progress.
          </h1>
          <p className="text-primary-foreground/70 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
            My pricing reflects premium 1:1 support, tailored programming, and accountability that helps you build long-term results. I start with a free consultation so you only invest in what you actually need.
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
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* Investment in Your Wellbeing */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ Wellbeing That Pays Off
            </span>
            <h2 className="text-3xl md:text-5xl text-foreground leading-tight mb-10">
              Investment in Your Wellbeing
            </h2>
            <div className="space-y-8">
              {valueProps.map((prop, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <prop.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-foreground text-lg mb-1">{prop.title}</h4>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[500px]">
            <img src={valueImg} alt="Personal training session" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
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
                  Simple, Transparent Pricing
                </h2>
                <p className="text-primary-foreground/60 font-body text-lg">
                  No contracts. No surprise fees.
                </p>
              </div>
              <div className="flex bg-primary-foreground/10 rounded-full p-1">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    billing === "monthly"
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground/60 hover:text-primary-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    billing === "yearly"
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground/60 hover:text-primary-foreground"
                  }`}
                >
                  Yearly
                </button>
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
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display text-foreground">
                      ${billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-muted-foreground text-sm font-body">
                      /{billing === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                </div>
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
                  Choose Plan
                </button>
              </div>
            ))}
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
