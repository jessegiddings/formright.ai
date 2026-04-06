import { AFFILIATE_LINKS } from '@/lib/affiliateLinks'

const services = [
  {
    key: 'zenbusiness' as const,
    badge: 'Best Overall',
    badgeClass: 'bg-green-light text-green',
    tagline: 'The best balance of price, speed, and support. Perfect for most first-time LLC founders.',
    specs: [
      '$0 formation + state fees',
      'Free registered agent, year 1',
      '4.8★ on Trustpilot (28K reviews)',
      'Automatic compliance reminders',
      'Rush filing available (1 day)',
    ],
    price: 'FREE',
    priceClass: 'text-green',
    featured: true,
  },
  {
    key: 'northwest' as const,
    badge: 'Best Privacy',
    badgeClass: 'bg-amber-light text-amber',
    tagline: 'The privacy-first choice. Uses their address on public filings, never sells your data. Legendary support.',
    specs: [
      '$39 + state fees',
      'Free registered agent, year 1',
      '4.9★ on Trustpilot',
      'Uses THEIR address on public filings',
      'Same-day filing processing',
    ],
    price: '$39',
    priceClass: 'text-dark',
    featured: false,
  },
  {
    key: 'legalzoom' as const,
    badge: 'Best Legal',
    badgeClass: 'bg-blue-light text-blue',
    tagline: 'The OG. More expensive but unmatched if you need ongoing attorney access and legal document library.',
    specs: [
      '$0 + state fees (basic)',
      'Largest legal document library',
      'Attorney access plans available',
      '4.6★ on Trustpilot (28K+ reviews)',
      'Registered agent: $299/yr (pricey)',
    ],
    price: 'FREE',
    priceClass: 'text-green',
    featured: false,
  },
  {
    key: 'bizee' as const,
    badge: 'Fastest Free',
    badgeClass: 'bg-blue-light text-blue',
    tagline: 'Previously Incfile. Fastest free formation option. Great if you need it done today.',
    specs: [
      '$0 + state fees',
      'Free registered agent, year 1',
      'Filing in 1–2 business days',
      '4.7★ on Trustpilot',
      'Add-ons priced competitively',
    ],
    price: 'FREE',
    priceClass: 'text-green',
    featured: false,
  },
  {
    key: 'tailorbrands' as const,
    badge: 'Best Branding',
    badgeClass: 'bg-[#FFF8EE] text-amber',
    tagline: 'Unique: bundles LLC formation with a logo maker, website builder, and brand identity tools.',
    specs: [
      'From $9/mo (+ state fees)',
      'Logo + website included',
      'Social media design suite',
      'Good for brand-new businesses',
      'Subscription model (ongoing cost)',
    ],
    price: '$9',
    priceSuffix: '/mo',
    priceClass: 'text-dark',
    featured: false,
  },
  {
    key: 'rocketlawyer' as const,
    badge: 'Best Legal Access',
    badgeClass: 'bg-[#F8EAF5] text-[#7B1E6B]',
    tagline: 'Legal-first platform. Best if you need contracts, legal documents, and on-call lawyer support beyond just formation.',
    specs: [
      '$99.99 formation + state fees',
      '7-day free trial of legal plan',
      'Attorney consultations included',
      '1,000s of legal document templates',
      'eSign and contract management',
    ],
    price: '$99',
    priceClass: 'text-dark',
    featured: false,
  },
]

export default function ServiceCards() {
  return (
    <section className="py-[60px] md:py-[100px] px-6 md:px-12 max-w-[1200px] mx-auto" id="services">
      <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-green mb-3 flex items-center gap-2">
        <span className="inline-block w-5 h-0.5 bg-green" />
        All Options
      </div>
      <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] text-dark mb-4">
        Every service, <em className="italic text-green">honestly reviewed</em>
      </h2>
      <p className="text-base text-warm-gray leading-[1.65] mb-14 max-w-[520px]">
        No fluff. Just what each service is actually good at — and who should use it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((s) => {
          const link = AFFILIATE_LINKS[s.key]
          return (
            <div
              key={s.key}
              className={`bg-white border rounded-[14px] p-7 transition-all relative overflow-hidden group hover:shadow-[0_8px_32px_var(--shadow)] hover:-translate-y-0.5 ${
                s.featured ? 'border-green' : 'border-border'
              }`}
            >
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-green transition-transform ${s.featured ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-[10px] flex items-center justify-center text-2xl" style={{ background: link.color }}>
                  {link.icon}
                </div>
                <span className={`text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-[3px] rounded-xl ${s.badgeClass}`}>
                  {s.badge}
                </span>
              </div>
              <div className="font-serif text-xl font-bold text-dark mb-1.5">{link.name}</div>
              <div className="text-[13px] text-warm-gray leading-[1.5] mb-5">{s.tagline}</div>
              <div className="flex flex-col gap-2 mb-5">
                {s.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-[13px] text-medium">
                    <span className="text-green text-[10px]">●</span>
                    {spec}
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-warm-gray">Starting at</div>
                  <div className={`font-serif text-[22px] font-bold ${s.priceClass}`}>
                    {s.price}
                    {'priceSuffix' in s && <span className="text-sm font-normal">{s.priceSuffix}</span>}
                  </div>
                  <div className="text-[11px] text-warm-gray">+ your state&apos;s filing fee</div>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green text-white border-none font-sans text-[12px] font-semibold px-4 py-2 rounded-[20px] no-underline hover:bg-green-mid transition-colors"
                >
                  Visit Site →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
