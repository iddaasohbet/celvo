"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Zap, Sparkles, ArrowUpRight, CheckCircle2, TrendingUp, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const timeline = [
  {
    year: "2020",
    title: "Kuruluş",
    desc: "İstanbul'da profesyonel web tasarım ve SEO ajansı olarak faaliyete başladık.",
  },
  {
    year: "2021",
    title: "Büyüme",
    desc: "50+ kurumsal müşteri portföyü, e-ticaret ve SEO uzmanlığı.",
  },
  {
    year: "2023",
    title: "Genişleme",
    desc: "Full-stack geliştirme, Next.js ve modern teknolojilerle 100+ proje.",
  },
  {
    year: "2025",
    title: "Liderlik",
    desc: "Türkiye'nin önde gelen web tasarım ve SEO ajanslarından biri.",
  },
];

const features = [
  {
    icon: CheckCircle2,
    title: "Kanıtlanmış Başarı",
    desc: "150+ başarılı proje, %98 müşteri memnuniyeti",
  },
  {
    icon: TrendingUp,
    title: "Ölçülebilir Sonuçlar",
    desc: "Organik trafik artışı, dönüşüm optimizasyonu",
  },
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    desc: "Zamanında teslimat, profesyonel destek",
  },
  {
    icon: Rocket,
    title: "Modern Teknoloji",
    desc: "Next.js, React, headless CMS, cloud hosting",
  },
];

