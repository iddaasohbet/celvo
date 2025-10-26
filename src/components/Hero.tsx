"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative isolate min-h-screen overflow-hidden bg-black pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#d4af37]/30 to-purple-600/30 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-blue-600/20 to-[#d4af37]/20 blur-[120px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-gradient-to-r from-[#d4af37]/10 to-purple-600/10 px-6 py-2 text-sm font-medium text-[#d4af37] backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4" />
          <span>Premium Yazılım & Tasarım Ajansı</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Markanızı Dijital{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d882] to-[#d4af37] bg-clip-text text-transparent">
              Dünyada
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-gradient-to-r from-[#d4af37] to-transparent"
            />
          </span>{" "}
          Öne Çıkarın
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
        >
          Next.js, React, Three.js ile{" "}
          <span className="font-semibold text-white">
            modern, hızlı ve SEO uyumlu
          </span>{" "}
          web siteleri tasarlıyoruz. Kurumsal kimliğinizi dijital dünyaya
          taşıyın.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/teklif-al"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#f0d882] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#d4af37]/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ücretsiz Teklif Alın
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="#hizmetler"
            className="group rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            <span className="flex items-center gap-2">
              Projelerimizi İnceleyin
            </span>
          </Link>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[10%] top-[20%] h-32 w-32 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute right-[15%] top-[30%] h-24 w-24 rounded-full border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 to-transparent backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[20%] left-[20%] h-20 w-20 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm"
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs uppercase tracking-wider">Keşfet</span>
            <div className="h-12 w-[2px] bg-gradient-to-b from-gray-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
