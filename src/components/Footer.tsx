import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-display text-xl italic text-foreground">
            Eternal <span className="text-primary">♥</span> Fitness
          </span>

          <div className="mt-6 space-y-3">
            <h4 className="font-body font-semibold text-foreground text-sm">Contact</h4>
            <a href="tel:07517658128" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-accent" /> 07517 658 128
            </a>
            <a href="mailto:esther.fair@eternal-fitness.co.uk" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
              <Mail className="w-4 h-4 text-accent" /> esther.fair@eternal-fitness.co.uk
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-body font-semibold text-foreground text-sm mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">Personal Training in Worthing</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Mobility & Strength Coaching</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Injury Recovery & Cancer Rehabilitation</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Private Training Studio in Worthing</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-body font-semibold text-foreground text-sm mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">FAQs</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-body font-semibold text-foreground text-sm mb-4">Follow us</h4>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((name) => (
              <span
                key={name}
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold cursor-pointer hover:opacity-80 transition-opacity"
              >
                {name[0]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>Copyright © 2023 Nutrition Basic Co. | All Rights Reserved</span>
        <div className="flex gap-4">
          <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
