import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Ana Sayfa
    {
      url: 'https://dijitalwebsite.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Hizmetler
    {
      url: 'https://dijitalwebsite.com/hizmetler/web-gelistirme',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://dijitalwebsite.com/hizmetler/ui-ux-tasarim',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://dijitalwebsite.com/hizmetler/seo-pazarlama',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://dijitalwebsite.com/hizmetler/e-ticaret',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Projeler
    {
      url: 'https://dijitalwebsite.com/projeler',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Case Studies
    {
      url: 'https://dijitalwebsite.com/case-studies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Hakkımızda
    {
      url: 'https://dijitalwebsite.com/hakkimizda',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Teklif Al
    {
      url: 'https://dijitalwebsite.com/teklif-al',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Yasal Sayfalar
    {
      url: 'https://dijitalwebsite.com/kvkk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://dijitalwebsite.com/kullanim-kosullari',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://dijitalwebsite.com/gizlilik-politikasi',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}



