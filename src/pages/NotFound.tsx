import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <SEO
        title="Page Not Found — Eternal Fitness"
        description="The page you are looking for does not exist. Return to the Eternal Fitness homepage."
        noIndex
      />
      <p className="text-sm font-medium text-muted-foreground mb-4">404</p>
      <h1 className="text-3xl font-display text-foreground mb-3">Page not found</h1>
      <p className="text-muted-foreground font-body text-base mb-8 max-w-sm">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
