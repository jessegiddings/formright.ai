export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[100px] pb-[60px] md:px-10 md:pt-[120px] md:pb-20 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--sand) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Green blur */}
      <div className="absolute w-[700px] h-[700px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(26,107,71,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-[2] max-w-[780px]">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-1.5 bg-green-light border border-green/20 rounded-[20px] px-3.5 py-[5px] text-[12px] font-semibold text-green tracking-[0.04em] uppercase mb-7 animate-[slideUp_0.6s_ease_0.05s_forwards] opacity-0">
          <div className="w-1.5 h-1.5 bg-green rounded-full animate-[blink_2s_ease-in-out_infinite]" />
          Free · No account required
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[42px] md:text-[clamp(44px,6vw,80px)] font-bold leading-[1.05] tracking-[-0.03em] text-dark mb-6 animate-[slideUp_0.6s_ease_0.15s_forwards] opacity-0">
          The <em className="italic text-green">right</em> LLC service
          <br />
          for your specific situation
        </h1>

        {/* Subheading */}
        <p className="text-lg font-normal leading-[1.65] text-warm-gray max-w-[560px] mx-auto mb-10 animate-[slideUp_0.6s_ease_0.25s_forwards] opacity-0">
          Stop reading 47 comparison articles. Answer{' '}
          <strong className="text-ink font-semibold">5 quick questions</strong> and get a personalized
          recommendation — plus honest pros and cons for every option.
        </p>

        {/* CTA group */}
        <div className="flex items-center justify-center gap-3.5 mb-14 flex-wrap animate-[slideUp_0.6s_ease_0.35s_forwards] opacity-0">
          <a
            href="#quiz"
            className="bg-green text-white font-semibold text-[15px] px-8 py-3.5 rounded-[50px] no-underline inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(26,107,71,0.25)] hover:bg-green-mid hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(26,107,71,0.3)] transition-all"
          >
            Start the 60-second quiz
            <span>→</span>
          </a>
          <a href="#compare" className="text-sm text-warm-gray no-underline flex items-center gap-1.5 hover:text-ink transition-colors">
            Skip to comparison ↓
          </a>
        </div>

        {/* Proof bar */}
        <div className="flex items-center justify-center gap-8 flex-wrap animate-[slideUp_0.6s_ease_0.45s_forwards] opacity-0">
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-serif text-[26px] font-bold text-dark tracking-[-0.03em]">47K+</span>
            <span className="text-[12px] text-warm-gray font-medium">Entrepreneurs helped</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-serif text-[26px] font-bold text-dark tracking-[-0.03em]">$0</span>
            <span className="text-[12px] text-warm-gray font-medium">Cost to use this tool</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-serif text-[26px] font-bold text-dark tracking-[-0.03em]">60s</span>
            <span className="text-[12px] text-warm-gray font-medium">Time to recommendation</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-serif text-[26px] font-bold text-dark tracking-[-0.03em]">4.9★</span>
            <span className="text-[12px] text-warm-gray font-medium">User rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
