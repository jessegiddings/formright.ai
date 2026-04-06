'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [reviewsOpen, setReviewsOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[900] bg-cream/[0.92] backdrop-blur-[16px] border-b border-border h-[60px] flex items-center justify-between px-5 md:px-12">
      <Link href="/" className="flex items-center gap-2 no-underline">
        <div className="w-7 h-7 bg-green rounded-[6px] flex items-center justify-center text-white font-serif text-sm font-semibold">
          F
        </div>
        <span className="font-serif text-lg font-semibold text-dark tracking-[-0.02em]">
          Form<span className="text-green">Right</span>
        </span>
      </Link>
      <ul className="hidden md:flex items-center gap-7 list-none">
        <li>
          <a href="#quiz" className="text-[13px] font-medium text-warm-gray no-underline hover:text-ink transition-colors">
            Find My Service
          </a>
        </li>
        <li>
          <a href="#compare" className="text-[13px] font-medium text-warm-gray no-underline hover:text-ink transition-colors">
            Compare
          </a>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setReviewsOpen(true)}
          onMouseLeave={() => setReviewsOpen(false)}
        >
          <span className="text-[13px] font-medium text-warm-gray no-underline hover:text-ink transition-colors cursor-pointer select-none">
            Reviews
          </span>
          {reviewsOpen && (
            <ul className="absolute top-full left-0 mt-1 bg-white border border-border rounded-xl shadow-lg z-50 list-none min-w-[200px] py-2">
              <li><Link href="/reviews/zenbusiness" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">ZenBusiness Review</Link></li>
              <li><Link href="/reviews/northwest" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">Northwest Review</Link></li>
              <li><Link href="/reviews/legalzoom" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">LegalZoom Review</Link></li>
              <li><Link href="/reviews/bizee" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">Bizee Review</Link></li>
              <li><Link href="/reviews/rocket-lawyer" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">Rocket Lawyer Review</Link></li>
              <li><Link href="/reviews/tailor-brands" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">Tailor Brands Review</Link></li>
            </ul>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => setGuidesOpen(true)}
          onMouseLeave={() => setGuidesOpen(false)}
        >
          <span className="text-[13px] font-medium text-warm-gray no-underline hover:text-ink transition-colors cursor-pointer select-none">
            Guides
          </span>
          {guidesOpen && (
            <ul className="absolute top-full left-0 mt-1 bg-white border border-border rounded-xl shadow-lg z-50 list-none min-w-[220px] py-2">
              <li><Link href="/guides/how-to-form-llc" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">How to Form an LLC</Link></li>
              <li><Link href="/guides/llc-vs-scorp" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">LLC vs S-Corp</Link></li>
              <li><Link href="/guides/best-state-for-llc" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">Best State for LLC</Link></li>
              <li><Link href="/guides/llc-state-fees" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">LLC Filing Fees by State</Link></li>
              <li><Link href="/guides/what-is-registered-agent" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">What Is a Registered Agent?</Link></li>
              <li><Link href="/guides/llc-operating-agreement" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">LLC Operating Agreement</Link></li>
              <li><Link href="/guides/how-long-to-form-llc" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">How Long to Form LLC</Link></li>
              <li><Link href="/guides/zenbusiness-vs-legalzoom" className="block px-4 py-2 text-[13px] font-medium text-warm-gray no-underline hover:bg-green-light hover:text-green transition-colors">ZenBusiness vs LegalZoom</Link></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#faq" className="text-[13px] font-medium text-warm-gray no-underline hover:text-ink transition-colors">
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#quiz"
            className="bg-green text-white px-[18px] py-2 rounded-[20px] font-semibold text-[13px] no-underline hover:bg-green-mid transition-colors"
          >
            Get Started Free
          </a>
        </li>
      </ul>
    </nav>
  )
}
