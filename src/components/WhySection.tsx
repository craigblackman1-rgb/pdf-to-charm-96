import mobilityImg from "@/assets/mobility-movement.jpg";
import strengthImg from "@/assets/strength-tasks.jpg";
import mindBodyImg from "@/assets/mind-body.jpg";

const cards = [
  { title: "Mobility and functional movement", image: mobilityImg },
  { title: "Strength for everyday tasks", image: strengthImg },
  { title: "Mind-body wellbeing", image: mindBodyImg },
];

const WhySection = () => {
  return (
    <section id="why" className="py-20 md:py-28 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              ✦ Focus
            </span>
            <h2 className="text-3xl md:text-4xl text-foreground">Why Eternal Fitness?</h2>
          </div>
          <p className="text-muted-foreground font-body text-base max-w-md md:pt-8">
            At Eternal Fitness, our primary mission is to create a body that supports daily life — walking, playing with kids, lifting groceries, recovering from injury, or feeling at ease in your skin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-primary-foreground text-lg">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
