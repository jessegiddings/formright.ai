'use client'

import Link from 'next/link'

export default function Nav() {
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
        <li>
          <a href="#services" className="text-[13px] font-medium text-warm-gray no-underline hover:text-ink transition-colors">
            All Services
          </a>
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
