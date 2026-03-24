import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-gym.jpg";

const tocItems = [
  { id: "who-we-are", label: "Who we are" },
  { id: "services-provided", label: "Services provided" },
  { id: "booking-and-availability", label: "Booking and availability" },
  { id: "health-safety", label: "Health, safety, and your responsibility" },
  { id: "payments", label: "Payments" },
  { id: "cancellations", label: "Cancellations, rescheduling, and missed sessions" },
  { id: "packages", label: "Packages, blocks, and expiry" },
  { id: "results", label: "Results and expectations" },
  { id: "studio-rules", label: "Studio rules and conduct" },
  { id: "liability", label: "Liability and assumption of risk" },
  { id: "website-use", label: "Website use" },
];

const TermsCondition = () => {
  const [activeId, setActiveId] = useState("who-we-are");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );
    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Terms & Condition" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl text-primary-foreground leading-tight mb-4">Terms &amp; Condition</h1>
          <p className="text-primary-foreground/70 font-body text-lg mb-8">
            These Terms and Conditions shall be governed by the laws of [Your Country/State].
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Book an Initial Consultation
            </a>
            <a href="#who-we-are" className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              Visit the Studio
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[260px_1fr] gap-12 items-start">
          {/* Sidebar TOC */}
          <aside className="md:sticky md:top-24">
            <h3 className="text-foreground text-lg mb-4">Table Of Contents</h3>
            <nav className="flex flex-col gap-1">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-lg text-sm font-body transition-colors ${
                    activeId === item.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="prose-sm max-w-none space-y-12">
            <div id="who-we-are">
              <h2 className="text-2xl text-foreground mb-3">Who we are</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Eternal Fitness provides private, one-to-one personal training and related coaching services in a private studio setting. We focus on long-term wellbeing, strength, mobility, confidence in movement, and sustainable progress.
              </p>
            </div>

            <div id="services-provided">
              <h2 className="text-2xl text-foreground mb-3">Services provided</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">Our services may include (depending on what you book):</p>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5 mb-4">
                <li>One-to-one personal training sessions</li>
                <li>Assessments and goal setting</li>
                <li>Programming guidance and progress reviews</li>
                <li>Lifestyle and habit coaching (where agreed)</li>
                <li>Exercise support for wellbeing, mobility, and strength</li>
              </ol>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">Important:</strong> We do not provide medical advice, diagnosis, or treatment. If you have a medical condition, injury, or concern, please speak to a qualified healthcare professional before starting.
              </p>
            </div>

            <div id="booking-and-availability">
              <h2 className="text-2xl text-foreground mb-3">Booking and availability</h2>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5 mb-3">
                <li>Sessions must be booked in advance.</li>
                <li>Booking confirmations may be provided by email/message.</li>
              </ol>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We may occasionally need to adjust schedules due to unforeseen circumstances, and we will always aim to provide as much notice as possible.
              </p>
            </div>

            <div id="health-safety">
              <h2 className="text-2xl text-foreground mb-3">Health, safety, and your responsibility</h2>
              <p className="text-muted-foreground text-sm mb-3">To keep training safe and appropriate:</p>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5 mb-3">
                <li>You agree to provide accurate information about your health, injuries, symptoms, medications, and any changes to your condition.</li>
                <li>You agree to follow coaching instructions during sessions and use equipment responsibly.</li>
                <li>If anything feels painful, unsafe, or unusual, you must stop and tell us immediately.</li>
              </ol>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We may require a health questionnaire / PAR-Q before your first session. If we believe training is not currently safe for you, we may pause or refuse services until appropriate clearance is provided.
              </p>
            </div>

            <div id="payments">
              <h2 className="text-2xl text-foreground mb-3">Payments</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Payment terms (single sessions, blocks, or ongoing commitments) will be confirmed at booking or after consultation. Prices are provided in GBP (£) unless stated otherwise. Payments must be made by the due date agreed. Late payment may result in pausing future bookings until the balance is cleared.
              </p>
            </div>

            <div id="cancellations">
              <h2 className="text-2xl text-foreground mb-3">Cancellations, rescheduling, and missed sessions</h2>
              <p className="text-muted-foreground text-sm mb-3">We understand plans change, and we aim to be fair and consistent.</p>
              <h4 className="text-foreground text-sm mb-2">Client cancellations / rescheduling</h4>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5 mb-4">
                <li>If you cancel or reschedule with at least 24 hours' notice, your session can be moved to a new time (subject to availability).</li>
                <li>If you cancel or reschedule with less than 24 hours' notice, the session may be charged in full.</li>
              </ol>
              <h4 className="text-foreground text-sm mb-2">No-shows</h4>
              <ol start={3} className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5 mb-4">
                <li>If you do not attend your session and do not contact us, it will be treated as a no-show and charged in full.</li>
              </ol>
              <h4 className="text-foreground text-sm mb-2">Late arrival</h4>
              <ol start={4} className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5 mb-4">
                <li>If you arrive late, your session may still end at the scheduled time to respect other bookings. The full session fee applies.</li>
              </ol>
              <h4 className="text-foreground text-sm mb-2">Eternal Fitness cancellations</h4>
              <ol start={5} className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5">
                <li>If we need to cancel due to illness, emergency, or unavoidable circumstances, you can choose to reschedule or receive a refund for that session.</li>
              </ol>
            </div>

            <div id="packages">
              <h2 className="text-2xl text-foreground mb-3">Packages, blocks, and expiry</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you purchase a block/package: Packages are personal to you and cannot be transferred to another person unless we agree in writing. Any expiry period (if applicable) will be communicated at purchase (example: 3 months) from purchase date. Refunds on partially used packages are handled case-by-case and may be subject to an admin fee, except where consumer law requires otherwise.
              </p>
            </div>

            <div id="results">
              <h2 className="text-2xl text-foreground mb-3">Results and expectations</h2>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5">
                <li>We provide professional coaching, structure, and support. However:</li>
                <li>Results vary from person to person based on consistency, health history, lifestyle, and many other factors.</li>
                <li>We cannot guarantee specific outcomes.</li>
                <li>Our focus is sustainable progress and long-term wellbeing, not quick fixes.</li>
              </ol>
            </div>

            <div id="studio-rules">
              <h2 className="text-2xl text-foreground mb-3">Studio rules and conduct</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To protect a calm, private environment: Be respectful to staff, other clients (if present), and the studio space. Follow safety guidance and studio instructions. Use clean indoor footwear if requested. No abusive, threatening, or inappropriate behaviour. We may end sessions immediately in such cases and future bookings may be refused.
              </p>
            </div>

            <div id="liability">
              <h2 className="text-2xl text-foreground mb-3">Liability and assumption of risk</h2>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5">
                <li>Exercise involves inherent risk. By choosing to train, you acknowledge that physical activity may carry a risk of injury.</li>
                <li>To the fullest extent permitted by law:</li>
                <li>We are not liable for loss, damage, or injury resulting from inaccurate information provided by you, failure to follow instructions, or misuse of equipment.</li>
                <li>Nothing in these Terms limits liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.</li>
              </ol>
            </div>

            <div id="website-use">
              <h2 className="text-2xl text-foreground mb-3">Website use</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When using this website, you agree not to: Misuse the site, attempt unauthorised access, or interfere with security. Copy content for commercial use without permission. Use the site in any way that breaks applicable laws. We may update, suspend, or remove website content at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsCondition;
