import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use | FormRight',
  description:
    'Terms governing your use of FormRight (formright.ai).',
  alternates: { canonical: '/terms' },
}

const p = 'text-[15px] text-medium leading-[1.75] mb-5'
const h2 = 'font-serif text-xl font-bold text-dark mt-8 mb-3'
const link = 'text-green font-medium no-underline hover:underline'

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The rules of the road for using FormRight."
      lastUpdated="January 1, 2025"
    >
      <p className={p}>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of FormRight
        (formright.ai) (the &ldquo;Service&rdquo;), operated by Jesse Giddings (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; &ldquo;our&rdquo;). By using the Service, you agree to these Terms.
      </p>

      <h2 className={h2}>1. Acceptable use</h2>
      <p className={p}>
        You agree to use the Service only for lawful purposes and in a way that does not
        infringe the rights of others. You agree not to scrape, copy, or redistribute content
        from FormRight without permission; attempt to interfere with the operation of the
        Service; use automated tools to submit quiz data in bulk; or misrepresent yourself in
        any way that creates liability for us.
      </p>

      <h2 className={h2}>2. Not legal, tax, or financial advice</h2>
      <p className={p}>
        <strong className="font-semibold text-dark">FormRight is not a law firm, accounting
        firm, or financial advisor.</strong> The content on this site &mdash; including reviews,
        guides, and quiz recommendations &mdash; is for{' '}
        <strong className="font-semibold text-dark">informational purposes only</strong> and
        should not be construed as legal, tax, or financial advice. LLC formation involves
        state-specific legal and tax implications that depend on your individual situation.
      </p>
      <p className={p}>
        Before forming a business entity, making a tax election, or signing any legal document,
        you should consult with a licensed attorney, CPA, or financial advisor who can review
        your specific circumstances. Nothing on FormRight creates an attorney-client,
        accountant-client, or fiduciary relationship between you and us.
      </p>

      <h2 className={h2}>3. Affiliate disclosure</h2>
      <p className={p}>
        FormRight earns commissions when you sign up with LLC formation providers through links
        on this site, at no extra cost to you. See{' '}
        <Link href="/how-we-make-money" className={link}>How We Make Money</Link> for details.
        Our recommendations are based on honest fit, not commission size &mdash; but you should
        know that this financial relationship exists when evaluating the site.
      </p>

      <h2 className={h2}>4. Third-party services</h2>
      <p className={p}>
        FormRight links to third-party services (LLC formation providers, state government
        websites, reference sites). We don&rsquo;t control those sites, and we&rsquo;re not
        responsible for their content, policies, pricing, or performance. Your use of a
        third-party service is governed by that service&rsquo;s terms and privacy policy.
      </p>

      <h2 className={h2}>5. Intellectual property</h2>
      <p className={p}>
        All original content on FormRight &mdash; including reviews, guides, quiz logic, and
        site design &mdash; is owned by us and protected by copyright. You may link to our
        pages and quote small portions with attribution, but you may not reproduce substantial
        portions of the site without written permission.
      </p>

      <h2 className={h2}>6. Disclaimer of warranties</h2>
      <p className={p}>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranties of any kind, either express or implied. We don&rsquo;t guarantee that the
        Service will be uninterrupted, error-free, or that information on the site is complete
        or current. Provider pricing, features, and ratings change over time; we do our best
        to keep the site up to date, but we make no guarantee of accuracy at any given moment.
      </p>

      <h2 className={h2}>7. Limitation of liability</h2>
      <p className={p}>
        To the maximum extent permitted by law, FormRight and its operators will not be liable
        for any indirect, incidental, consequential, special, or punitive damages arising out
        of or in connection with your use of the Service. Our total liability for any claim
        arising from the Service is limited to $100 or the amount you paid us in the prior 12
        months (which, since the Service is free, will typically be $0).
      </p>

      <h2 className={h2}>8. Indemnification</h2>
      <p className={p}>
        You agree to indemnify and hold harmless FormRight and its operators from any claims
        arising out of your use of the Service, your violation of these Terms, or your
        violation of any third-party rights.
      </p>

      <h2 className={h2}>9. Governing law</h2>
      <p className={p}>
        These Terms are governed by the laws of the State of California, without regard to its
        conflict-of-law principles. Any dispute arising under these Terms will be resolved in
        the state or federal courts located in California.
      </p>

      <h2 className={h2}>10. Changes to these Terms</h2>
      <p className={p}>
        We may update these Terms from time to time. Material changes will be reflected by
        updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of
        the Service after changes are posted constitutes acceptance of the updated Terms.
      </p>

      <h2 className={h2}>11. Contact</h2>
      <p className={p}>
        Questions about these Terms? Email{' '}
        <a href="mailto:jesse@formright.ai" className={link}>jesse@formright.ai</a>.
      </p>
    </LegalPage>
  )
}
