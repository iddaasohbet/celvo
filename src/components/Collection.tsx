"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.11_c25d46bb.jpg",
    name: "Premium Koleksiyon",
    category: "Tekstil",
  },
  {
    id: 2,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.11_fed79ce4.jpg",
    name: "Luxury Serisi",
    category: "Tekstil",
  },
  {
    id: 3,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.12_042327b0.jpg",
    name: "Modern Tasarım",
    category: "Tekstil",
  },
  {
    id: 4,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.12_18b6ed9b.jpg",
    name: "Şık Koleksiyon",
    category: "Tekstil",
  },
  {
    id: 5,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.12_a0a2c8d5.jpg",
    name: "Zarif Serisi",
    category: "Tekstil",
  },
  {
    id: 6,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.12_bae398a8.jpg",
    name: "Klasik Tasarım",
    category: "Tekstil",
  },
  {
    id: 7,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.13_4fb3ef11.jpg",
    name: "Elite Koleksiyon",
    category: "Tekstil",
  },
  {
    id: 8,
    image: "/images/WhatsApp Görsel 2025-10-30 saat 14.36.13_a8cb2186.jpg",
    name: "Premium Serisi",
    category: "Tekstil",
  },
];

export default function Collection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-black to-black" />
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-[#d4af37]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-6 py-2 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-[#d4af37]">
              Premium Koleksiyon
            </span>
          </motion.div>

          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Yeni{" "}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f0d882] bg-clip-text text-transparent">
              Koleksiyonumuz
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Özenle seçilmiş premium tekstil ürünlerimizle zarafeti evinize taşıyın
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Product Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/30">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                  {/* Hover Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === product.id ? 1 : 0,
                      y: hoveredId === product.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 backdrop-blur-sm"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:bg-[#d4af37]/20"
                    >
                      <ShoppingBag className="h-5 w-5 text-white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:border-[#d4af37]/50 hover:bg-[#d4af37]/20"
                    >
                      <Heart className="h-5 w-5 text-white" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#d4af37]">
                    {product.category}
                  </p>
                  <h3 className="text-base font-semibold text-white">
                    {product.name}
                  </h3>
                </div>

                {/* Golden accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#d4af37] to-[#f0d882] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/celvowear/?igsh=bmhtNWpobDJkcG4x&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10"
          >
            <span>Tüm Koleksiyonu Gör</span>
            <ShoppingBag className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

