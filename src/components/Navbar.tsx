import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/" },
  { label: "Personal Training", to: "/" },
  { label: "FAQs", to: "/faqs" },
  { label: "Blog", to: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex items-center justify-between">
      <Link to="/" className="font-display text-xl md:text-2xl tracking-wide text-primary-foreground italic">
        Eternal <span className="text-primary">♥</span> Fitness
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-body text-primary-foreground/80">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="hover:text-primary-foreground transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Contact Us <ArrowUpRight className="w-4 h-4" />
      </Link>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-section-dark/95 backdrop-blur-md md:hidden py-6 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-body">
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium w-fit">
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
