import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import whoHealthImg from "@/assets/who-health.jpg";
import whoMobilityImg from "@/assets/who-mobility.jpg";

const tabs = [
  { key: "ideal", label: "Ideal for someone who" },
  { key: "not", label: "Not ideal for someone who wants" },
];

const WhoSection = () => {
  const [active, setActive] = useState("ideal");

  return (
    <section className="py-20 md:py-28 bg-accent">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              ✦ Who
            </span>
            <h2 className="text-3xl md:text-4xl text-accent-foreground">Who this For</h2>
          </div>
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === tab.key
                    ? "bg-section-dark text-primary-foreground"
                    : "border border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-background rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img src={whoHealthImg} alt="Values health" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-foreground text-xl mb-3">
                {active === "ideal"
                  ? "Values health and longevity over quick fixes"
                  : "Only wants extreme high-intensity training"}
              </h3>
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-background rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img src={whoMobilityImg} alt="Mobility support" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-foreground text-xl">
                {active === "ideal"
                  ? "Wants support with mobility, stability, or strength"
                  : "Prefers to train without guidance or structure"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
