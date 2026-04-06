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
    url: 'https://www.northwestregisteredagent.com/?ref=YOUR_ID',
    commission: 'Varies',
    network: 'Direct',
    name: 'Northwest Registered Agent',
    icon: '🛡️',
    color: '#FDF3E3',
  },
  legalzoom: {
    url: 'https://www.legalzoom.com/?ref=YOUR_ID',
    commission: 'Varies',
    network: 'CJ Affiliate',
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
