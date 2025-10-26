import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://cihatsoft.com/#website",
        url: "https://cihatsoft.com",
        name: "CihatSoft Web Tasarım & SEO",
        description: "Profesyonel web tasarım ve SEO hizmetleri İstanbul",
        publisher: {
          "@id": "https://cihatsoft.com/#organization",
        },
        inLanguage: "tr-TR",
      },
      {
        "@type": "Organization",
        "@id": "https://cihatsoft.com/#organization",
        name: "CihatSoft Web Tasarım & SEO Ajansı",
        url: "https://cihatsoft.com",
        logo: {
          "@type": "ImageObject",
          url: "https://cihatsoft.com/logo.png",
        },
        description: "İstanbul'da profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri",
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90-532-166-76-97",
          contactType: "customer service",
          email: "hello@cihatsoft.com",
          areaServed: "TR",
          availableLanguage: ["Turkish", "English"],
        },
        sameAs: [
          "https://twitter.com/cihatsoft",
          "https://linkedin.com/company/cihatsoft",
          "https://github.com/cihatsoft",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://cihatsoft.com/#webpage",
        url: "https://cihatsoft.com",
        name: "Web Tasarım & SEO Hizmetleri İstanbul | CihatSoft",
        isPartOf: {
          "@id": "https://cihatsoft.com/#website",
        },
        about: {
          "@id": "https://cihatsoft.com/#organization",
        },
        description: "İstanbul'da web tasarım ve SEO hizmetleri. Profesyonel web sitesi tasarımı, kurumsal web tasarım, e-ticaret ve mobil uyumlu web tasarım.",
        inLanguage: "tr-TR",
      },
      {
        "@type": "Service",
        serviceType: "Web Tasarım Hizmetleri",
        provider: {
          "@id": "https://cihatsoft.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Turkey",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Tasarım & SEO Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kurumsal Web Tasarım",
                description: "Profesyonel kurumsal web sitesi tasarımı ve geliştirme",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO Hizmetleri",
                description: "Google SEO optimizasyonu ve arama motoru sıralaması",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-Ticaret Web Sitesi",
                description: "Online satış için e-ticaret web sitesi tasarımı",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobil Uyumlu Web Tasarım",
                description: "Responsive ve mobil uyumlu web sitesi tasarımı",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://cihatsoft.com",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}
