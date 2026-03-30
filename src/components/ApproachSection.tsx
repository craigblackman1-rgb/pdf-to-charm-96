import privateImg from "@/assets/approach-private.jpg";
import flexibleImg from "@/assets/approach-flexible.jpg";
import consistencyImg from "@/assets/approach-consistency.jpg";

const approaches = [
  {
    image: privateImg,
    title: "Private 1-to-1 studio",
    subtitle: "No gym floor. No other clients. No pressure to look or perform a certain way.",
  },
  {
    image: flexibleImg,
    title: "Adapts when your health changes",
    subtitle: "If your condition changes, your programme changes with it. You never fall behind.",
  },
  {
    image: consistencyImg,
    title: "Long-term over quick fixes",
    subtitle: "Real results come from steady, sustainable progress — not six-week transformations.",
  },
];

const bottomCards = [
  {
    title: "Qualified to work with complex needs",
    desc: "I am a Level 4 personal trainer with specialist qualifications in exercise referral and cancer rehabilitation — rare at any fitness setting.",
  },
  {
    title: "No judgement. No agenda.",
    desc: "No weigh-ins, no before-and-after photos, no expectation of what fitness should look like. Just you and me, and a programme built for your body.",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              ✦ The Approach
            </span>
            <h2 className="text-3xl md:text-4xl text-foreground">
              This Is Not Like<br />Other Personal Training
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-base max-w-sm md:pt-8">
            I am trained to adapt to medical conditions, medication effects, fatigue, and variable capacity. I do not guess — I ask, I listen, and I adjust. Every single session.
          </p>
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {approaches.map((item) => (
            <div key={item.title} className="bg-muted rounded-2xl overflow-hidden shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-foreground text-lg mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-base">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {bottomCards.map((card) => (
            <div key={card.title} className="bg-muted rounded-2xl p-6 shadow-md">
              <h4 className="text-foreground text-lg mb-2">{card.title}</h4>
              <p className="text-muted-foreground text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
