import { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!form.agree) {
      toast.error("Please agree to the privacy policy.");
      return;
    }
    toast.success("Message sent! Esther will be in touch soon.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", agree: false });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={contactHero} alt="Contact Esther Fair at Eternal Fitness Worthing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="font-display text-4xl md:text-6xl text-primary-foreground leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-primary-foreground/70 font-body text-lg md:text-xl mb-8 max-w-lg mx-auto">
            No pressure, no commitment, no such thing as the wrong question. Every conversation starts with a free 30-minute consultation — by phone, or in person at the studio in Worthing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Send a Message
            </a>
            <a href="#map" className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              Find the Studio
            </a>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section id="form" className="py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left - info */}
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ✦ Reach Out
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-4">
              No Pressure, No Commitment
            </h2>
            <p className="text-muted-foreground font-body text-base mb-3">
              Whether you have a specific question, are not sure where to start, or just want to find out if this is right for you — please get in touch.
            </p>
            <p className="text-muted-foreground font-body text-base mb-8">
              Esther responds personally to every message, usually within one working day.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Phone</p>
                  <a href="tel:07517658128" className="text-muted-foreground text-sm hover:text-foreground transition-colors">07517 658 128</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Email</p>
                  <a href="mailto:esther.fair@eternal-fitness.co.uk" className="text-muted-foreground text-sm hover:text-foreground transition-colors">esther.fair@eternal-fitness.co.uk</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Studio location</p>
                  <p className="text-muted-foreground text-sm">Private studio, Worthing, West Sussex<br />
                    <span className="text-xs text-muted-foreground/70">Full address confirmed on booking</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-5 mb-8">
              <p className="text-foreground font-body text-sm font-medium mb-1">Not sure where to start?</p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                The initial consultation is completely free. It is just a conversation — about you, your situation, and whether this is the right fit. There is no sales pitch and no obligation to proceed.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-body font-semibold text-foreground text-sm mb-3">Follow Esther</h4>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((name) => (
                  <span key={name} className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold cursor-pointer hover:opacity-80 transition-opacity">
                    {name[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div>
            <h3 className="font-body font-semibold text-foreground text-lg mb-2">Send a Message</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Fill in the form below and Esther will get back to you personally. There is no such thing as the wrong question.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    maxLength={100}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    maxLength={100}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  maxLength={255}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Phone number <span className="text-muted-foreground font-normal">(optional)</span></label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="07700 000 000"
                  maxLength={20}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Your message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell Esther a little about your situation and what you are hoping to achieve. There are no wrong answers."
                  maxLength={1000}
                  rows={5}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => setForm((prev) => ({ ...prev, agree: e.target.checked }))}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-muted-foreground font-body">I agree to the <a href="/terms" className="underline hover:text-foreground transition-colors">privacy policy</a>.</span>
              </label>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
          <iframe
            title="Eternal Fitness Studio — Worthing, West Sussex"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.0!2d-0.3725!3d50.8148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ4JzUzLjMiTiAwwrAyMicyMS4wIlc!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
