import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'How We Make Money | FormRight',
  description:
    'FormRight earns affiliate commissions when readers sign up with providers through our links. Here is exactly how that works and how we keep it honest.',
  alternates: { canonical: '/how-we-make-money' },
}

const p = 'text-[15px] text-medium leading-[1.75] mb-5'
const h2 = 'font-serif text-xl font-bold text-dark mt-8 mb-3'
const link = 'text-green font-medium no-underline hover:underline'

export default function HowWeMakeMoneyPage() {
  return (
    <LegalPage
      title="How We Make Money"
      description="Full transparency on our business model and how we keep recommendations honest."
    >
      <p className={p}>
        FormRight is free to use. We don&rsquo;t charge readers, we don&rsquo;t sell user data, and
        we don&rsquo;t serve display ads. Instead, we make money through{' '}
        <strong className="font-semibold text-dark">affiliate commissions</strong>: when a reader
        signs up with one of the LLC formation services we recommend through a tracked link on
        this site, the provider pays us a referral fee.
      </p>

      <h2 className={h2}>Which links are affiliate links?</h2>
      <p className={p}>
        <strong className="font-semibold text-dark">All outbound links to formation providers on
        FormRight are affiliate links.</strong> That includes every CTA button on our homepage,
        every &ldquo;Visit Site&rdquo; button on our service cards, every link on our review
        pages, and the recommendation button at the end of the quiz. If a link goes to
        ZenBusiness, LegalZoom, Northwest Registered Agent, Bizee, Tailor Brands, or Rocket Lawyer,
        assume it&rsquo;s a tracking link.
      </p>
      <p className={p}>
        Links to external resources that aren&rsquo;t affiliate providers &mdash; state Secretary
        of State websites, the IRS, Trustpilot, NerdWallet, Forbes Advisor &mdash; are plain
        reference links. We don&rsquo;t earn anything from those.
      </p>

      <h2 className={h2}>Our commitment to honest recommendations</h2>
      <p className={p}>
        Different providers pay different commission rates. If we optimized purely for revenue,
        we&rsquo;d push everyone toward the highest-paying service regardless of fit. We
        don&rsquo;t do that &mdash; here&rsquo;s how we keep ourselves honest:
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">We only recommend providers we&rsquo;d use
        ourselves.</strong> The six services featured on FormRight represent our shortlist of
        genuinely good options. We ignore dozens of other formation services that pay commissions
        but don&rsquo;t meet our bar for price, speed, support, or trustworthiness.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">Our quiz is designed around fit, not
        commission.</strong> The quiz logic routes privacy-focused users to{' '}
        <Link href="/reviews/northwest" className={link}>Northwest</Link> even though their
        commission isn&rsquo;t the highest. It routes speed-focused users to{' '}
        <Link href="/reviews/bizee" className={link}>Bizee</Link>. We let the user&rsquo;s
        situation drive the recommendation, not our bottom line.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">We don&rsquo;t accept payment to change
        rankings.</strong> No provider has ever paid us to bump them up, write a more favorable
        review, or de-emphasize a competitor. Our{' '}
        <Link href="/editorial-standards" className={link}>editorial standards</Link> explain how
        we evaluate providers and how often we update reviews.
      </p>

      <h2 className={h2}>What this means for you</h2>
      <p className={p}>
        <strong className="font-semibold text-dark">You pay nothing extra when you use our
        affiliate links.</strong> The price you see on the provider&rsquo;s website is the price
        you pay. The commission comes out of the provider&rsquo;s marketing budget, not your
        pocket. Using our links actually helps: it lets us keep FormRight free, ad-free, and
        independent.
      </p>
      <p className={p}>
        If you&rsquo;d prefer not to use an affiliate link, no hard feelings &mdash; type the
        provider&rsquo;s URL directly into your browser. The recommendation in the quiz works
        either way.
      </p>
    </LegalPage>
  )
}
