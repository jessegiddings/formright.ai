'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

interface TocItem {
  id: string
  label: string
}

interface GuideLayoutProps {
  title: string
  description: string
  tocItems: TocItem[]
  children: React.ReactNode
}

export default function GuideLayout({ title, description, tocItems, children }: GuideLayoutProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [tocItems])

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-paper border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 pt-24 pb-12">
          <Link href="/" className="text-sm text-green font-medium no-underline hover:underline mb-4 inline-block">&larr; Back to FormRight</Link>
          <h1 className="font-serif text-[clamp(32px,4vw,48px)] font-bold text-dark leading-[1.1] tracking-[-0.03em] mb-4">{title}</h1>
          <p className="text-lg text-warm-gray max-w-[600px]">{description}</p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Main content */}
          <article className="flex-1 min-w-0">
            {children}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-[13px] text-warm-gray italic leading-relaxed">
                FormRight earns a commission if you sign up through our links, at no extra cost to you. This doesn&apos;t influence our recommendations.
              </p>
            </div>
          </article>

          {/* TOC Sidebar */}
          <div className="hidden md:block w-[250px] flex-shrink-0">
            <div className="sticky top-[80px]">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-warm-gray mb-3">On this page</div>
              <nav className="flex flex-col gap-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-[13px] py-1 pl-3 border-l-2 no-underline transition-colors ${
                      activeId === item.id
                        ? 'border-l-green text-green font-medium'
                        : 'border-l-border text-warm-gray hover:text-dark hover:border-l-dark'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t border-border">
                <Link href="/#quiz" className="text-sm text-green font-medium no-underline hover:underline">
                  Take the free quiz &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  )
}
