'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I actually need an LLC, or can I just start selling?',
    a: "Technically you can operate as a sole proprietor with no LLC. But you're personally liable for everything — lawsuits, debts, everything. One bad client dispute can come after your personal savings, car, or home. An LLC costs ~$50–$150 in state fees (plus $0 with Bizee or ZenBusiness for the service itself) and separates your personal assets from your business. For most freelancers and small businesses, it's worth it from day one. That said, if you're brand new and want to test an idea before spending anything, starting as a sole proprietor for 30–60 days is reasonable.",
  },
  {
    q: "What's the difference between an LLC and an S-Corp?",
    a: "An LLC is a legal structure. An S-Corp is a tax election. You can have an LLC taxed as an S-Corp, which is how many small business owners reduce self-employment taxes once they're earning $50K+ in profit. Most people form an LLC first, operate for a year or two, then elect S-Corp status once the tax savings justify the added complexity (payroll, separate tax filing, etc.). All the formation services we compare help with both.",
  },
  {
    q: 'Should I form in Delaware, Wyoming, or my home state?',
    a: "For most small businesses: your home state. The \"form in Delaware\" advice is primarily for startups raising venture capital — Delaware has investor-friendly corporate laws. For everyone else, forming out of state means paying state fees in BOTH states (your home state still makes you register as a foreign LLC if you operate there). Wyoming and Nevada have strong asset protection laws and no state income tax, which is genuinely useful for some situations — but adds complexity. Default to your home state unless you have a specific reason not to.",
  },
  {
    q: 'How do these services make money if some are free?',
    a: "Good question, and one you should ask. The free services (ZenBusiness, Bizee, LegalZoom) make money in two ways: (1) upselling add-ons like registered agent service, EIN filing, operating agreements, and compliance alerts, and (2) auto-renewing those add-ons annually. Always read what's auto-enrolling when you sign up and cancel what you don't need. The registered agent service auto-renewal is the most common surprise charge — it's typically $99–$199/year after the free first year.",
  },
  {
    q: 'Does FormRight earn money from these recommendations?',
    a: "Yes — we earn affiliate commissions when you sign up through our links. We're being transparent about this because you deserve to know. Here's our commitment: we recommend based on genuine fit for your situation, not commission size. In fact, our top recommendation (ZenBusiness) pays a standard commission, while LegalZoom's pricier plans would pay us more. We built the quiz specifically to route you to the right service, not the most profitable one for us. You can verify our recommendations match independent reviews on NerdWallet, Forbes Advisor, and Trustpilot.",
  },
  {
    q: 'How long does the whole process take?',
    a: "The service itself processes in 1–5 business days. But your state's Secretary of State office processes at their own pace — typically 1 day to 3 weeks depending on the state and backlog. Expedited processing is available in most states for an additional fee. California, New York, and Illinois tend to be the slowest. Wyoming, Delaware, and Nevada tend to be fastest. Most people are fully formed within 2 weeks of starting the process.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section className="py-[60px] md:py-[100px] px-6 md:px-12 bg-paper border-t border-border" id="faq">
      <div className="max-w-[720px] mx-auto">
        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-green mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-0.5 bg-green" />
          Common Questions
        </div>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] text-dark mb-4">
          Answers you actually <em className="italic text-green">need</em>
        </h2>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full bg-transparent border-none py-5 flex items-center justify-between gap-4 cursor-pointer text-left font-sans text-[15px] font-semibold text-dark hover:text-green transition-colors"
              >
                {faq.q}
                <span
                  className={`w-6 h-6 rounded-full border-[1.5px] flex items-center justify-center text-sm flex-shrink-0 transition-all ${
                    openIndex === i
                      ? 'bg-green border-green text-white rotate-45'
                      : 'border-border text-warm-gray'
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? '500px' : '0px' }}
              >
                <div className="pb-5 text-sm leading-[1.75] text-medium">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
