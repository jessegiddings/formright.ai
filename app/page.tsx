import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ServiceStrip from '@/components/ServiceStrip'
import QuizCard from '@/components/QuizCard'
import CompareTable from '@/components/CompareTable'
import ServiceCards from '@/components/ServiceCards'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import ChatWidget from '@/components/ChatWidget'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ServiceStrip />

      {/* Quiz Section */}
      <section className="py-[60px] md:py-[100px] px-6 md:px-10 max-w-[820px] mx-auto" id="quiz">
        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-green mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-0.5 bg-green" />
          Personalized Match
        </div>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] text-dark mb-4">
          Find your <em className="italic text-green">perfect</em> fit
        </h2>
        <p className="text-base text-warm-gray leading-[1.65] mb-12 max-w-[520px]">
          Answer 5 questions and we&apos;ll tell you exactly which service fits your situation — and which ones to avoid.
        </p>
        <QuizCard />
      </section>

      <CompareTable />
      <ServiceCards />
      <FAQ />
      <CTASection />
      <ChatWidget />
      <Footer />
    </>
  )
}
