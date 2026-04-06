import type { Metadata } from 'next'
import ReviewLayout from '@/components/ReviewLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rocket Lawyer Review 2025: Is It Worth It? | FormRight',
  description:
    'Honest Rocket Lawyer review. Real pricing, legal features, who it\'s best for, and better alternatives.',
}

export default function RocketLawyerPage() {
  return (
    <ReviewLayout
      serviceName="Rocket Lawyer"
      serviceKey="rocketlawyer"
      bestFor="Business owners who need ongoing legal access and document tools"
      startingPrice="$99.99 + state fees"
      trustpilotRating="3.9★"
      ourRating="3.8 / 5"
      relatedGuides={[
        { title: 'LLC vs S-Corp', href: '/guides/llc-vs-scorp' },
        { title: 'LLC Operating Agreement', href: '/guides/llc-operating-agreement' },
      ]}
    >
      {/* ── Opening ── */}
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Rocket Lawyer</strong> isn&rsquo;t just a
        formation service &mdash; it positions itself as an{' '}
        <strong className="font-semibold text-dark">ongoing legal partner</strong> for your
        business. That comes with a higher price tag and, frankly, lower ratings when measured
        purely on LLC filing. But if you need more than a one-time formation, the legal toolkit
        can be genuinely valuable.
      </p>

      {/* ── What Is Rocket Lawyer? ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">What Is Rocket Lawyer?</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Founded in <strong className="font-semibold text-dark">2008</strong>, Rocket Lawyer has
        grown into a subscription-based legal platform used by millions. The core idea is simple:
        give small-business owners access to legal documents, e-signatures, and actual attorney
        consultations for a flat monthly fee. LLC formation is part of the package, but it&rsquo;s
        not the main event &mdash; the legal toolkit is.
      </p>

      {/* ── What's Included ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">What&rsquo;s Included</h2>

      <h3 className="font-serif text-xl font-bold text-dark mt-8 mb-3">LLC Formation &mdash; $99.99 + State Fees</h3>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        A one-time fee that covers articles of organization preparation and filing with your state.
        You&rsquo;ll also get a basic operating agreement. However, many of the useful extras
        &mdash; registered agent, document library, attorney access &mdash; require the monthly
        membership.
      </p>

      <h3 className="font-serif text-xl font-bold text-dark mt-8 mb-3">Premium Membership &mdash; $39.99/month</h3>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        This is where Rocket Lawyer&rsquo;s value lives. The subscription includes{' '}
        <strong className="font-semibold text-dark">unlimited legal documents</strong> with
        e-signature, <strong className="font-semibold text-dark">attorney consultations</strong>{' '}
        on any legal question, a registered agent service, and discounted rates if you need to
        hire an attorney for more involved work. If you&rsquo;re going to use the legal features
        regularly, $39.99/month is genuinely reasonable compared to hourly attorney rates.
      </p>

      {/* ── Pricing Table ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Pricing at a Glance</h2>
      <div className="overflow-x-auto mb-6 rounded-lg border border-border">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="bg-paper px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-warm-gray border-b border-border">Service</th>
              <th className="bg-paper px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-warm-gray border-b border-border">Price</th>
              <th className="bg-paper px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-warm-gray border-b border-border">Billing</th>
              <th className="bg-paper px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-warm-gray border-b border-border">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-medium border-b border-border">LLC Formation</td>
              <td className="px-4 py-3 text-medium border-b border-border">$99.99 + state fees</td>
              <td className="px-4 py-3 text-medium border-b border-border">One-time</td>
              <td className="px-4 py-3 text-medium border-b border-border">Articles of organization, operating agreement</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-medium border-b border-border">Premium Membership</td>
              <td className="px-4 py-3 text-medium border-b border-border">$39.99/mo ($479.88/yr)</td>
              <td className="px-4 py-3 text-medium border-b border-border">Monthly</td>
              <td className="px-4 py-3 text-medium border-b border-border">Unlimited docs, eSign, attorney access, registered agent</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-medium border-b border-border">Standalone Registered Agent</td>
              <td className="px-4 py-3 text-medium border-b border-border">$149.99/yr</td>
              <td className="px-4 py-3 text-medium border-b border-border">Annual</td>
              <td className="px-4 py-3 text-medium border-b border-border">Registered agent service only</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-medium border-b border-border">Attorney Consultation</td>
              <td className="px-4 py-3 text-medium border-b border-border">Included with membership</td>
              <td className="px-4 py-3 text-medium border-b border-border">Per-use</td>
              <td className="px-4 py-3 text-medium border-b border-border">30-min consultations, discounted hourly rates</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── What We Like ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">What We Like</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Genuine attorney access at $39.99/month.</strong>{' '}
        This is the standout feature. You can ask a real lawyer real questions without paying
        $300+/hour. For businesses that regularly encounter legal decisions, the membership pays
        for itself fast.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Massive document library with e-signature.</strong>{' '}
        Hundreds of customizable legal templates &mdash; NDAs, contractor agreements, lease
        agreements, and more &mdash; all with built-in electronic signing. No need for a separate
        DocuSign subscription.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Solid operating agreement.</strong>{' '}
        The included operating agreement is more thorough than what you get from most formation
        services, with state-specific provisions and attorney-reviewed language.
      </p>

      {/* ── What We Don't Like ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">What We Don&rsquo;t Like</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Higher base price.</strong>{' '}
        At $99.99 just for formation &mdash; before the subscription &mdash; you&rsquo;re paying
        significantly more than competitors like{' '}
        <Link href="/reviews/bizee" className="text-green font-medium no-underline hover:underline">Bizee</Link>{' '}
        or{' '}
        <Link href="/reviews/zenbusiness" className="text-green font-medium no-underline hover:underline">ZenBusiness</Link>,
        which start at $0.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">The subscription adds up.</strong>{' '}
        At $39.99/month the Premium membership costs{' '}
        <strong className="font-semibold text-dark">$479.88 per year</strong>. If you&rsquo;re not
        actively using the legal documents and attorney consultations, that&rsquo;s an expensive
        line item.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Lower Trustpilot rating (3.9 stars).</strong>{' '}
        Common complaints center on billing confusion around the subscription and difficulty
        canceling. The legal tools themselves are well-regarded, but the business model rubs some
        users the wrong way.
      </p>

      {/* ── Who Should Use Rocket Lawyer ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Who Should Use Rocket Lawyer</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Businesses with employees or contractors.</strong>{' '}
        If you&rsquo;re drafting employment agreements, contractor NDAs, or HR policies, the
        document library and attorney access become essential, not optional.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Regulated industries.</strong>{' '}
        Healthcare, finance, real estate &mdash; industries where legal missteps are expensive.
        Having a lawyer on speed dial at a flat monthly rate is a smart insurance policy.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Founders who need a lawyer on speed dial.</strong>{' '}
        If you find yourself Googling legal questions more than once a month, the membership is
        worth it for the consultations alone.
      </p>

      {/* ── Who Should Look Elsewhere ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Who Should Look Elsewhere</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Simple single-member LLC filers.</strong>{' '}
        If you just need an LLC formed and don&rsquo;t anticipate ongoing legal needs,{' '}
        <Link href="/reviews/zenbusiness" className="text-green font-medium no-underline hover:underline">ZenBusiness</Link>{' '}
        or{' '}
        <Link href="/reviews/bizee" className="text-green font-medium no-underline hover:underline">Bizee</Link>{' '}
        will save you hundreds of dollars.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Privacy-focused founders.</strong>{' '}
        Rocket Lawyer doesn&rsquo;t offer the same level of privacy protection as{' '}
        <Link href="/reviews/northwest" className="text-green font-medium no-underline hover:underline">Northwest Registered Agent</Link>,
        which uses its own address on your filings by default.
      </p>

      {/* ── How It Compares ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">How Rocket Lawyer Compares to LegalZoom</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <Link href="/reviews/legalzoom" className="text-green font-medium no-underline hover:underline">LegalZoom</Link>{' '}
        is the bigger brand with stronger name recognition and a higher Trustpilot rating. However,
        Rocket Lawyer&rsquo;s subscription model is{' '}
        <strong className="font-semibold text-dark">cheaper for ongoing legal access</strong> &mdash;
        $39.99/month vs. LegalZoom&rsquo;s attorney plans that can run significantly more. If you
        need a single formation and occasional legal advice, LegalZoom&rsquo;s pay-per-use model
        may make more sense. If you need frequent legal document creation and regular attorney
        consultations, Rocket Lawyer&rsquo;s flat-rate membership is the better deal.
      </p>

      {/* ── Bottom Line ── */}
      <h2 className="font-serif text-2xl font-bold text-dark mt-10 mb-4">The Bottom Line</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Rocket Lawyer is{' '}
        <strong className="font-semibold text-dark">built for ongoing legal needs</strong>, not
        one-time LLC filing. If your business regularly requires legal documents, attorney advice,
        or contract reviews, the $39.99/month membership is genuinely valuable. But if you just
        want an LLC formed quickly and cheaply, Rocket Lawyer is overkill &mdash; and your money
        is better spent elsewhere.
      </p>
    </ReviewLayout>
  )
}
