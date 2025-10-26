"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] to-[#f0d882] shadow-2xl shadow-[#d4af37]/50 transition-all hover:scale-110 hover:shadow-[#d4af37]/70"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-7 w-7 text-black" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ping animation */}
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#d4af37] opacity-75" />
        )}
      </motion.button>

      {/* Contact Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-40 w-80"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/95 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d4af37] to-purple-500" />

              <h3 className="mb-4 text-xl font-bold text-white">
                Hızlı İletişim
              </h3>
              <p className="mb-6 text-sm text-gray-400">
                Size nasıl yardımcı olabiliriz?
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+905321667697"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#d4af37]/50 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500">Hemen Arayın</div>
                    <div className="text-sm font-medium text-white">+90 532 166 76 97</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@cihatsoft.com"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#d4af37]/50 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500">E-posta Gönderin</div>
                    <div className="text-sm font-medium text-white">hello@cihatsoft.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/905321667697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#d4af37]/50 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/10">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500">WhatsApp</div>
                    <div className="text-sm font-medium text-white">Mesaj Gönderin</div>
                  </div>
                </a>

                <Link
                  href="/teklif-al"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f0d882] px-6 py-3 text-sm font-bold text-black transition-all hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  <span>Teklif Formu</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

