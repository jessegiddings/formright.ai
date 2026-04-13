import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Editorial Standards | FormRight',
  description:
    'How FormRight evaluates LLC formation services, how often we update reviews, and how we handle corrections.',
  alternates: { canonical: '/editorial-standards' },
}

const p = 'text-[15px] text-medium leading-[1.75] mb-5'
const h2 = 'font-serif text-xl font-bold text-dark mt-8 mb-3'
const link = 'text-green font-medium no-underline hover:underline'

export default function EditorialStandardsPage() {
  return (
    <LegalPage
      title="Editorial Standards"
      description="How we research, write, and maintain accuracy on FormRight."
    >
      <p className={p}>
        FormRight is a small independent publication, not a 50-person newsroom. Our editorial
        standards reflect that: we aim for honest, accurate, and up-to-date information without
        pretending to be something we&rsquo;re not.
      </p>

      <h2 className={h2}>How we evaluate providers</h2>
      <p className={p}>
        Every provider featured on FormRight is evaluated against five criteria: starting price
        and total first-year cost, filing speed (both service processing and state turnaround),
        included features (registered agent, operating agreement, compliance alerts), customer
        reviews on Trustpilot and BBB, and long-term track record. We use the provider&rsquo;s
        public pricing, published customer reviews, and our own test orders to form a picture of
        each service.
      </p>

      <h2 className={h2}>How often we update reviews</h2>
      <p className={p}>
        We review every page on FormRight at least once per quarter, and we update immediately
        when we notice pricing changes, feature changes, or new customer feedback patterns. The
        LLC formation market moves fast &mdash; services rebrand, pricing tiers shift, and
        registered agent fees change. We try to stay ahead of those changes so the site
        doesn&rsquo;t go stale.
      </p>

      <h2 className={h2}>Disclosure practices</h2>
      <p className={p}>
        Every page on FormRight that mentions a provider includes affiliate disclosure in the
        footer. Pages that focus specifically on one provider &mdash; review pages, comparison
        pages &mdash; include an additional disclosure near the content. Our{' '}
        <Link href="/how-we-make-money" className={link}>How We Make Money</Link> page explains
        the business model in detail.
      </p>

      <h2 className={h2}>Fact-checking</h2>
      <p className={p}>
        Claims about pricing, filing speed, and included features are sourced directly from each
        provider&rsquo;s current pricing page and terms. State-specific information (filing fees,
        publication requirements, processing times) comes from the state Secretary of State
        websites. We re-check these sources on our quarterly update cycle.
      </p>

      <h2 className={h2}>Corrections and feedback</h2>
      <p className={p}>
        Found an error? Noticed something out of date? Email{' '}
        <a href="mailto:jesse@formright.ai" className={link}>jesse@formright.ai</a> and
        we&rsquo;ll review it. When we update a page to fix an error, we note the correction at
        the bottom of the page. We take accuracy seriously &mdash; this site exists because the
        LLC formation space needed more honesty, and we&rsquo;d rather be corrected than wrong.
      </p>
    </LegalPage>
  )
}
