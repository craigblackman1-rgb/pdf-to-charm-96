import { useState } from "react";
import SocialIcon from "@/components/SocialIcons";

interface BlogShareBarProps {
  title: string;
  url?: string;
  description?: string;
  variant?: "horizontal" | "compact";
}

const BlogShareBar = ({
  title,
  url,
  description = "",
  variant = "horizontal",
}: BlogShareBarProps) => {
  const [copied, setCopied] = useState(false);

  const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: "facebook" as const,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: "Share on Facebook",
      color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
    {
      name: "WhatsApp",
      icon: "whatsapp" as const,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      label: "Share on WhatsApp",
      color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    },
    {
      name: "Email",
      icon: "email" as const,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`,
      label: "Share by email",
      color: "hover:bg-accent hover:text-accent-foreground hover:border-accent",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("input");
      el.value = pageUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-muted-foreground font-body text-xs mr-1">Share:</span>
        {shareLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-colors ${s.color}`}
          >
            <SocialIcon name={s.icon} />
          </a>
        ))}
        <button
          onClick={handleCopy}
          aria-label={copied ? "Link copied" : "Copy link"}
          className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-colors ${
            copied
              ? "bg-accent text-accent-foreground border-accent"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          <SocialIcon name={copied ? "check" : "link"} />
        </button>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-2xl p-5 bg-muted/40">
      <p className="text-foreground font-body text-sm font-medium mb-4">
        Found this useful? Share it with someone who might benefit.
      </p>
      <div className="flex flex-wrap gap-3">
        {shareLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm font-body text-muted-foreground bg-background transition-colors ${s.color}`}
          >
            <SocialIcon name={s.icon} />
            {s.name}
          </a>
        ))}
        <button
          onClick={handleCopy}
          aria-label={copied ? "Link copied" : "Copy link"}
          className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-body transition-colors ${
            copied
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border bg-background text-muted-foreground hover:bg-muted"
          }`}
        >
          <SocialIcon name={copied ? "check" : "link"} />
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
};

export default BlogShareBar;
