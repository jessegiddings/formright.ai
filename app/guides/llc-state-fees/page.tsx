import type { Metadata } from 'next'
import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LLC Filing Fees by State: Complete 2025 Guide | FormRight',
  description: 'See LLC filing fees for all 50 states. From $40 in Kentucky to $500 in Massachusetts, plus annual fees and special requirements like New York\'s publication rule.',
}

const tocItems = [
  { id: 'why-fees-matter', label: 'Why Fees Matter' },
  { id: 'cheapest-expensive', label: 'Cheapest & Most Expensive' },
  { id: 'all-states', label: 'All 50 States Table' },
  { id: 'new-york', label: 'New York Publication Req' },
  { id: 'annual-fees', label: 'Annual Fees' },
  { id: 'making-decision', label: 'Making Your Decision' },
]

const stateData = [
  { state: 'Alabama', fee: '$100' },
  { state: 'Alaska', fee: '$250' },
  { state: 'Arizona', fee: '$50' },
  { state: 'Arkansas', fee: '$45' },
  { state: 'California', fee: '$70' },
  { state: 'Colorado', fee: '$50' },
  { state: 'Connecticut', fee: '$120' },
  { state: 'Delaware', fee: '$90' },
  { state: 'Florida', fee: '$125' },
  { state: 'Georgia', fee: '$100' },
  { state: 'Hawaii', fee: '$50' },
  { state: 'Idaho', fee: '$100' },
  { state: 'Illinois', fee: '$150' },
  { state: 'Indiana', fee: '$100' },
  { state: 'Iowa', fee: '$50' },
  { state: 'Kansas', fee: '$165' },
  { state: 'Kentucky', fee: '$40' },
  { state: 'Louisiana', fee: '$72.50' },
  { state: 'Maine', fee: '$175' },
  { state: 'Maryland', fee: '$100' },
  { state: 'Massachusetts', fee: '$500' },
  { state: 'Michigan', fee: '$50' },
  { state: 'Minnesota', fee: '$155' },
  { state: 'Mississippi', fee: '$50' },
  { state: 'Missouri', fee: '$50' },
  { state: 'Montana', fee: '$35' },
  { state: 'Nebraska', fee: '$102' },
  { state: 'Nevada', fee: '$150' },
  { state: 'New Hampshire', fee: '$100' },
  { state: 'New Jersey', fee: '$125' },
  { state: 'New Mexico', fee: '$50' },
  { state: 'New York', fee: '$25 + pub. req.' },
  { state: 'North Carolina', fee: '$125' },
  { state: 'North Dakota', fee: '$125' },
  { state: 'Ohio', fee: '$99' },
  { state: 'Oklahoma', fee: '$100' },
  { state: 'Oregon', fee: '$50' },
  { state: 'Pennsylvania', fee: '$125' },
  { state: 'Rhode Island', fee: '$150' },
  { state: 'South Carolina', fee: '$110' },
  { state: 'South Dakota', fee: '$150' },
  { state: 'Tennessee', fee: '$300' },
  { state: 'Texas', fee: '$300' },
  { state: 'Utah', fee: '$50' },
  { state: 'Vermont', fee: '$125' },
  { state: 'Virginia', fee: '$100' },
  { state: 'Washington', fee: '$200' },
  { state: 'West Virginia', fee: '$100' },
  { state: 'Wisconsin', fee: '$130' },
  { state: 'Wyoming', fee: '$100' },
]

