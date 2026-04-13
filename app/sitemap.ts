import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://formright.ai'

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Service review pages (Phase 2)
    ...[
      'zenbusiness',
      'northwest',
      'legalzoom',
      'bizee',
      'rocket-lawyer',
      'tailor-brands',
    ].map((service) => ({
      url: `${baseUrl}/reviews/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Guide pages (Phase 2)
    ...[
      'how-to-form-llc',
      'llc-vs-scorp',
      'best-state-for-llc',
      'llc-state-fees',
      'what-is-registered-agent',
      'how-long-to-form-llc',
      'llc-operating-agreement',
      'zenbusiness-vs-legalzoom',
    ].map((guide) => ({
      url: `${baseUrl}/guides/${guide}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Trust / company pages
    ...[
      'about',
      'how-we-make-money',
      'editorial-standards',
      'privacy',
      'terms',
      'contact',
    ].map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
  ]
}
