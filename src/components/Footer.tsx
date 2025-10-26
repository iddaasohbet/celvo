"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin, Sparkles } from "lucide-react";

const navigation = {
  company: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Projeler", href: "/projeler" },
    { name: "Blog", href: "#blog" },
  ],
  services: [
    { name: "Web Geliştirme", href: "/hizmetler/web-gelistirme" },
    { name: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
    { name: "E-Ticaret", href: "/hizmetler/e-ticaret" },
    { name: "SEO & Pazarlama", href: "/hizmetler/seo-pazarlama" },
  ],
  resources: [
    { name: "Dökümanlar", href: "#" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Destek", href: "#" },
    { name: "Kariyer", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-400" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Premium background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[200px]" />
      </div>

      {/* Top gradient line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group mb-6 inline-flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f0d882] p-0.5"
              >
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black">
                  <Sparkles className="h-5 w-5 text-[#d4af37]" />
                </div>
              </motion.div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white transition-all group-hover:text-[#d4af37]">
                  CihatSoft
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-500">
                  Digital Agency
                </span>
              </div>
            </Link>

            <p className="mb-8 max-w-sm text-base leading-relaxed text-gray-400">
              Premium dijital çözümler sunan yazılım ajansı. Modern teknolojilerle markanızı dijital dünyada zirveye taşıyoruz.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, icon: Icon, href, color }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                Şirket
              </h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-all hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#d4af37] transition-all group-hover:w-4" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                Hizmetler
              </h3>
              <ul className="space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-all hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#d4af37] transition-all group-hover:w-4" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                Kaynaklar
              </h3>
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-all hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#d4af37] transition-all group-hover:w-4" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:hello@cihatsoft.com"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#d4af37]/50 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                  <Mail className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm font-medium text-white">hello@cihatsoft.com</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+905321667697"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#d4af37]/50 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                  <Phone className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Telefon</div>
                  <div className="text-sm font-medium text-white">+90 532 166 76 97</div>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                  <MapPin className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Adres</div>
                  <div className="text-sm font-medium text-white">İstanbul, Türkiye</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-400">CihatSoft</span>. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <Link href="/gizlilik-politikasi" className="hover:text-gray-400">Gizlilik Politikası</Link>
            <Link href="/kvkk" className="hover:text-gray-400">KVKK</Link>
            <Link href="/kullanim-kosullari" className="hover:text-gray-400">Kullanım Koşulları</Link>
          </div>
        </div>

        {/* Minimal Developer Credit */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-gray-500 transition-colors hover:border-[#d4af37]/40 hover:text-[#d4af37]"
          >
            <span>Geliştiren</span>
            <span className="font-semibold text-gray-400">CihatSoft</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
