import type { Metadata } from 'next'
import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best State to Form Your LLC: Home State vs Delaware vs Wyoming | FormRight',
  description: 'Should you form your LLC in your home state, Delaware, or Wyoming? Learn the real costs and benefits of each option.',
}

const tocItems = [
  { id: 'home-state', label: 'Why Home State Is Best' },
  { id: 'delaware', label: 'When Delaware Makes Sense' },
  { id: 'wyoming', label: 'Wyoming Advantages' },
  { id: 'real-costs', label: 'The Real Costs' },
  { id: 'framework', label: 'Decision Framework' },
]

export default function BestStateForLLCPage() {
  return (
    <GuideLayout
      title="Best State to Form Your LLC: Home State vs Delaware vs Wyoming"
      description="The internet is full of advice telling you to form your LLC in Delaware or Wyoming. Here's why that's usually wrong — and when it's actually right."
      tocItems={tocItems}
    >
      <h2 id="home-state" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Why Your Home State Is Usually the Best Choice</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Let&apos;s cut to the chase: <strong className="font-semibold text-dark">for most small businesses, forming your LLC in your home state is the best and most cost-effective option</strong>. This isn&apos;t the exciting answer you might have been hoping for, but it&apos;s the honest one.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Here&apos;s why: if you form your LLC in another state but do business in your home state (which includes having a physical presence, employees, or significant sales there), you&apos;ll need to <strong className="font-semibold text-dark">register as a foreign LLC</strong> in your home state. This means you&apos;ll pay filing fees and annual fees in both states, maintain a registered agent in both states, and file reports with both states. You&apos;re paying double for no real benefit.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        For a freelancer, consultant, local service business, or small e-commerce operation, there is simply no advantage to forming in another state. You&apos;ll spend more money, deal with more paperwork, and gain nothing in return. Form where you live and operate.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        The only question you should ask is: do I have a specific, concrete reason to form in another state? If you can&apos;t name one, your home state is the answer.
      </p>

      <h2 id="delaware" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">When Delaware Actually Makes Sense</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Delaware has a well-earned reputation as one of the most business-friendly states in the country. More than 60% of Fortune 500 companies are incorporated there. But the reasons that attract large corporations and venture-backed startups don&apos;t apply to most small businesses.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Delaware makes sense if:</strong>
      </p>
      <ul className="text-[15px] text-medium leading-[1.75] mb-4 list-disc pl-5 space-y-2">
        <li><strong className="font-semibold text-dark">You&apos;re raising venture capital.</strong> VCs strongly prefer (and sometimes require) Delaware entities because of the well-established body of corporate law and the Court of Chancery, a specialized business court with judges (not juries) who are experts in corporate law. This creates predictability in legal disputes.</li>
        <li><strong className="font-semibold text-dark">You plan to go public.</strong> If an IPO is in your future, Delaware is essentially the standard. The legal infrastructure and precedent make it the natural choice for public companies.</li>
        <li><strong className="font-semibold text-dark">You need complex governance structures.</strong> Delaware offers the most flexibility for sophisticated equity arrangements, multiple classes of stock, and complex operating agreements.</li>
      </ul>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        If none of these apply to you — and for the vast majority of small business owners, they don&apos;t — Delaware offers no meaningful advantage. The Court of Chancery doesn&apos;t help if you&apos;re running a landscaping business or a freelance design studio.
      </p>

      <h2 id="wyoming" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Wyoming: The Privacy-Focused Option</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Wyoming has become increasingly popular for LLC formation, and it does offer some genuinely attractive features:
      </p>
      <ul className="text-[15px] text-medium leading-[1.75] mb-4 list-disc pl-5 space-y-2">
        <li><strong className="font-semibold text-dark">Strong privacy protections.</strong> Wyoming allows for nominee officers and doesn&apos;t require member/manager names to be listed in the Articles of Organization, keeping your identity off public records.</li>
        <li><strong className="font-semibold text-dark">No state income tax.</strong> Wyoming has no personal or corporate income tax, which can be beneficial if you live there or have no physical presence in another state.</li>
        <li><strong className="font-semibold text-dark">Low ongoing costs.</strong> The annual report fee is just $60 (or minimum $60 based on assets in Wyoming).</li>
        <li><strong className="font-semibold text-dark">Strong asset protection.</strong> Wyoming was the first state to create the LLC structure and has continued to refine its LLC laws to be highly protective of business owners.</li>
      </ul>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Wyoming makes sense if:</strong> You run an online or location-independent business with no physical presence in any particular state. If you&apos;re a digital nomad, a fully remote consultant, or an online business owner who doesn&apos;t have employees or offices in a specific state, Wyoming can be an excellent choice. The privacy benefits and low costs are genuine advantages in this scenario.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        However, if you live and operate in another state, you&apos;ll still need to register as a foreign LLC there — which means the privacy benefits largely disappear, and the cost savings are erased by dual registration fees.
      </p>

      <h2 id="real-costs" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">The Real Costs: A Side-by-Side Comparison</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Let&apos;s look at what it actually costs to form and maintain an LLC in each of these popular options during the first year:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 px-4 font-semibold text-dark">Cost</th>
              <th className="text-left py-3 px-4 font-semibold text-dark">Home State (avg)</th>
              <th className="text-left py-3 px-4 font-semibold text-dark">Delaware</th>
              <th className="text-left py-3 px-4 font-semibold text-dark">Wyoming</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 px-4 text-medium">Filing fee</td>
              <td className="py-3 px-4 text-medium">$50–$250</td>
              <td className="py-3 px-4 text-medium">$90</td>
              <td className="py-3 px-4 text-medium">$100</td>
            </tr>
            <tr className="border-b border-border bg-sand/30">
              <td className="py-3 px-4 text-medium">Registered agent</td>
              <td className="py-3 px-4 text-medium">$0–$150</td>
              <td className="py-3 px-4 text-medium">$100–$300</td>
              <td className="py-3 px-4 text-medium">$100–$300</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 px-4 text-medium">Annual report/tax</td>
              <td className="py-3 px-4 text-medium">$0–$100</td>
              <td className="py-3 px-4 text-medium">$300</td>
              <td className="py-3 px-4 text-medium">$60</td>
            </tr>
            <tr className="border-b border-border bg-sand/30">
              <td className="py-3 px-4 text-medium">Foreign registration</td>
              <td className="py-3 px-4 text-medium">N/A</td>
              <td className="py-3 px-4 text-medium">$100–$300</td>
              <td className="py-3 px-4 text-medium">$100–$300</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 px-4 text-medium">2nd registered agent</td>
              <td className="py-3 px-4 text-medium">N/A</td>
              <td className="py-3 px-4 text-medium">$100–$200</td>
              <td className="py-3 px-4 text-medium">$100–$200</td>
            </tr>
            <tr className="bg-paper font-semibold">
              <td className="py-3 px-4 text-dark">First-year total</td>
              <td className="py-3 px-4 text-dark">$50–$250</td>
              <td className="py-3 px-4 text-dark">$600–$1,200</td>
              <td className="py-3 px-4 text-dark">$600–$1,150</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        The cost difference is stark. If you form in Delaware or Wyoming but operate in your home state, you&apos;re looking at <strong className="font-semibold text-dark">3x to 10x higher costs</strong> in the first year alone. And these costs recur annually — you&apos;ll pay dual fees every year for the life of your business.
      </p>

      <h2 id="framework" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Decision Framework: Where Should You Form?</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Use this simple framework to decide where to form your LLC:
      </p>
      <div className="bg-paper border border-border rounded-lg p-6 mb-6">
        <p className="text-[15px] text-medium leading-[1.75] mb-3">
          <strong className="font-semibold text-dark">Form in your home state if:</strong> You have a physical location, employees, or conduct most of your business in one state. This covers the vast majority of small businesses — restaurants, consulting firms, retail stores, service businesses, and most online businesses run from a home office.
        </p>
        <p className="text-[15px] text-medium leading-[1.75] mb-3">
          <strong className="font-semibold text-dark">Form in Delaware if:</strong> You&apos;re building a startup that will seek venture capital, plan to have complex equity structures with multiple investor classes, or anticipate an IPO or acquisition by a public company.
        </p>
        <p className="text-[15px] text-medium leading-[1.75]">
          <strong className="font-semibold text-dark">Form in Wyoming if:</strong> You run a truly location-independent online business, privacy is a top priority, and you don&apos;t have a physical presence in any other state that would require foreign registration.
        </p>
      </div>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">The bottom line:</strong> Form your LLC in your home state unless you have a specific, compelling reason not to. Don&apos;t fall for the marketing hype about Delaware or Wyoming — for most small businesses, forming out of state just means paying more for the same protection.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Ready to form your LLC? <Link href="/#quiz" className="text-green font-medium no-underline hover:underline">Take our free quiz</Link> to find the best formation service for your needs, or check out our <Link href="/guides/how-to-form-llc" className="text-green font-medium no-underline hover:underline">step-by-step guide to forming an LLC</Link>.
      </p>
    </GuideLayout>
  )
}