export default function LLCStateFeesPage() {
  return (
    <GuideLayout
      title="LLC Filing Fees by State: Complete 2025 Guide"
      description="A comprehensive look at what every state charges to form an LLC, plus annual fees, hidden costs, and the states that are cheapest (and most expensive) to start a business."
      tocItems={tocItems}
    >
      <h2 id="why-fees-matter" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Why Filing Fees Matter (But Not as Much as You Think)</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        State filing fees are one of the first costs you&apos;ll encounter when forming an LLC. They range from as low as <strong className="font-semibold text-dark">$35 in Montana</strong> to as high as <strong className="font-semibold text-dark">$500 in Massachusetts</strong>. While it&apos;s natural to want to minimize costs, the filing fee should not be the primary factor in deciding where to form your LLC.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        As we explain in our <Link href="/guides/best-state-for-llc" className="text-green font-medium no-underline hover:underline">guide to choosing the best state for your LLC</Link>, you should almost always form in the state where you live and do business. Forming in a cheaper state to save $50 on the filing fee — only to pay $200+ for foreign registration in your home state — doesn&apos;t make financial sense.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        That said, knowing your state&apos;s fees helps you budget accurately and avoid surprises. Here&apos;s the complete breakdown.
      </p>

      <h2 id="cheapest-expensive" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">The Cheapest and Most Expensive States</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">The 5 cheapest states to file an LLC:</strong>
      </p>
      <div className="bg-paper border border-border rounded-lg p-6 mb-6">
        <ol className="text-[15px] text-medium leading-[1.75] list-decimal pl-5 space-y-1">
          <li><strong className="font-semibold text-dark">New York — $25</strong> (but see the publication requirement below)</li>
          <li><strong className="font-semibold text-dark">Montana — $35</strong></li>
          <li><strong className="font-semibold text-dark">Kentucky — $40</strong></li>
          <li><strong className="font-semibold text-dark">Arkansas — $45</strong></li>
          <li><strong className="font-semibold text-dark">Arizona, Colorado, Hawaii, Iowa, Michigan, Mississippi, Missouri, New Mexico, Oregon, Utah — $50</strong></li>
        </ol>
      </div>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">The 5 most expensive states to file an LLC:</strong>
      </p>
      <div className="bg-paper border border-border rounded-lg p-6 mb-6">
        <ol className="text-[15px] text-medium leading-[1.75] list-decimal pl-5 space-y-1">
          <li><strong className="font-semibold text-dark">Massachusetts — $500</strong></li>
          <li><strong className="font-semibold text-dark">Tennessee — $300</strong></li>
          <li><strong className="font-semibold text-dark">Texas — $300</strong></li>
          <li><strong className="font-semibold text-dark">Alaska — $250</strong></li>
          <li><strong className="font-semibold text-dark">Washington — $200</strong></li>
        </ol>
      </div>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Note that New York appears cheapest at just $25 — but it has a unique publication requirement that can add $500 to $2,000+ to your total cost. More on that below.
      </p>

      <h2 id="all-states" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">LLC Filing Fees: All 50 States</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Here&apos;s the complete list of LLC formation filing fees for every state. These are the fees charged by the state itself — if you use a formation service, their service fee will be in addition to these amounts.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 px-4 font-semibold text-dark">State</th>
              <th className="text-left py-3 px-4 font-semibold text-dark">Filing Fee</th>
              <th className="text-left py-3 px-4 font-semibold text-dark">State</th>
              <th className="text-left py-3 px-4 font-semibold text-dark">Filing Fee</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 25 }, (_, i) => (
              <tr key={i} className={`border-b border-border ${i % 2 === 1 ? 'bg-sand/30' : ''}`}>
                <td className="py-2.5 px-4 text-medium">{stateData[i].state}</td>
                <td className="py-2.5 px-4 text-medium font-medium">{stateData[i].fee}</td>
                <td className="py-2.5 px-4 text-medium">{stateData[i + 25].state}</td>
                <td className="py-2.5 px-4 text-medium font-medium">{stateData[i + 25].fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        <strong className="font-semibold text-dark">Note:</strong> Fees are subject to change. Always verify the current fee with your state&apos;s Secretary of State website before filing.
      </p>

      <h2 id="new-york" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">New York&apos;s Publication Requirement: The Hidden Cost</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        New York deserves special attention. While the state&apos;s LLC filing fee is just $25 — the lowest in the country — New York requires all newly formed LLCs to <strong className="font-semibold text-dark">publish a notice of formation in two newspapers</strong> (one daily and one weekly) for six consecutive weeks in the county where the LLC is located.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        The cost of this publication requirement varies dramatically by county. In <strong className="font-semibold text-dark">New York City (Manhattan)</strong>, publication can cost <strong className="font-semibold text-dark">$1,500 to $2,000 or more</strong>. In upstate counties, it might be as low as $200 to $500. The average across the state is roughly $500 to $1,000.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        After publication, you must file a <strong className="font-semibold text-dark">Certificate of Publication</strong> with the state, which costs an additional $50. If you fail to complete the publication requirement within 120 days of formation, your LLC&apos;s authority to conduct business in New York can be suspended.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        This makes New York one of the most expensive states for LLC formation in practice, despite having the lowest filing fee on paper. If you&apos;re forming a New York LLC, budget for this additional cost and factor it into your planning.
      </p>

      <h2 id="annual-fees" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Annual Fees and Ongoing Costs</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        The filing fee is just the beginning. Most states also charge <strong className="font-semibold text-dark">annual or biennial fees</strong> to keep your LLC in good standing. These come in the form of annual reports, franchise taxes, or both.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Some notable annual fees to be aware of:
      </p>
      <div className="bg-paper border border-border rounded-lg p-6 mb-6">
        <ul className="text-[15px] text-medium leading-[1.75] list-disc pl-5 space-y-2">
          <li><strong className="font-semibold text-dark">California</strong> charges a minimum $800 annual franchise tax — one of the highest in the country. This applies even if your LLC earns zero revenue.</li>
          <li><strong className="font-semibold text-dark">Delaware</strong> charges a $300 annual franchise tax for LLCs, regardless of income.</li>
          <li><strong className="font-semibold text-dark">Wyoming</strong> has one of the lowest annual report fees at $60 (or more if your Wyoming assets exceed a certain threshold).</li>
          <li><strong className="font-semibold text-dark">Ohio</strong> and <strong className="font-semibold text-dark">New Mexico</strong> have no annual report requirement and no annual fees for LLCs.</li>
          <li><strong className="font-semibold text-dark">Illinois</strong> charges $75 per year for its annual report.</li>
          <li><strong className="font-semibold text-dark">New York</strong> requires a biennial statement filing for $9.</li>
        </ul>
      </div>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        When comparing the true cost of forming an LLC in different states, always look at both the one-time filing fee and the recurring annual costs. A state with a low filing fee but a high annual franchise tax (like California) can be much more expensive in the long run than a state with a higher filing fee but no annual tax.
      </p>

      <h2 id="making-decision" className="font-serif text-2xl font-bold text-dark mt-10 mb-4">Making Your Decision</h2>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Here&apos;s the key takeaway: <strong className="font-semibold text-dark">form your LLC where you actually operate your business</strong>, not where the fees are cheapest. The money you might save on a filing fee will almost certainly be lost to foreign registration costs, dual registered agent fees, and the headache of maintaining compliance in multiple states.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Once you know your state&apos;s fee, the next question is whether to file yourself or use a formation service. Filing yourself is straightforward in most states — you&apos;ll fill out a form and pay the fee online. Using a formation service like <Link href="/reviews/zenbusiness" className="text-green font-medium no-underline hover:underline">ZenBusiness</Link> or <Link href="/reviews/northwest" className="text-green font-medium no-underline hover:underline">Northwest</Link> adds a service fee but saves you time and ensures everything is filed correctly. Many services offer $0 formation packages where you only pay the state fee.
      </p>
      <p className="text-[15px] text-medium leading-[1.75] mb-4">
        Not sure which formation service is right for you? <Link href="/#quiz" className="text-green font-medium no-underline hover:underline">Take our free quiz</Link> to get a personalized recommendation, or read our <Link href="/guides/how-to-form-llc" className="text-green font-medium no-underline hover:underline">step-by-step LLC formation guide</Link> to walk through the entire process.
      </p>
    </GuideLayout>
  )
}
