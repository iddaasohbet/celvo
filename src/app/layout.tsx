import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Web Tasarım & SEO Hizmetleri İstanbul | Dijital Website - Profesyonel Web Sitesi Tasarımı",
    template: "%s | Dijital Website - Web Tasarım & SEO Ajansı",
  },
  description:
    "İstanbul'da web tasarım ve SEO hizmetleri. Profesyonel web sitesi tasarımı, kurumsal web tasarım, e-ticaret, mobil uyumlu web tasarım ve Google SEO optimizasyonu. Uygun fiyatlı web tasarım paketleri.",
  keywords: [
    "web tasarım",
    "web tasarım istanbul",
    "web sitesi tasarımı",
    "kurumsal web tasarım",
    "seo hizmetleri",
    "seo uzmanı",
    "google seo",
    "web tasarım ajansı",
    "web tasarım fiyatları",
    "e-ticaret sitesi",
    "mobil uyumlu web tasarım",
    "responsive web tasarım",
    "web tasarım firması",
    "web yazılım",
    "dijital pazarlama",
    "web tasarım şirketi",
    "profesyonel web tasarım",
    "uygun web tasarım",
    "seo optimizasyonu",
    "arama motoru optimizasyonu",
  ],
  metadataBase: new URL("https://dijitalwebsite.com"),
  authors: [{ name: "Dijital Website Web Tasarım & SEO Ajansı" }],
  creator: "Dijital Website",
  publisher: "Dijital Website",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Web Tasarım & SEO Hizmetleri İstanbul | Dijital Website",
    description:
      "Profesyonel web tasarım, SEO hizmetleri ve dijital pazarlama çözümleri. Modern, hızlı ve Google dostu web siteleri. Kurumsal web tasarım, e-ticaret ve mobil uyumlu tasarım.",
    type: "website",
    locale: "tr_TR",
    url: "https://dijitalwebsite.com",
    siteName: "Dijital Website Web Tasarım & SEO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dijital Website - Web Tasarım & SEO Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Tasarım & SEO Hizmetleri İstanbul | Dijital Website",
    description:
      "Profesyonel web tasarım ve SEO hizmetleri. Modern, hızlı ve Google dostu web siteleri.",
    images: ["/og-image.jpg"],
    creator: "@dijitalwebsite",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dijitalwebsite.com",
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console'dan alınacak
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


