export const AFFILIATE_LINKS = {
  zenbusiness: {
    url: 'https://www.zenbusiness.com/?ref=YOUR_AWIN_ID',
    commission: '$100/conversion',
    network: 'Awin',
    name: 'ZenBusiness',
    icon: '🏢',
    color: '#EAF5EE',
  },
  northwest: {
    url: 'https://www.awin1.com/cread.php?awinmid=66946&awinaffid=2848813&ued=https%3A%2F%2Fwww.northwestregisteredagent.com%2F',
    commission: 'Varies',
    network: 'Awin',
    name: 'Northwest Registered Agent',
    icon: '🛡️',
    color: '#FDF3E3',
  },
  legalzoom: {
    url: 'https://impact.legalzoom.com/c/7173053/3141460/26746',
    commission: 'Varies',
    network: 'Impact',
    name: 'LegalZoom',
    icon: '⚖️',
    color: '#EAF0F8',
  },
  bizee: {
    url: 'https://www.bizee.com/?ref=YOUR_ID',
    commission: 'Varies',
    network: 'Impact',
    name: 'Bizee',
    icon: '🚀',
    color: '#EAF0F8',
  },
  rocketlawyer: {
    url: 'https://www.rocketlawyer.com/?ref=YOUR_ID',
    commission: 'Varies',
    network: 'CJ Affiliate',
    name: 'Rocket Lawyer',
    icon: '🔑',
    color: '#F8EAF5',
  },
  tailorbrands: {
    url: 'https://www.tailorbrands.com/?ref=YOUR_ID',
    commission: 'Varies',
    network: 'Impact',
    name: 'Tailor Brands',
    icon: '🎨',
    color: '#FFF8EE',
  },
} as const

export type ServiceKey = keyof typeof AFFILIATE_LINKS

// Dev-mode warnings for placeholder affiliate links
if (process.env.NODE_ENV === 'development') {
  const placeholders = ['YOUR_AWIN_ID', 'YOUR_ID']
  for (const [key, link] of Object.entries(AFFILIATE_LINKS)) {
    if (placeholders.some((p) => link.url.includes(p))) {
      console.warn(
        `[FormRight] Placeholder affiliate link: "${key}" (${link.name}) ` +
        `still has a placeholder tracking ID. ` +
        `Apply at ${link.network} and update lib/affiliateLinks.ts`
      )
    }
  }
}
