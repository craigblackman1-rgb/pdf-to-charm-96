import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was so nervous about starting, but from the first session Esther put me at ease. She listened, adapted everything to my condition, and I have never felt stronger or more confident in my own body.",
    name: "Mary C",
    detail: "Worthing",
  },
  {
    quote:
      "As someone who has dealt with chronic pain for years, I was sceptical that exercise could help. The personalised approach at Eternal Fitness has genuinely changed my quality of life. I cannot recommend it enough.",
    name: "Angela M",
    detail: "West Sussex",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            ✦ Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground font-body text-base mb-8">
            Progress looks different for everyone. For some it is lifting more, for others it is walking without pain, sleeping better, or simply feeling at home in their own body. Those are the results that matter here.
          </p>
          <a
            href="/faqs"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Read the FAQs <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right - quote cards */}
        <div className="space-y-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-muted rounded-2xl p-6">
              <div className="text-primary text-3xl mb-3 font-display">"</div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-5">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
