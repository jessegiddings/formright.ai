import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/50 px-6 md:px-12 py-12">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 mb-10 flex-wrap">
        <div>
          <Link href="/" className="flex items-center gap-2 no-underline mb-3">
            <div className="w-7 h-7 bg-green-mid rounded-[6px] flex items-center justify-center text-white font-serif text-sm font-semibold">
              F
            </div>
            <span className="font-serif text-lg font-semibold text-white tracking-[-0.02em]">
              Form<span className="text-green">Right</span>
            </span>
          </Link>
          <p className="text-[13px] leading-[1.65] max-w-[260px] mt-3">
            Helping entrepreneurs find the right LLC formation service since 2024. Free, unbiased, and transparent about how we earn.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/40 mb-3.5">Services</div>
          <ul className="list-none flex flex-col gap-2">
            <li><Link href="/reviews/zenbusiness" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">ZenBusiness Review</Link></li>
            <li><Link href="/reviews/northwest-registered-agent" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Northwest Review</Link></li>
            <li><Link href="/reviews/legalzoom" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">LegalZoom Review</Link></li>
            <li><Link href="/reviews/bizee" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Bizee Review</Link></li>
            <li><Link href="/reviews/tailor-brands" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Tailor Brands Review</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/40 mb-3.5">Guides</div>
          <ul className="list-none flex flex-col gap-2">
            <li><Link href="/guides/how-to-form-llc" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">How to Form an LLC</Link></li>
            <li><Link href="/guides/llc-vs-s-corp" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">LLC vs S-Corp</Link></li>
            <li><Link href="/guides/llc-state-fees" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">State Filing Fees</Link></li>
            <li><Link href="/guides/best-state-for-llc" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Delaware vs Home State</Link></li>
            <li><Link href="/guides/llc-operating-agreement" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Operating Agreement Guide</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/40 mb-3.5">Company</div>
          <ul className="list-none flex flex-col gap-2">
            <li><a href="#" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">How We Make Money</a></li>
            <li><a href="#" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Editorial Standards</a></li>
            <li><a href="#" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-[13px] text-white/50 no-underline hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-3 flex-wrap">
        <div className="text-[12px]">&copy; 2025 FormRight (formright.ai). All rights reserved.</div>
        <div className="text-[11px] max-w-[500px] leading-[1.5] opacity-60">
          Affiliate disclosure: FormRight earns commissions when you sign up through our links, at no extra cost to you. This doesn&apos;t influence our recommendations. See our editorial standards for details.
        </div>
      </div>
    </footer>
  )
}