export default function HakkimizdaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Hakkımızda - Dijital Website Web Tasarım & SEO",
    description: "İstanbul web tasarım ve SEO ajansı Dijital Website hakkında",
    url: "https://dijitalwebsite.com/hakkimizda",
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] overflow-hidden bg-black pt-32 pb-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#d4af37]/20 to-purple-600/20 blur-[150px]"
            />
          </div>

          <div className="absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 inline-flex items-center gap-4 rounded-full border border-[#d4af37]/30 bg-gradient-to-r from-[#d4af37]/10 via-purple-600/10 to-[#d4af37]/10 px-8 py-3 backdrop-blur-xl"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-[#d4af37]"
              />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                About Dijital Website
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="h-2 w-2 rounded-full bg-purple-500"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-6xl font-black tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              <span className="block">İstanbul'un</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#d4af37] via-[#f0d882] to-purple-500 bg-clip-text text-transparent">
                  Öncü Ajansı
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute -bottom-4 left-0 h-2 w-full origin-left rounded-full bg-gradient-to-r from-[#d4af37] via-purple-500 to-transparent"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl"
            >
              Web tasarım, SEO ve dijital pazarlama alanında{" "}
              <span className="font-semibold text-white">yenilikçi çözümler</span> üreten,{" "}
              <span className="font-semibold text-white">sonuç odaklı</span> dijital ajans.
            </motion.p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative bg-black py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 text-center backdrop-blur-xl"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37]/10">
                    <feature.icon className="h-6 w-6 text-[#d4af37]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="relative bg-black py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 backdrop-blur-xl"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d4af37] to-purple-500" />

                <h2 className="mb-6 text-3xl font-bold text-white">
                  Profesyonel Web Tasarım ve SEO Ajansı
                </h2>

                <div className="space-y-5 text-base leading-relaxed text-gray-300">
                  <p>
                    <strong className="text-white">Dijital Website</strong>, İstanbul'da faaliyet gösteren <strong className="text-white">profesyonel web tasarım ve SEO ajansıdır</strong>. 
                    Modern web teknolojileri ile kurumsal web siteleri, e-ticaret platformları ve SEO uyumlu dijital çözümler sunuyoruz.
                  </p>

                  <p>
                    <strong className="text-white">Web tasarım hizmetlerimiz</strong> kapsamında Next.js, React ve Node.js gibi güncel teknolojilerle 
                    hızlı, güvenli ve <strong className="text-white">mobil uyumlu web siteleri</strong> geliştiriyoruz. Responsive tasarım prensiplerimizle 
                    her cihazda kusursuz görünen, kullanıcı deneyimine odaklı projeler üretiyoruz.
                  </p>

                  <p>
                    <strong className="text-white">SEO optimizasyonu</strong> alanındaki uzmanlığımızla Google'da üst sıralarda yer almanızı sağlıyoruz. 
                    Teknik SEO, içerik optimizasyonu, link building ve local SEO stratejileriyle organik trafiğinizi artırıyor, 
                    <strong className="text-white"> arama motoru görünürlüğünüzü</strong> maksimize ediyoruz.
                  </p>

                  <p>
                    <strong className="text-white">E-ticaret web tasarım</strong> projelerimizde, sadece ürün satan değil müşteri deneyimini önceleyen, 
                    yüksek dönüşüm oranlı online mağazalar yaratıyoruz. Güvenli ödeme sistemleri, stok yönetimi ve 
                    detaylı analytics entegrasyonlarıyla eksiksiz e-ticaret çözümleri sunuyoruz.
                  </p>
                </div>
              </motion.div>

              {/* Right - Secondary Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 backdrop-blur-xl"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-500 to-[#d4af37]" />

                <h2 className="mb-6 text-3xl font-bold text-white">
                  Neden Dijital Website?
                </h2>

                <div className="space-y-5 text-base leading-relaxed text-gray-300">
                  <p>
                    <strong className="text-white">Kurumsal web tasarım</strong> süreçlerimizde, markanızın dijital kimliğini yansıtan, 
                    profesyonel ve güven veren web siteleri tasarlıyoruz. B2B ve B2C şirketler için özel çözümler geliştiriyor, 
                    CRM ve ERP entegrasyonları sağlıyoruz.
                  </p>

                  <p>
                    <strong className="text-white">Web tasarım fiyatları</strong> konusunda şeffaf ve rekabetçi yaklaşımımızla, 
                    her bütçeye uygun <strong className="text-white">uygun fiyatlı web tasarım paketleri</strong> sunuyoruz. 
                    Profesyonel web tasarım firması olarak kaliteden ödün vermeden en iyi hizmeti veriyoruz.
                  </p>

                  <p>
                    <strong className="text-white">Dijital pazarlama</strong> stratejilerimizle Google Ads, sosyal medya reklamları ve 
                    içerik pazarlama kampanyaları yönetiyoruz. Web yazılım projelerinizde API geliştirme, 
                    cloud hosting ve DevOps hizmetleri sunuyoruz.
                  </p>

                  <p>
                    <strong className="text-white">Google SEO</strong> çalışmalarımızda Core Web Vitals optimizasyonu, 
                    schema markup, site hızı iyileştirme ve teknik SEO denetimi yapıyoruz. 
                    Arama motoru optimizasyonu ile markanızın online görünürlüğünü maksimize ediyoruz.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative bg-black py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[150px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#d4af37]">
                Yolculuğumuz
              </div>
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Başarı Hikayemiz
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#d4af37] via-purple-500 to-transparent" />

              <div className="space-y-16">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`relative grid grid-cols-1 gap-8 lg:grid-cols-2 ${
                      i % 2 === 0 ? "" : "lg:text-right"
                    }`}
                  >
                    {i % 2 === 0 ? (
                      <>
                        <div className="lg:pr-12">
                          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl">
                            <div className="mb-4 text-5xl font-black text-[#d4af37]">
                              {item.year}
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                        <div className="hidden lg:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden lg:block" />
                        <div className="lg:pl-12">
                          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl">
                            <div className="mb-4 text-5xl font-black text-[#d4af37] lg:text-right">
                              {item.year}
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#d4af37] bg-black lg:block">
                      <div className="absolute inset-0 animate-ping rounded-full bg-[#d4af37] opacity-75" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Long SEO Content */}
        <section className="relative bg-black py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
          </div>

          <div className="mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Web Tasarım ve SEO Uzmanlığımız
              </h2>
              <p className="text-lg text-gray-400">
                Modern teknolojiler ve kanıtlanmış stratejilerle dijital başarı
              </p>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div className="space-y-8 text-base leading-relaxed text-gray-300">
                <p className="text-lg">
                  <strong className="text-xl text-white">İstanbul web tasarım</strong> sektöründe faaliyet gösteren <strong className="text-white">Dijital Website</strong>, 
                  modern ve <strong className="text-white">SEO uyumlu web siteleri</strong> tasarlayan profesyonel bir ajansız. Kurumsal firmalardan 
                  e-ticaret sitelerine, kişisel bloglardan SaaS platformlarına kadar geniş bir yelpazede <strong className="text-white">web tasarım hizmeti</strong> sunuyoruz.
                </p>

                <p>
                  <strong className="text-white">Web sitesi tasarımı</strong> sürecimizde, öncelikle markanızın ihtiyaçlarını analiz ediyor, hedef kitlenizi tanıyor ve 
                  size özel bir dijital strateji oluşturuyoruz. <strong className="text-white">Responsive web tasarım</strong> yaklaşımımızla masaüstü, tablet ve 
                  mobil cihazlarda kusursuz çalışan, kullanıcı dostu arayüzler geliştiriyoruz. Modern tasarım trendlerini takip ediyor, 
                  estetik ve fonksiyonelliği birleştirerek markanızı en iyi şekilde yansıtan web siteleri yaratıyoruz.
                </p>

                <p>
                  <strong className="text-white">Kurumsal web tasarım</strong> projelerimizde, şirketinizin profesyonel imajını güçlendiren, 
                  güven veren ve kullanıcı deneyimini ön planda tutan çözümler sunuyoruz. CMS (İçerik Yönetim Sistemi) entegrasyonlarıyla 
                  web sitenizi kolayca yönetebilir, içeriklerinizi güncelleyebilirsiniz. <strong className="text-white">Web tasarım şirketi</strong> olarak 
                  kurumsal kimlik çalışmalarınızı dijital platforma kusursuz bir şekilde taşıyoruz.
                </p>

                <p>
                  <strong className="text-white">E-ticaret sitesi</strong> geliştirme hizmetlerimizle online satış yapmanızı kolaylaştırıyoruz. 
                  Güvenli ödeme sistemleri, stok takibi, kargo entegrasyonları ve kullanıcı dostu admin panelleriyle eksiksiz 
                  <strong className="text-white"> e-ticaret çözümleri</strong> sunuyoruz. Shopify, WooCommerce veya özel e-ticaret platformları ile 
                  işletmenizin ihtiyaçlarına özel çözümler geliştiriyoruz.
                </p>

                <p>
                  <strong className="text-white">SEO hizmetleri</strong> kapsamında, Google algoritmaları ve arama motoru best practice'lerine uygun 
                  <strong className="text-white"> teknik SEO</strong> çalışmaları yapıyoruz. Site hızı optimizasyonu, Core Web Vitals iyileştirmeleri, 
                  schema markup implementasyonu ve XML sitemap yönetimi ile teknik altyapınızı Google'a hazırlıyoruz. 
                  <strong className="text-white">Google SEO</strong> uzmanlarımız, keyword araştırması, rakip analizi ve içerik stratejisi geliştirerek 
                  hedef kitlenize ulaşmanızı sağlıyor.
                </p>

                <p>
                  <strong className="text-white">Mobil uyumlu web tasarım</strong> çalışmalarımızda mobile-first yaklaşımı benimsiyoruz. 
                  Mobil cihazlarda mükemmel performans gösteren, hızlı yüklenen ve kullanıcı dostu siteler geliştiriyoruz. 
                  Progressive Web App (PWA) teknolojisiyle mobil uygulama deneyimi sunan web siteleri yaratıyoruz.
                </p>

                <p>
                  <strong className="text-white">Web tasarım ajansı</strong> olarak fiyatlandırma konusunda şeffaf ve adiliz. 
                  <strong className="text-white">Web tasarım fiyatları</strong> her projenin kapsamına göre değişiklik göstermektedir. 
                  Küçük işletmeler için <strong className="text-white">uygun web tasarım</strong> paketlerinden kurumsal çözümlere kadar 
                  geniş bir yelpazede hizmet sunuyoruz. Ücretsiz teklif alarak projeniz için detaylı fiyat bilgisi edinebilirsiniz.
                </p>

                <p>
                  <strong className="text-white">Dijital pazarlama</strong> ve <strong className="text-white">web yazılım</strong> hizmetlerimizle, 
                  web sitenizin sadece görsel bir vitrin değil, satış ve pazarlama aracı olmasını sağlıyoruz. 
                  Google Analytics entegrasyonu, conversion tracking, A/B testing ve kullanıcı davranış analiziyle 
                  web sitenizin performansını sürekli iyileştiriyoruz. API geliştirme, third-party entegrasyonlar ve 
                  özel yazılım çözümleriyle dijital ekosisteminizi tamamlıyoruz.
                </p>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative bg-black py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#d4af37]">
                Değerlerimiz
              </div>
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Bizi Biz Yapan Prensipler
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Her projede rehberimiz olan temel değerlerimiz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Target,
                  title: "Müşteri Odaklı",
                  desc: "Her projede müşteri memnuniyeti ve başarısı önceliğimizdir.",
                },
                {
                  icon: Award,
                  title: "Kalite",
                  desc: "En yüksek standartlarda, detaylara özen gösteriyoruz.",
                },
                {
                  icon: Zap,
                  title: "Hız",
                  desc: "Hızlı teslimat, hızlı web siteleri, hızlı destek.",
                },
                {
                  icon: Users,
                  title: "İşbirliği",
                  desc: "Şeffaf iletişim ve sürekli geri bildirimle çalışıyoruz.",
                },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-xl">
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d4af37] to-purple-500" />

                    <div className="mb-6">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f0d882] p-[1px]">
                        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-black">
                          <value.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-black py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[150px]" />
          </div>

          <div className="mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 text-center backdrop-blur-xl md:p-16"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d4af37] via-purple-500 to-[#d4af37]" />

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#d4af37]">
                <Sparkles className="h-4 w-4" />
                <span>Hemen Başlayın</span>
              </div>

              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Projenizi{" "}
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f0d882] bg-clip-text text-transparent">
                  Birlikte
                </span>{" "}
                Gerçekleştirelim
              </h2>

              <p className="mb-10 text-lg text-gray-300 md:text-xl">
                Ücretsiz danışmanlık ve detaylı teklif için hemen iletişime geçin.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/teklif-al"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f0d882] px-10 py-5 text-lg font-bold text-black shadow-2xl shadow-[#d4af37]/50 transition-all hover:scale-105 hover:shadow-[#d4af37]/70"
                >
                  <span>Ücretsiz Teklif Alın</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <Link
                  href="/#referanslar"
                  className="group rounded-full border-2 border-white/20 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Projelerimizi İnceleyin
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}


