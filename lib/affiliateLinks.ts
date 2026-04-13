export const AFFILIATE_LINKS = {
  zenbusiness: {
    url:
      process.env.NEXT_PUBLIC_ZENBUSINESS_LINK ||
      'https://www.zenbusiness.com/',
    commission: '$100/conversion',
    network: 'Awin',
    name: 'ZenBusiness',
    icon: '🏢',
    color: '#EAF5EE',
  },
  northwest: {
    url:
      process.env.NEXT_PUBLIC_NORTHWEST_LINK ||
      'https://www.awin1.com/cread.php?awinmid=66946&awinaffid=2848813&ued=https%3A%2F%2Fwww.northwestregisteredagent.com%2F',
    commission: 'Varies',
    network: 'Awin',
    name: 'Northwest Registered Agent',
    icon: '🛡️',
    color: '#FDF3E3',
  },
  legalzoom: {
    url:
      process.env.NEXT_PUBLIC_LEGALZOOM_LINK ||
      'https://impact.legalzoom.com/c/7173053/3141460/26746',
    commission: 'Varies',
    network: 'Impact',
    name: 'LegalZoom',
    icon: '⚖️',
    color: '#EAF0F8',
  },
  bizee: {
    url:
      process.env.NEXT_PUBLIC_BIZEE_LINK ||
      'https://www.bizee.com/',
    commission: 'Varies',
    network: 'Impact',
    name: 'Bizee',
    icon: '🚀',
    color: '#EAF0F8',
  },
  rocketlawyer: {
    url:
      process.env.NEXT_PUBLIC_ROCKETLAWYER_LINK ||
      'https://www.rocketlawyer.com/',
    commission: 'Varies',
    network: 'FlexOffers',
    name: 'Rocket Lawyer',
    icon: '🔑',
    color: '#F8EAF5',
  },
  tailorbrands: {
    url:
      process.env.NEXT_PUBLIC_TAILORBRANDS_LINK ||
      'https://www.tailorbrands.com/',
    commission: 'Varies',
    network: 'Impact',
    name: 'Tailor Brands',
    icon: '🎨',
    color: '#FFF8EE',
  },
} as const

export type ServiceKey = keyof typeof AFFILIATE_LINKS

// Dev-mode warnings for placeholder (non-tracking) affiliate links.
// A URL is considered a placeholder if it points to the provider's
// root domain with no tracking params, AND no env var override is set.
if (process.env.NODE_ENV === 'development') {
  const trackedHosts = ['awin1.com', 'impact.legalzoom.com', 'impact.com', 'flexoffers.com']
  for (const [key, link] of Object.entries(AFFILIATE_LINKS)) {
    const isTracked = trackedHosts.some((host) => link.url.includes(host))
    if (!isTracked) {
      console.warn(
        `[FormRight] Affiliate link "${key}" (${link.name}) is using a plain homepage URL ` +
          `(no tracking). Apply at ${link.network} and set NEXT_PUBLIC_${key.toUpperCase()}_LINK ` +
          `in Vercel env vars, or update the default in lib/affiliateLinks.ts.`
      )
    }
  }
}
