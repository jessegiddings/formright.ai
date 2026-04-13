import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | FormRight',
  description:
    'How FormRight collects, uses, and protects your information. Standard US privacy policy.',
  alternates: { canonical: '/privacy' },
}

const p = 'text-[15px] text-medium leading-[1.75] mb-5'
const h2 = 'font-serif text-xl font-bold text-dark mt-8 mb-3'
const link = 'text-green font-medium no-underline hover:underline'
const li = 'text-[15px] text-medium leading-[1.75] mb-2'

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Plain-English explanation of what data we collect and what we do with it."
      lastUpdated="January 1, 2025"
    >
      <p className={p}>
        FormRight (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates the website{' '}
        formright.ai (the &ldquo;Service&rdquo;). This page tells you what information we collect
        when you use the Service, how we use it, and what choices you have about it.
      </p>

      <h2 className={h2}>1. Information we collect</h2>
      <p className={p}>
        <strong className="font-semibold text-dark">Quiz answers.</strong> When you take our
        5-question quiz, we store your answers so we can generate a recommendation and improve the
        quiz over time. Quiz answers are not tied to personally identifiable information unless
        you voluntarily provide your email address.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">Analytics data.</strong> We use third-party
        analytics services (Google Analytics and PostHog) to understand how visitors use the site.
        These services collect information like your IP address (anonymized), browser type, device
        type, operating system, pages visited, time on page, and referring URL.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">Click data.</strong> When you click an
        affiliate link on FormRight, we log which link was clicked and from which page, so we can
        measure which recommendations are useful. We do not transmit personally identifiable
        information to the affiliate provider beyond what your browser sends by default.
      </p>
      <p className={p}>
        <strong className="font-semibold text-dark">Email addresses (optional).</strong> If you
        voluntarily provide an email address &mdash; for example, to receive your quiz
        recommendation by email &mdash; we store it for that purpose. We do not sell email
        addresses.
      </p>

      <h2 className={h2}>2. How we use your information</h2>
      <ul className="list-disc pl-6 mb-5">
        <li className={li}>To generate and deliver your quiz recommendation.</li>
        <li className={li}>To improve the quiz, review pages, and guides based on aggregate usage patterns.</li>
        <li className={li}>To measure the effectiveness of our content and affiliate recommendations.</li>
        <li className={li}>To respond to questions or feedback you send us.</li>
      </ul>

      <h2 className={h2}>3. How we share information</h2>
      <p className={p}>
        <strong className="font-semibold text-dark">We do not sell your personal data.</strong>{' '}
        We do share data with the following categories of third parties:
      </p>
      <ul className="list-disc pl-6 mb-5">
        <li className={li}>
          <strong className="font-semibold text-dark">Analytics providers</strong> (Google
          Analytics, PostHog) &mdash; to measure site usage.
        </li>
        <li className={li}>
          <strong className="font-semibold text-dark">Infrastructure providers</strong> (Vercel
          for hosting, Supabase for our database) &mdash; to operate the site.
        </li>
        <li className={li}>
          <strong className="font-semibold text-dark">Affiliate networks</strong> (Awin, Impact,
          CJ Affiliate, FlexOffers) &mdash; when you click an affiliate link, these networks
          process the referral. They receive the information your browser shares by default
          (IP address, referrer URL, user agent), plus a tracking identifier that allows them
          to credit FormRight for the referral.
        </li>
      </ul>

      <h2 className={h2}>4. Cookies and tracking</h2>
      <p className={p}>
        FormRight uses cookies and similar tracking technologies to remember your quiz progress,
        measure site usage, and support affiliate tracking. You can disable cookies in your
        browser settings, though some parts of the site may not work properly without them. Our
        analytics providers (Google and PostHog) use their own cookies; you can learn about and
        control their practices through their websites.
      </p>

      <h2 className={h2}>5. Affiliate link disclosure</h2>
      <p className={p}>
        FormRight earns commissions when you sign up with LLC formation providers through our
        links, at no extra cost to you. See{' '}
        <Link href="/how-we-make-money" className={link}>How We Make Money</Link> for details.
        Clicking an affiliate link may set cookies on the provider&rsquo;s site that track your
        signup back to FormRight &mdash; this is how we earn our referral fee.
      </p>

      <h2 className={h2}>6. Your rights and choices</h2>
      <p className={p}>
        Depending on your location, you may have rights to access, delete, or correct the
        information we hold about you. To exercise any of these rights, email{' '}
        <a href="mailto:jesse@formright.ai" className={link}>jesse@formright.ai</a>. You can also:
      </p>
      <ul className="list-disc pl-6 mb-5">
        <li className={li}>Opt out of Google Analytics using the Google Analytics Opt-out Browser Add-on.</li>
        <li className={li}>Clear cookies in your browser to reset analytics and affiliate tracking.</li>
        <li className={li}>Use your browser&rsquo;s &ldquo;Do Not Track&rdquo; setting &mdash; we honor it where technically feasible.</li>
      </ul>

      <h2 className={h2}>7. Children&rsquo;s privacy</h2>
      <p className={p}>
        FormRight is not directed at children under 13. We do not knowingly collect information
        from children under 13. If you believe we have collected such information, email us and
        we will delete it.
      </p>

      <h2 className={h2}>8. Changes to this policy</h2>
      <p className={p}>
        We may update this privacy policy from time to time. Material changes will be reflected
        by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of
        the Service after changes are posted constitutes acceptance of the updated policy.
      </p>

      <h2 className={h2}>9. Contact</h2>
      <p className={p}>
        Questions about this policy? Email{' '}
        <a href="mailto:jesse@formright.ai" className={link}>jesse@formright.ai</a>.
      </p>
    </LegalPage>
  )
}
