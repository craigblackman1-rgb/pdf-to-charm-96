import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was so nervous about starting, but from the first session Esther put me at ease. She listened, adapted everything, and I've never felt stronger or more confident.",
    name: "Mary Cook",
    location: "Los Angeles",
  },
  {
    quote:
      "As someone who's dealt with chronic pain for years, I was sceptical. But the personalised approach at Eternal Fitness has genuinely changed my quality of life. I can't recommend it enough.",
    name: "Angela Mark",
    location: "Los Angeles",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            ✦ Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            What they say<br />about us?
          </h2>
          <p className="text-muted-foreground font-body text-base mb-8">
            Finding progress is something to be genuinely celebrated. And knowing that the people I work with or train go out and thrive is what keeps me going every day.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Read Their Stories <ArrowUpRight className="w-4 h-4" />
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
                  <p className="text-muted-foreground text-xs">{t.location}</p>
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
