"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { 
    href: "/#hizmetler", 
    label: "Hizmetler",
    dropdown: [
      { label: "Web Geliştirme", href: "/hizmetler/web-gelistirme" },
      { label: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
      { label: "SEO & Pazarlama", href: "/hizmetler/seo-pazarlama" },
    ]
  },
  { href: "/projeler", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/95 py-3 shadow-lg shadow-black/50 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      {/* Top gradient line - only visible when scrolled */}
      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"
        />
      )}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group relative z-50 flex items-center gap-3">
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="group relative flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:text-white"
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                )}
                <span className="absolute inset-0 -z-10 rounded-xl bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="p-2">
                        {item.dropdown.map((subItem, i) => (
                          <motion.a
                            key={subItem.href}
                            href={subItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-300 transition-all hover:bg-white/5 hover:text-white"
                          >
                            <span>{subItem.label}</span>
                            <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/teklif-al"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#f0d882] px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Teklif Al
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f0d882] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 md:hidden"
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[72px] bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-full mx-4 mt-4 overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="p-6">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4 text-base font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white"
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>

                      {/* Mobile Dropdown */}
                      {item.dropdown && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              className="block rounded-xl px-4 py-2 text-sm text-gray-400 transition-all hover:bg-white/5 hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <Link
                    href="/teklif-al"
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f0d882] px-6 py-4 text-base font-semibold text-black shadow-lg shadow-[#d4af37]/50"
                    onClick={() => setOpen(false)}
                  >
                    Ücretsiz Teklif Alın
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

