import s1 from "@/assets/specialise-1.jpg";
import s2 from "@/assets/specialise-2.jpg";
import s3 from "@/assets/specialise-3.jpg";
import heroImg from "@/assets/hero-gym.jpg";
import mobilityImg from "@/assets/mobility-movement.jpg";
import studioImg from "@/assets/studio-2.jpg";

const images = [
  { src: s1, label: "Mobility & Movement", desc: "Programmes designed to improve movement, strength, and confidence.", span: "col-span-2 row-span-2" },
  { src: s2, label: null, desc: null, span: "" },
  { src: s3, label: null, desc: null, span: "" },
  { src: heroImg, label: null, desc: null, span: "" },
  { src: studioImg, label: null, desc: null, span: "" },
  { src: mobilityImg, label: null, desc: null, span: "col-span-2" },
];

const SpecialiseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-accent">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            ✦ Specialise
          </span>
          <h2 className="text-3xl md:text-4xl text-accent-foreground mb-3">What We Specialise In</h2>
          <p className="text-accent-foreground/70 font-body text-base max-w-lg mx-auto">
            At Eternal Fitness, training builds a body for daily life — walking, without pain, lifting confidently, and recovering from injury.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {images.map((img, i) => (
            <div key={i} className={`relative rounded-xl overflow-hidden group ${img.span}`}>
              <img
                src={img.src}
                alt={img.label || "Training specialisation"}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {img.label && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-primary-foreground text-sm">{img.label}</h4>
                    <p className="text-primary-foreground/70 text-xs mt-1">{img.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialiseSection;
