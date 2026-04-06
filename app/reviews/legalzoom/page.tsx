import type { Metadata } from 'next'
import ReviewLayout from '@/components/ReviewLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LegalZoom Review 2025: Is It Worth It? | FormRight',
  description:
    'Our honest LegalZoom review for 2025. See pricing, pros & cons, attorney access, and how it compares to ZenBusiness and Northwest for LLC formation.',
}

export default function LegalZoomReview() {
  return (
    <ReviewLayout
      serviceName="LegalZoom"
      serviceKey="legalzoom"
      bestFor="Entrepreneurs who want formation plus ongoing legal access"
      startingPrice="$0 + state fees"
      trustpilotRating="4.6★ (28,000+ reviews)"
      ourRating="4.3 / 5"
      relatedGuides={[
        { title: 'LLC vs S-Corp', href: '/guides/llc-vs-scorp' },
        {
          title: 'ZenBusiness vs LegalZoom',
          href: '/guides/zenbusiness-vs-legalzoom',
        },
        {
          title: 'LLC Operating Agreement',
          href: '/guides/llc-operating-agreement',
        },
      ]}
    >
      {/* Opening */}
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        LegalZoom is the biggest name in online legal services — and one of the
        most divisive. Some swear by it, others think it&apos;s overpriced.
        The truth, as usual, is somewhere in between.
      </p>
      <p className="text-[17px] text-dark leading-[1.7] mb-10">
        <strong>Our verdict:</strong> LegalZoom is a solid choice if you need
        attorney access or operate in a regulated industry, but for
        straightforward LLC formation, there are better values out there.
      </p>

      {/* What Is LegalZoom? */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What Is LegalZoom?
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-4">
        Founded in 2001 by a team that included attorney Robert Shapiro,
        LegalZoom pioneered the online legal services industry. They went
        public in 2021 and have served over 4 million customers, making them
        the most recognized brand in the space by a wide margin.
      </p>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        LegalZoom offers LLC formation alongside a comprehensive ecosystem of
        legal services — including attorney consultations, trademark
        registration, estate planning, and more. They&apos;re not just a
        formation service; they&apos;re aiming to be a one-stop shop for all
        your legal needs.
      </p>

      {/* What's Included */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What&apos;s Included
      </h2>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        Basic Plan ($0 + state fees)
      </h3>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-1">
        <li>LLC formation filing</li>
        <li>Name availability search</li>
        <li>Articles of organization</li>
        <li>Digital welcome packet</li>
        <li>Compliance calendar (30 days free)</li>
      </ul>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        Pro Plan ($249 + state fees)
      </h3>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-1">
        <li>Everything in Basic</li>
        <li>EIN registration</li>
        <li>Operating agreement</li>
        <li>Banking resolution</li>
        <li>Express shipping of formation documents</li>
      </ul>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        Premium Plan ($399 + state fees)
      </h3>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-1">
        <li>Everything in Pro</li>
        <li>Unlimited 30-minute attorney consultations for 90 days</li>
        <li>Attorney-led formation document review</li>
        <li>Business plan template</li>
        <li>Licensing guide</li>
      </ul>

      <div className="bg-amber-light border border-border rounded-xl p-5 mb-8">
        <p className="text-[15px] text-dark leading-[1.7] font-medium">
          ⚠️ <strong>Important note:</strong> Registered agent service is{' '}
          <strong>not included</strong> in any LegalZoom plan. It costs $299/year
          as a separate add-on — the most expensive registered agent pricing
          among major formation services.
        </p>
      </div>

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
              <th className="p-3 font-semibold text-dark border-b border-border">Pro</th>
              <th className="p-3 font-semibold text-dark border-b border-border">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 text-dark font-medium">Price</td>
              <td className="p-3 text-dark">$0</td>
              <td className="p-3 text-dark">$249</td>
              <td className="p-3 text-dark">$399</td>
            </tr>
            <tr className="border-b border-border bg-paper">
              <td className="p-3 text-dark font-medium">State fees</td>
              <td className="p-3 text-dark">Additional</td>
              <td className="p-3 text-dark">Additional</td>
              <td className="p-3 text-dark">Additional</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-dark font-medium">Filing speed</td>
              <td className="p-3 text-dark">Standard (3–6 weeks)</td>
              <td className="p-3 text-dark">Standard (3–6 weeks)</td>
              <td className="p-3 text-dark">Standard (3–6 weeks)</td>
            </tr>
            <tr className="border-b border-border bg-paper">
              <td className="p-3 text-dark font-medium">Registered agent</td>
              <td className="p-3 text-dark">$299/yr (separate)</td>
              <td className="p-3 text-dark">$299/yr (separate)</td>
              <td className="p-3 text-dark">$299/yr (separate)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-dark font-medium">EIN registration</td>
              <td className="p-3 text-dark">—</td>
              <td className="p-3 text-dark">Included</td>
              <td className="p-3 text-dark">Included</td>
            </tr>
            <tr className="border-b border-border bg-paper">
              <td className="p-3 text-dark font-medium">Operating agreement</td>
              <td className="p-3 text-dark">—</td>
              <td className="p-3 text-dark">Included</td>
              <td className="p-3 text-dark">Included</td>
            </tr>
            <tr>
              <td className="p-3 text-dark font-medium">Attorney consultations</td>
              <td className="p-3 text-dark">—</td>
              <td className="p-3 text-dark">—</td>
              <td className="p-3 text-dark">Unlimited (90 days)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* What We Like */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What We Like
      </h2>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        1. Largest legal document library
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        LegalZoom offers one of the most extensive libraries of legal document
        templates available online. From operating agreements and NDAs to
        trademark applications and estate planning documents, the breadth is
        unmatched.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        2. Attorney access
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        The Premium plan includes unlimited 30-minute attorney consultations
        for 90 days. This is genuinely valuable if you&apos;re in a regulated
        industry, have complex ownership structures, or just want professional
        reassurance that everything is set up correctly.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        3. Brand trust and recognition
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        With over 4 million customers and more than 20 years in business,
        LegalZoom has an established track record. For some business owners —
        especially those dealing with partners, investors, or lenders — the
        brand name carries weight.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        4. Comprehensive ecosystem
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        Beyond formation, LegalZoom can handle trademarks, copyright
        registration, business licenses, tax consulting, and more. If you want
        a single platform for ongoing legal needs, the ecosystem is hard to
        beat.
      </p>

      {/* What We Don't Like */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        What We Don&apos;t Like
      </h2>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        1. Registered agent costs $299/year
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        This is the elephant in the room. Every LLC needs a registered agent,
        and LegalZoom charges $299/year for the service — more than double what
        most competitors charge, and it&apos;s not included in any formation
        plan.{' '}
        <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
          ZenBusiness
        </Link>{' '}
        includes a free year;{' '}
        <Link href="/reviews/northwest" className="text-green no-underline hover:underline">
          Northwest
        </Link>{' '}
        includes it from $39. This alone makes LegalZoom significantly more
        expensive in year one.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        2. Aggressive upsells during checkout
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        The checkout process is littered with add-on offers — compliance
        packages, website builders, tax consultations, and more. While
        each is optional, the sheer volume of upsells can feel pushy and
        overwhelming, especially for first-time business owners who may not
        know what they actually need.
      </p>

      <h3 className="font-serif text-lg font-bold text-dark mt-8 mb-3">
        3. Standard filing speed is slow
      </h3>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        LegalZoom&apos;s standard filing time is 3–6 weeks — the slowest among
        major formation services. Expedited processing is available but costs
        extra. By comparison,{' '}
        <Link href="/reviews/northwest" className="text-green no-underline hover:underline">
          Northwest
        </Link>{' '}
        offers same-day processing on all plans.
      </p>

      {/* Who Should Use LegalZoom */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        Who Should Use LegalZoom
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-4">
        LegalZoom is a good fit if you:
      </p>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-1">
        <li>Operate in a regulated industry and want attorney oversight</li>
        <li>Need access to ongoing legal consultations</li>
        <li>Want a single platform for formation, trademarks, and legal documents</li>
        <li>Value brand recognition when dealing with partners or investors</li>
      </ul>

      {/* Who Should Look Elsewhere */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        Who Should Look Elsewhere
      </h2>
      <ul className="text-[17px] text-dark leading-[1.7] mb-6 list-disc pl-6 space-y-2">
        <li>
          <strong>You want a simple, affordable LLC:</strong>{' '}
          <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
            ZenBusiness
          </Link>{' '}
          or{' '}
          <Link href="/reviews/bizee" className="text-green no-underline hover:underline">
            Bizee
          </Link>{' '}
          will get you filed for $0 with registered agent service included.
        </li>
        <li>
          <strong>Privacy is a priority:</strong>{' '}
          <Link href="/reviews/northwest" className="text-green no-underline hover:underline">
            Northwest Registered Agent
          </Link>{' '}
          protects your address and never sells your data.
        </li>
        <li>
          <strong>You&apos;re on a tight budget:</strong> Between the $299/year
          registered agent fee and the upsell-heavy checkout, LegalZoom&apos;s
          total cost can climb quickly.
        </li>
      </ul>

      {/* How It Compares */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        How It Compares
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        <strong>LegalZoom vs{' '}
        <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
          ZenBusiness
        </Link>
        :</strong>{' '}
        ZenBusiness is significantly cheaper overall — free formation, free
        first year of registered agent, and better compliance tools. LegalZoom
        wins only if you need attorney access or the broader legal ecosystem.
      </p>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        <strong>LegalZoom vs{' '}
        <Link href="/reviews/northwest" className="text-green no-underline hover:underline">
          Northwest
        </Link>
        :</strong>{' '}
        Northwest offers better privacy, better support, same-day processing,
        and includes registered agent service — all for $39. LegalZoom&apos;s
        registered agent alone costs $299/year. Unless you need attorney access,
        Northwest is the better deal.
      </p>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        <strong>LegalZoom vs{' '}
        <Link href="/reviews/rocket-lawyer" className="text-green no-underline hover:underline">
          Rocket Lawyer
        </Link>
        :</strong>{' '}
        Both offer attorney access, but Rocket Lawyer uses a subscription model
        ($39.99/month) that includes unlimited legal documents and consultations
        as long as you&apos;re subscribed. For ongoing legal needs, Rocket
        Lawyer may be more cost-effective.
      </p>

      {/* Bottom Line */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-12 mb-4">
        Bottom Line
      </h2>
      <p className="text-[17px] text-dark leading-[1.7] mb-6">
        LegalZoom is a trusted name with a genuine edge in attorney access and
        legal document breadth. But for straightforward LLC formation, the
        $299/year registered agent fee, aggressive upsells, and slow filing
        speeds make it hard to recommend over{' '}
        <Link href="/reviews/zenbusiness" className="text-green no-underline hover:underline">
          ZenBusiness
        </Link>{' '}
        or{' '}
        <Link href="/reviews/northwest" className="text-green no-underline hover:underline">
          Northwest
        </Link>
        . Choose LegalZoom if you specifically need their legal ecosystem;
        otherwise, your money goes further elsewhere.
      </p>
    </ReviewLayout>
  )
}
