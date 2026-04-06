export default function CTASection() {
  return (
    <section className="py-20 md:py-[100px] px-6 md:px-12 text-center relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(26,107,71,0.06) 0%, transparent 70%)' }}
      />
      <div className="max-w-[600px] mx-auto relative z-[2]">
        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-green mb-3 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-0.5 bg-green" />
          Ready?
        </div>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-0.03em] leading-[1.1] text-dark mb-4">
          Find your <em className="italic text-green">match</em> in 60 seconds
        </h2>
        <p className="text-[17px] text-warm-gray leading-[1.65] mb-9">
          Answer 5 questions and get a personalized recommendation. No account, no email required.
        </p>
        <a
          href="#quiz"
          className="bg-green text-white font-semibold text-base px-10 py-4 rounded-[50px] no-underline inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(26,107,71,0.25)] hover:bg-green-mid hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(26,107,71,0.3)] transition-all"
        >
          Take the Free Quiz →
        </a>
        <div className="mt-4 text-[12px] text-warm-gray flex items-center justify-center gap-4 flex-wrap">
          <span><span className="text-green">✓ </span>Completely free</span>
          <span><span className="text-green">✓ </span>No email required</span>
          <span><span className="text-green">✓ </span>Unbiased recommendations</span>
        </div>
      </div>
    </section>
  )
}
