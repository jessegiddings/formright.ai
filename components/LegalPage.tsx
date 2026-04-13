import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface LegalPageProps {
  title: string
  description?: string
  lastUpdated?: string
  children: React.ReactNode
}

export default function LegalPage({ title, description, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-cream">
        <div className="bg-paper border-b border-border">
          <div className="max-w-[800px] mx-auto px-6 md:px-12 pt-24 pb-10">
            <Link
              href="/"
              className="text-sm text-green font-medium no-underline hover:underline mb-4 inline-block"
            >
              ← Back to FormRight
            </Link>
            <h1 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-dark leading-[1.1] tracking-[-0.03em] mb-3">
              {title}
            </h1>
            {description && (
              <p className="text-base text-warm-gray leading-[1.65] max-w-[640px]">{description}</p>
            )}
            {lastUpdated && (
              <p className="text-[12px] text-warm-gray mt-4">Last updated: {lastUpdated}</p>
            )}
          </div>
        </div>

        <article className="max-w-[760px] mx-auto px-6 md:px-12 py-12">{children}</article>
      </div>
      <Footer />
    </>
  )
}
