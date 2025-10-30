"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Shield, Award } from "lucide-react";

export default function HakkimizdaPage() {
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
                Hakkımızda
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 text-center text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Köklerden Zirveye:
              <br />
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f0d882] bg-clip-text text-transparent">
                Başarıya Giden Sessiz Güç
              </span>
            </motion.h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-12 text-center text-2xl font-light italic text-[#d4af37]"
            >
              "Rise in Silence."
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="relative overflow-hidden bg-black py-20">
          <div className="mx-auto max-w-4xl px-6">
            {/* Brand Name Origin */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/30" />
                <h2 className="text-3xl font-bold text-white">CÉLVO</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/30" />
              </div>

              <div className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-[#d4af37]">
                    Köken ve Anlam
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    CÉLVO, Latince iki güçlü kavramın birleşimiyle doğmuştur:{" "}
                    <span className="font-semibold text-white">"Celare"</span>{" "}
                    (gizlemek, örtmek) ve{" "}
                    <span className="font-semibold text-white">"Volare"</span>{" "}
                    (yükselmek, uçmak). Bu birleşimden çıkan anlam:{" "}
                    <span className="font-semibold italic text-[#d4af37]">
                      "Sessizce yükselmek."
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="mb-8 text-center text-3xl font-bold text-white">
                Markanın Felsefesi
              </h2>
              <div className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-gray-300">
                  CÉLVO, yaşamın temel direklerinden ilham alır; gösterişten,
                  anlık parıltılardan ve yüzeysel gürültüden uzaktır. Marka,
                  başarının kök salmakla başladığına, zirveye ulaşmanın ise
                  sabırlı bir iç disiplin gerektirdiğine inanır.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Bu, fırtınalı bir denizde bile sakinliğini koruyan, ancak her
                  an yükselmeye hazır olan gizli bir gücün manifestosudur.
                </p>
              </div>
            </motion.div>

            {/* CÉLVO Man */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="mb-8 text-center text-3xl font-bold text-white">
                CÉLVO Erkeği
              </h2>
              <div className="space-y-6 rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-8 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-gray-300">
                  CÉLVO'yu tercih eden erkek, sözlerin geçici, duruşun kalıcı
                  olduğunu bilir. O, kendini kanıtlama çabasına girmez; neyi
                  başardığını ve kim olduğunu, lüks sadeliği yansıtan tarzı,
                  tavizsiz kalitesi ve doğal özgüveniyle çevresine sessizce
                  hissettirir.
                </p>
                <p className="text-lg font-semibold italic text-[#d4af37]">
                  Onun gücü, derinlikten ve gizli bir vizyondan gelir.
                </p>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-12 text-center text-3xl font-bold text-white">
                Temel Değerler
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: Sparkles,
                    title: "Gizli Güç",
                    description:
                      "Sessizce ilerleyen, derinlikten gelen güç",
                  },
                  {
                    icon: Shield,
                    title: "Lüks Sadelik",
                    description: "Gösterişsiz zarafet ve tavizsiz kalite",
                  },
                  {
                    icon: TrendingUp,
                    title: "Öncü Başarı",
                    description: "Köklerden zirveye sabırlı yükseliş",
                  },
                  {
                    icon: Award,
                    title: "Derin Öz Güven",
                    description: "İçten gelen doğal ve kalıcı güven",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-[#d4af37]/30"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-transparent">
                      <value.icon className="h-7 w-7 text-[#d4af37]" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#d4af37] to-[#f0d882] transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="relative overflow-hidden bg-black py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-black to-black" />
          </div>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent p-12 backdrop-blur-sm"
            >
              <p className="mb-4 text-3xl font-bold italic text-[#d4af37]">
                "Rise in Silence."
              </p>
              <p className="text-xl text-gray-300">Sessizce Yüksel.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
