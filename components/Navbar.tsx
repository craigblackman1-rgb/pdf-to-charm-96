"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EternalFitnessLogo from "@/components/EternalFitnessLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Personal Training", to: "/personal-training" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQs", to: "/faqs" },
  { label: "Blog", to: "/blog" },
];

interface NavbarProps {
  onBookConsultation?: () => void;
}

const SITE_URL = "https://eternalfitness.co.uk";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/personal-training": "Personal Training",
  "/pricing": "Pricing",
  "/faqs": "FAQs",
  "/blog": "Blog",
  "/contact": "Contact",
};

const Navbar = ({ onBookConsultation }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const breadcrumbItems: Array<{ "@type": string; position: number; name: string; item: string }> = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ];

  const currentTitle = pageTitles[pathname];
  if (currentTitle && pathname !== "/") {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: currentTitle,
      item: `${SITE_URL}${pathname}`,
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <EternalFitnessLogo variant="light" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-body text-primary-foreground/80">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.to}
                className={`hover:text-primary-foreground transition-colors ${
                  pathname === item.to ? "text-primary-foreground font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {onBookConsultation ? (
          <button
            onClick={onBookConsultation}
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </button>
        ) : (
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-section-dark/95 backdrop-blur-md md:hidden py-6 px-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-body"
              >
                {item.label}
              </Link>
            ))}
            {onBookConsultation ? (
              <button
                onClick={() => { setOpen(false); onBookConsultation(); }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium w-fit"
              >
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium w-fit"
              >
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
