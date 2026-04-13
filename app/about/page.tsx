import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'About FormRight | Independent LLC Advisor',
  description:
    'FormRight is an independent advisor site that helps entrepreneurs choose the right LLC formation service through a personalized 5-question quiz.',
  alternates: { canonical: '/about' },
}

const p = 'text-[15px] text-medium leading-[1.75] mb-5'
const h2 = 'font-serif text-xl font-bold text-dark mt-8 mb-3'
const link = 'text-green font-medium no-underline hover:underline'

export default function AboutPage() {
  return (
    <LegalPage
      title="About FormRight"
      description="An independent, honest advisor for entrepreneurs choosing an LLC formation service."
    >
      <p className={p}>
        <strong className="font-semibold text-dark">FormRight</strong> is an independent advisor
        site that helps entrepreneurs choose the right LLC formation service for their specific
        situation. We use a 5-question quiz to match users to one of six providers &mdash;{' '}
        <Link href="/reviews/zenbusiness" className={link}>ZenBusiness</Link>,{' '}
        <Link href="/reviews/legalzoom" className={link}>LegalZoom</Link>,{' '}
        <Link href="/reviews/northwest" className={link}>Northwest Registered Agent</Link>,{' '}
        <Link href="/reviews/bizee" className={link}>Bizee</Link>,{' '}
        <Link href="/reviews/tailor-brands" className={link}>Tailor Brands</Link>, and{' '}
        <Link href="/reviews/rocket-lawyer" className={link}>Rocket Lawyer</Link> &mdash; based on
        their state, budget, privacy needs, business type, and feature priorities.
      </p>

      <h2 className={h2}>Our philosophy</h2>
      <p className={p}>
        Our recommendations are based on <strong className="font-semibold text-dark">honest fit,
        not affiliate commission size</strong>. We have looked at every major LLC formation service
        on the market and picked the six we&rsquo;d actually recommend to a friend. When the quiz
        points someone toward ZenBusiness, it&rsquo;s because ZenBusiness fits their situation
        better than the alternatives &mdash; not because it pays us more.
      </p>
      <p className={p}>
        We believe the LLC formation space is oversaturated with generic &ldquo;top 10&rdquo; lists
        that all recommend the same companies in the same order, regardless of who&rsquo;s reading.
        FormRight exists because different founders have different needs, and a good advisor should
        reflect that.
      </p>

      <h2 className={h2}>Who builds this</h2>
      <p className={p}>
        FormRight was built in California by <strong className="font-semibold text-dark">Jesse
        Giddings</strong>, an independent publisher focused on honest-matching advisor sites for
        small business owners. Our sister site,{' '}
        <a href="https://payrollpicker.com" target="_blank" rel="noopener noreferrer" className={link}>
          PayrollPicker.com
        </a>
        , does the same thing for payroll software.
      </p>

      <h2 className={h2}>How to reach us</h2>
      <p className={p}>
        Questions, corrections, or feedback? Email us at{' '}
        <a href="mailto:jesse@formright.ai" className={link}>jesse@formright.ai</a> or visit our{' '}
        <Link href="/contact" className={link}>contact page</Link>. We read everything and reply
        personally.
      </p>
    </LegalPage>
  )
}
