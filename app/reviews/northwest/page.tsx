import type { Metadata } from 'next'
import ReviewLayout from '@/components/ReviewLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Northwest Registered Agent Review 2025: Is It Worth It? | FormRight',
  description:
    'Our honest Northwest Registered Agent review for 2025. See pricing, privacy features, pros & cons, and how it compares for LLC formation.',
}

export default function NorthwestReview() {
  return (
    <ReviewLayout
      serviceName="Northwest Registered Agent"
      serviceKey="northwest"
      bestFor="Privacy-conscious business owners who value personal support"
      startingPrice="$39 + state fees"
      trustpilotRating="4.9★"
      ourRating="4.8 / 5"
      relatedGuides={[
        {
          title: 'What Is a Registered Agent?',
          href: '/guides/what-is-registered-agent',
        },
        {
          title: 'Best State for Your LLC',
          href: '/guides/best-state-for-llc',
        },
      ]}
    >
      {/* Opening */}
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        If privacy and personal support matter more to you than the cheapest
        possible price, Northwest Registered Agent is the service to beat.
        They&apos;ve built a loyal following by doing things differently —
        no data selling, no aggressive upsells, and real humans answering the
        phone.
      </p>
      <p className="text-[17px] text-dark leading-[1.7] mb-10">
        <strong>Our verdict:</strong> Northwest is the best choice for
        privacy-conscious business owners who want a trusted partner, not just a
        filing service. You&apos;ll pay a bit more than free-tier competitors,
        but the peace of mind is worth it.
      </p>

      {/* What Is Northwest Registered Agent? */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What Is Northwest Registered Agent?
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-4">
        Founded in 1998 in Spokane, Washington, Northwest Registered Agent has
        over 25 years of experience in business formation and registered agent
        services. They operate in all 50 states and have built their reputation
        on two pillars: privacy protection and exceptional customer support.
      </p>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Unlike most competitors, Northwest uses their own address on your public
        filings — not yours. They also have a strict policy against selling your
        data to third parties, which means you won&apos;t be flooded with spam
        calls and junk mail after forming your LLC.
      </p>

      {/* What's Included */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What&apos;s Included
      </h2>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        Basic Plan ($39 + state fees)
      </h3>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-1">
        <li>LLC formation filing</li>
        <li>Registered agent service (full year included)</li>
        <li>Privacy protection — their address on your filings</li>
        <li>Mail forwarding and document scanning</li>
        <li>Corporate Guides support (dedicated account rep)</li>
        <li>Same-day filing (submitted to state same business day)</li>
      </ul>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        Full Service Plan ($225 + state fees)
      </h3>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-1">
        <li>Everything in Basic</li>
        <li>Operating agreement</li>
        <li>EIN registration</li>
        <li>Banking resolution</li>
        <li>Annual report reminders and filing</li>
        <li>Free business address for the first year</li>
      </ul>

      {/* Pricing Breakdown */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        Pricing Breakdown
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-sand text-left">
              <th className="p-3 font-semibold text-dark border-b border-border">Feature</th>
              <th className="p-3 font-semibold text-dark border-b border-border">Basic</th>
              <th className="p-3 font-semibold text-dark border-b border-border">Full Service</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 text-dark font-medium">Price</td>
              <td className="p-3 text-dark">$39 + state fees</td>
              <td className="p-3 text-dark">$225 + state fees</td>
            </tr>
            <tr className="border-b border-border bg-paper">
              <td className="p-3 text-dark font-medium">Registered agent</td>
              <td className="p-3 text-dark">Included (1 year)</td>
              <td className="p-3 text-dark">Included (1 year)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-dark font-medium">Filing speed</td>
              <td className="p-3 text-dark">Same-day processing</td>
              <td className="p-3 text-dark">Same-day processing</td>
            </tr>
            <tr className="border-b border-border bg-paper">
              <td className="p-3 text-dark font-medium">Privacy protection</td>
              <td className="p-3 text-dark">Yes</td>
              <td className="p-3 text-dark">Yes</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-dark font-medium">Operating agreement</td>
              <td className="p-3 text-dark">—</td>
              <td className="p-3 text-dark">Included</td>
            </tr>
            <tr className="border-b border-border bg-paper">
              <td className="p-3 text-dark font-medium">EIN registration</td>
              <td className="p-3 text-dark">—</td>
              <td className="p-3 text-dark">Included</td>
            </tr>
            <tr>
              <td className="p-3 text-dark font-medium">Annual report filing</td>
              <td className="p-3 text-dark">—</td>
              <td className="p-3 text-dark">Included</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* What We Like */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What We Like
      </h2>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        1. Real privacy protection
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Northwest uses their own address on your public LLC filings, keeping
        your home address off state databases. This is a genuine privacy
        benefit that most competitors either don&apos;t offer or charge extra
        for.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        2. They never sell your data
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        After forming an LLC with many services, you&apos;ll immediately get
        bombarded with calls and emails from third-party vendors. Northwest has
        a strict no-data-selling policy, so your information stays private.
        This alone makes them stand out.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        3. Exceptional customer support via Corporate Guides
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Northwest assigns you a dedicated &quot;Corporate Guide&quot; — a real
        person you can call and speak with directly. No chatbots, no phone
        trees, no being bounced between departments. For first-time business
        owners, this level of support is invaluable.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        4. Same-day filing processing
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Both plans include same-day processing — meaning Northwest submits your
        paperwork to the state the same business day you order. Actual state
        processing times vary, but there&apos;s no internal delay on
        Northwest&apos;s end.
      </p>

      {/* What We Don't Like */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What We Don&apos;t Like
      </h2>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        1. Not free
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        At $39 for the Basic plan, Northwest isn&apos;t the cheapest option.
        Services like{' '}
        <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
          ZenBusiness
        </Link>{' '}
        and{' '}
        <Link href="/reviews/bizee" className="text-green no-underline hover:underline">
          Bizee
        </Link>{' '}
        offer $0 formation plans. However, when you factor in privacy
        protection and same-day processing, the value proposition is strong.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        2. Fewer add-ons and extras
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Northwest keeps things simple — which is mostly a positive. But if
        you&apos;re looking for business website builders, domain registration,
        or a big library of document templates, you&apos;ll need to look
        elsewhere.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        3. Website isn&apos;t flashy
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Northwest&apos;s website is functional but no-frills. It gets the job
        done, but the design and user experience aren&apos;t as polished as{' '}
        <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
          ZenBusiness
        </Link>{' '}
        or{' '}
        <Link href="/reviews/tailor-brands" className="text-green no-underline hover:underline">
          Tailor Brands
        </Link>
        . This is purely cosmetic and doesn&apos;t affect the quality of
        service.
      </p>

      {/* Who Should Use Northwest */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        Who Should Use Northwest
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-4">
        Northwest is an excellent fit if you&apos;re:
      </p>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-1">
        <li>Privacy-conscious and want your home address off public records</li>
        <li>A first-time LLC owner who wants to talk to a real person on the phone</li>
        <li>Tired of services that sell your data to third parties</li>
        <li>Willing to pay a small premium for a better overall experience</li>
      </ul>

      {/* Who Should Look Elsewhere */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        Who Should Look Elsewhere
      </h2>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>You want a $0 formation plan:</strong>{' '}
          <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
            ZenBusiness
          </Link>{' '}
          or{' '}
          <Link href="/reviews/bizee" className="text-green no-underline hover:underline">
            Bizee
          </Link>{' '}
          offer genuinely free starter tiers.
        </li>
        <li>
          <strong>You need legal advice:</strong>{' '}
          <Link href="/reviews/legalzoom" className="text-green no-underline hover:underline">
            LegalZoom
          </Link>{' '}
          or{' '}
          <Link href="/reviews/rocket-lawyer" className="text-green no-underline hover:underline">
            Rocket Lawyer
          </Link>{' '}
          provide attorney consultations as part of their premium plans.
        </li>
        <li>
          <strong>You want a full business toolkit:</strong> Services like{' '}
          <Link href="/reviews/tailor-brands" className="text-green no-underline hover:underline">
            Tailor Brands
          </Link>{' '}
          bundle in logo design, website builders, and more.
        </li>
      </ul>

      {/* How It Compares */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        How It Compares
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        <strong>Northwest vs{' '}
        <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
          ZenBusiness
        </Link>
        :</strong>{' '}
        ZenBusiness wins on price ($0 vs $39) and feature breadth. Northwest
        wins on privacy, support quality, and same-day processing. If privacy
        matters, Northwest is the clear choice.
      </p>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        <strong>Northwest vs{' '}
        <Link href="/reviews/legalzoom" className="text-green no-underline hover:underline">
          LegalZoom
        </Link>
        :</strong>{' '}
        LegalZoom charges $299/year for registered agent service alone.
        Northwest includes it from day one and offers better privacy. Unless you
        specifically need LegalZoom&apos;s attorney network, Northwest is the
        better value.
      </p>

      {/* Bottom Line */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        Bottom Line
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Northwest Registered Agent is the gold standard for privacy and
        personal support in the LLC formation space. At $39, it&apos;s not the
        cheapest option, but the combination of real privacy protection, a
        no-data-selling policy, dedicated Corporate Guides, and same-day
        processing makes it well worth the modest premium. If keeping your
        personal information off public databases matters to you, Northwest is
        the obvious choice.
      </p>
    </ReviewLayout>
  )
}
