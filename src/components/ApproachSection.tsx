import privateImg from "@/assets/approach-private.jpg";
import flexibleImg from "@/assets/approach-flexible.jpg";
import consistencyImg from "@/assets/approach-consistency.jpg";
import mindBodyImg from "@/assets/mind-body.jpg";

const approaches = [
  {
    image: privateImg,
    title: "Private 1-1 studio",
    subtitle: "No crowds. No pressure.",
  },
  {
    image: flexibleImg,
    title: "Flexible training plans",
    subtitle: "Individually tailored to fit your life.",
  },
  {
    image: consistencyImg,
    title: "Consistency over intensity",
    subtitle: "We're in it for your lasting wellbeing and routine.",
  },
];

const bottomCards = [
  {
    title: "Compassion-based coaching",
    desc: "As your compassion guide and mentor.",
  },
  {
    title: "Clear, achievable goals",
    desc: "Your next realistic milestone is always in sight and achievable.",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              ✦ Approach
            </span>
            <h2 className="text-3xl md:text-4xl text-foreground">
              The Eternal Fitness<br />Approach
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-base max-w-sm md:pt-8">
            A Personal Training Experience That Meets You Where You Are. You won't be rushed, judged, or compared. It's a journey — at a pace your mind, body, and spirit set.
          </p>
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {approaches.map((item) => (
            <div key={item.title} className="bg-muted rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-foreground text-base mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {bottomCards.map((card) => (
            <div key={card.title} className="bg-muted rounded-2xl p-6">
              <h4 className="text-foreground text-base mb-2">{card.title}</h4>
              <p className="text-muted-foreground text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
