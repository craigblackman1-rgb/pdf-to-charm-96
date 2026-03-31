import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

const SITE_URL = "https://eternalfitness.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eternal Fitness | Level 4 Personal Trainer in Worthing",
    template: "%s | Eternal Fitness",
  },
  description:
    "Private one-to-one personal training in Worthing with Level 4 qualified trainer Esther Fair. Specialist support for health conditions, cancer rehabilitation, disability and complex needs.",
  openGraph: {
    siteName: "Eternal Fitness",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "GB-WSX",
    "geo.placename": "Worthing, West Sussex",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
