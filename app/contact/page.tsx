import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Contact FormRight',
  description:
    'Questions, corrections, or feedback for FormRight? Reach us at jesse@formright.ai.',
  alternates: { canonical: '/contact' },
}

const p = 'text-[15px] text-medium leading-[1.75] mb-5'
const h2 = 'font-serif text-xl font-bold text-dark mt-8 mb-3'
const link = 'text-green font-medium no-underline hover:underline'

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      description="The best way to reach us."
    >
      <p className={p}>
        FormRight is a small independent publication, which means email reaches a real person.
        The fastest way to get in touch is:
      </p>

      <div className="bg-white border border-border rounded-xl p-6 mb-8">
        <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-green mb-2">Email</div>
        <a
          href="mailto:jesse@formright.ai"
          className="font-serif text-2xl font-bold text-dark no-underline hover:text-green transition-colors"
        >
          jesse@formright.ai
        </a>
        <p className="text-[13px] text-warm-gray mt-3">
          Typical response time: 1&ndash;2 business days.
        </p>
      </div>

      <h2 className={h2}>What to email us about</h2>
      <p className={p}>
        <strong className="font-semibold text-dark">Corrections.</strong> Found outdated pricing,
        a broken link, or a factual error? Let us know and we&rsquo;ll fix it. See our{' '}
        <Link href="/editorial-standards" className={link}>editorial standards</Link> for how
        we handle corrections.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">Feedback on the quiz.</strong> If the quiz
        gave you a recommendation that didn&rsquo;t match your situation, or you think a
        different service would have been a better fit, we want to hear about it. User feedback
        is how the quiz gets better.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">Provider inquiries.</strong> If you represent
        an LLC formation service and want to discuss having your product evaluated for inclusion,
        email us and we&rsquo;ll send our evaluation criteria.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">Press or partnership.</strong> Happy to chat.
        Mention the nature of the inquiry in the subject line so we can route it correctly.
      </p>

      <h2 className={h2}>Things we can&rsquo;t help with</h2>
      <p className={p}>
        We&rsquo;re not a law firm, an accounting firm, or a financial advisor &mdash; so we
        can&rsquo;t give you legal advice about your specific situation, tell you which state to
        form in, or walk you through an IRS election. For those questions, contact a licensed
        professional. See our <Link href="/terms" className={link}>terms of use</Link> for more
        on this.
      </p>
      <p className={p}>
        We also can&rsquo;t help with support issues at ZenBusiness, LegalZoom, Northwest
        Registered Agent, Bizee, Tailor Brands, or Rocket Lawyer. If you&rsquo;ve signed up with
        one of those providers and need help with your account or filing, contact them directly.
      </p>
    </LegalPage>
  )
}
