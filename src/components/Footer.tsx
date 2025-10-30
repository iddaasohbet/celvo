"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Premium background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-black to-black" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-[200px]" />
      </div>

      {/* Top gradient line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Logo and Slogan */}
        <div className="mb-16 text-center">
          <Link href="/" className="group mb-6 inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto h-24 w-24 overflow-hidden rounded-2xl border-2 border-[#d4af37]/40 shadow-lg shadow-[#d4af37]/30 transition-all group-hover:border-[#d4af37]/60 group-hover:shadow-xl group-hover:shadow-[#d4af37]/40"
            >
              <Image
                src="/logo.jpg"
                alt="Celvo"
                fill
                className="object-cover"
              />
            </motion.div>
          </Link>

          <h3 className="mb-3 text-2xl font-bold text-white">CÉLVO</h3>
          <p className="mb-6 text-lg italic text-[#d4af37]">
            "Rise in Silence."
          </p>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400">
            Premium tekstil ürünleriyle yaşam alanlarınıza lüks ve zarafet katın.
            Sessizce yükselen gücün manifestosu.
          </p>
        </div>

        {/* Contact & Social Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <motion.a
            href="tel:+905067000827"
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-black/80"
          >
            <div className="mb-5 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#d4af37]/10 transition-colors duration-300 group-hover:bg-[#d4af37]/15">
                <Phone className="h-7 w-7 text-[#d4af37]" strokeWidth={1.5} />
              </div>
            </div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500">
              TELEFON
            </p>
            <p className="text-base font-semibold text-white">0506 700 08 27</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:info@celvo.com.tr"
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-black/80"
          >
            <div className="mb-5 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#d4af37]/10 transition-colors duration-300 group-hover:bg-[#d4af37]/15">
                <Mail className="h-7 w-7 text-[#d4af37]" strokeWidth={1.5} />
              </div>
            </div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500">
              E-POSTA
            </p>
            <p className="text-base font-semibold text-white">info@celvo.com.tr</p>
          </motion.a>

          {/* Address */}
          <motion.div
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-black/80"
          >
            <div className="mb-5 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#d4af37]/10 transition-colors duration-300 group-hover:bg-[#d4af37]/15">
                <MapPin className="h-7 w-7 text-[#d4af37]" strokeWidth={1.5} />
              </div>
            </div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500">
              ADRES
            </p>
            <p className="text-base font-semibold text-white">Gaziantep</p>
          </motion.div>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/celvowear/?igsh=bmhtNWpobDJkcG4x&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-pink-500/40 hover:bg-black/80"
          >
            <div className="mb-5 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-pink-500/10 transition-colors duration-300 group-hover:bg-pink-500/15">
                <Instagram className="h-7 w-7 text-pink-500" strokeWidth={1.5} />
              </div>
            </div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500">
              INSTAGRAM
            </p>
            <p className="text-base font-semibold text-white">@celvowear</p>
          </motion.a>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="space-y-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-400">CÉLVO</span> - Yusuf Tutar
            <span className="mx-2">•</span>
            Tüm hakları saklıdır.
          </p>
          
          {/* Developer Credit */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>Designed & Developed by</span>
            <a
              href="https://www.dijitalwebsite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#d4af37] transition-colors hover:text-[#f0d882]"
            >
              Dijital Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
