import { AFFILIATE_LINKS, type ServiceKey } from '@/lib/affiliateLinks'
import CTASection from '@/components/CTASection'
import AffiliateLink from '@/components/AffiliateLink'
import Link from 'next/link'

interface RelatedGuide {
  title: string
  href: string
}

interface ReviewLayoutProps {
  serviceName: string
  serviceKey: ServiceKey
  bestFor: string
  startingPrice: string
  trustpilotRating: string
  ourRating: string
  children: React.ReactNode
  relatedGuides: RelatedGuide[]
}

export default function ReviewLayout({
  serviceName,
  serviceKey,
  bestFor,
  startingPrice,
  trustpilotRating,
  ourRating,
  children,
  relatedGuides,
}: ReviewLayoutProps) {
  const affiliate = AFFILIATE_LINKS[serviceKey]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Product', name: serviceName },
    author: { '@type': 'Organization', name: 'FormRight' },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: ourRating.split('/')[0].trim(),
      bestRating: '5',
    },
    publisher: { '@type': 'Organization', name: 'FormRight' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-cream">
        {/* Header */}
        <div className="bg-paper border-b border-border">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 pt-24 pb-12">
            <Link
              href="/"
              className="text-sm text-green font-medium no-underline hover:underline mb-4 inline-block"
            >
              &larr; Back to FormRight
            </Link>
            <h1 className="font-serif text-[clamp(32px,4vw,48px)] font-bold text-dark leading-[1.1] tracking-[-0.03em] mb-4">
              {serviceName} Review 2025
            </h1>
            <p className="text-lg text-warm-gray">
              Is it worth it? Our honest, detailed breakdown.
            </p>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Quick Verdict */}
              <div className="bg-white border border-border rounded-xl p-6 mb-10">
                <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-green mb-4">
                  Quick Verdict
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] text-warm-gray font-medium uppercase tracking-wider mb-1">
                      Best for
                    </div>
                    <div className="text-sm text-dark font-semibold">
                      {bestFor}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-warm-gray font-medium uppercase tracking-wider mb-1">
                      Starting price
                    </div>
                    <div className="text-sm text-dark font-semibold">
                      {startingPrice}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-warm-gray font-medium uppercase tracking-wider mb-1">
                      Trustpilot
                    </div>
                    <div className="text-sm text-dark font-semibold">
                      {trustpilotRating}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-warm-gray font-medium uppercase tracking-wider mb-1">
                      Our rating
                    </div>
                    <div className="text-sm text-dark font-semibold">
                      {ourRating}
                    </div>
                  </div>
                </div>
              </div>

              {/* Article content */}
              <article className="prose-custom">{children}</article>

              {/* Affiliate disclosure */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-[13px] text-warm-gray italic leading-relaxed">
                  FormRight earns a commission if you sign up through our links,
                  at no extra cost to you. This doesn&apos;t influence our
                  recommendations.
                </p>
              </div>

              {/* Related guides */}
              {relatedGuides.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-serif text-xl font-bold text-dark mb-4">
                    Related Guides
                  </h3>
                  <div className="flex flex-col gap-2">
                    {relatedGuides.map((g) => (
                      <Link
                        key={g.href}
                        href={g.href}
                        className="text-green text-sm font-medium no-underline hover:underline"
                      >
                        {g.title} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-[280px] flex-shrink-0">
              <div className="md:sticky md:top-[80px]">
                <div className="bg-white border border-border rounded-xl p-6 mb-4">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{affiliate.icon}</div>
                    <div className="font-serif text-lg font-bold text-dark">
                      {serviceName}
                    </div>
                    <div className="text-amber text-lg mt-1">
                      {'★'.repeat(Math.round(parseFloat(ourRating)))}
                    </div>
                    <div className="text-[12px] text-warm-gray mt-1">
                      {ourRating} &mdash; Our rating
                    </div>
                  </div>
                  <AffiliateLink
                    href={affiliate.url}
                    service={serviceKey}
                    placement="review_sidebar"
                    className="block w-full bg-green text-white text-center font-semibold text-sm py-3 rounded-lg no-underline hover:bg-green-mid transition-colors mb-3"
                  >
                    Visit {serviceName} &rarr;
                  </AffiliateLink>
                  <Link
                    href="/#quiz"
                    className="block text-center text-[13px] text-warm-gray hover:text-green transition-colors no-underline"
                  >
                    Not sure? Take the quiz &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTASection />
      </div>
    </>
  )
}
