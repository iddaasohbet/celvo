"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Send, User } from "lucide-react";
import { useState } from "react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi buraya eklenecek
    console.log("Form data:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black pb-20 pt-32">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-black to-black" />
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[150px]" />
          </div>

          <div className="mx-auto max-w-5xl px-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-6 py-2 text-sm font-medium text-[#d4af37] backdrop-blur-sm">
                İletişim
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 text-center text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Bize{" "}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f0d882] bg-clip-text text-transparent">
                Ulaşın
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-12 text-center text-lg text-gray-400"
            >
              Sorularınız, önerileriniz veya siparişleriniz için bizimle iletişime geçin
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative overflow-hidden bg-black py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact Info - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h2 className="mb-8 text-3xl font-bold text-white">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  {/* Owner Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/30"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                      <User className="h-7 w-7 text-[#d4af37]" />
                    </div>
                    <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-[#d4af37]">
                      İletişim Kişisi
                    </h3>
                    <p className="text-xl font-semibold text-white">
                      Yusuf Tutar
                    </p>
                  </motion.div>

                  {/* Phone */}
                  <motion.a
                    href="tel:+905067000827"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/30"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                      <Phone className="h-7 w-7 text-[#d4af37]" />
                    </div>
                    <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-[#d4af37]">
                      Telefon
                    </h3>
                    <p className="text-xl font-semibold text-white">
                      0506 700 08 27
                    </p>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:info@celvo.com.tr"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/30"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                      <Mail className="h-7 w-7 text-[#d4af37]" />
                    </div>
                    <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-[#d4af37]">
                      E-posta
                    </h3>
                    <p className="text-xl font-semibold text-white">
                      info@celvo.com.tr
                    </p>
                  </motion.a>

                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/30"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                      <MapPin className="h-7 w-7 text-[#d4af37]" />
                    </div>
                    <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-[#d4af37]">
                      Adres
                    </h3>
                    <p className="text-xl font-semibold text-white">
                      Gaziantep / Şehitkamil
                    </p>
                  </motion.div>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/celvowear/?igsh=bmhtNWpobDJkcG4x&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="group block rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-transparent p-6 backdrop-blur-sm transition-all hover:border-pink-500/40"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/30 to-transparent">
                      <Instagram className="h-7 w-7 text-pink-500" />
                    </div>
                    <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-pink-500">
                      Instagram
                    </h3>
                    <p className="text-xl font-semibold text-white">
                      @celvowear
                    </p>
                  </motion.a>
                </div>
              </motion.div>

              {/* Contact Form - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
                  <h2 className="mb-2 text-3xl font-bold text-white">
                    Mesaj Gönderin
                  </h2>
                  <p className="mb-8 text-gray-400">
                    Formu doldurun, size en kısa sürede dönüş yapalım
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-[#d4af37]/50 focus:bg-white/10"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-[#d4af37]/50 focus:bg-white/10"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-[#d4af37]/50 focus:bg-white/10"
                        placeholder="0500 000 00 00"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-[#d4af37]/50 focus:bg-white/10"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f0d882] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#d4af37]/30 transition-all hover:shadow-xl hover:shadow-[#d4af37]/50"
                    >
                      <Send className="h-5 w-5" />
                      Mesajı Gönder
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}












