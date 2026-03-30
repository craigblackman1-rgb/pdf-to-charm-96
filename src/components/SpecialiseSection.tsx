import s1 from "@/assets/specialise-1.jpg";
import s2 from "@/assets/specialise-2.jpg";
import s3 from "@/assets/specialise-3.jpg";

const SpecialiseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-accent">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            ✦ Specialist Areas
          </span>
          <h2 className="text-3xl md:text-4xl text-accent-foreground mb-3">Who Esther Works With</h2>
          <p className="text-accent-foreground/70 font-body text-base max-w-2xl mx-auto">
            Cancer rehabilitation. Chronic health conditions. Disability and adaptive training. Neurological conditions. GP-referred exercise. Injury recovery. Older adults. People who have never felt welcome in a gym. If your situation is not listed — please still get in touch. The answer is almost always yes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {[
            { src: s1, label: "Cancer Rehabilitation", desc: "Specialist support during treatment, in remission, and post-surgery.", offset: "md:mt-0" },
            { src: s2, label: "Adaptive Training", desc: "Inclusive programmes tailored to your abilities and goals.", offset: "md:mt-10" },
            { src: s3, label: "Injury Recovery", desc: "Safe, structured return to movement after injury or surgery.", offset: "md:mt-4" },
          ].map((img, i) => (
            <div key={i} className={`relative rounded-xl overflow-hidden group shadow-lg aspect-[3/4] ${img.offset}`}>
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="text-primary-foreground text-lg font-semibold">{img.label}</h4>
                <p className="text-primary-foreground/80 text-sm mt-1">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialiseSection;
