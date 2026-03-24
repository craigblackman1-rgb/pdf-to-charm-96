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
    toast.success("Message sent! We'll be in touch soon.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", agree: false });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={contactHero} alt="Contact Eternal Fitness" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="font-display text-4xl md:text-6xl text-primary-foreground leading-tight mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 font-body text-lg md:text-xl mb-8 max-w-lg mx-auto">
            Make it easy to get in touch. Make it easy to get in touch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Book an Initial Consultation
            </a>
            <a href="#map" className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              Visit the Studio
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
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-4">Get in Touch</h2>
            <p className="text-muted-foreground font-body text-lg mb-8">Friendly invitation to reach out.</p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">Phone Number</p>
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
                  <p className="text-muted-foreground text-sm">1234 Discovery Way, Suite 100 City Name, State 56789</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-body font-semibold text-foreground text-sm mb-3">Follow us</h4>
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
            <h3 className="font-body font-semibold text-foreground text-lg mb-6">Contact Form</h3>
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
                  placeholder="admin@company.com"
                  maxLength={255}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Phone number</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  maxLength={20}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Leave us a message..."
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
                <span className="text-sm text-muted-foreground font-body">You agree to our friendly privacy policy.</span>
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
            title="Studio Location"
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
