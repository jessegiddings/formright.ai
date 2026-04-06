export default function ServiceStrip() {
  const services = [
    { icon: '🏢', name: 'ZenBusiness' },
    { icon: '⚖️', name: 'LegalZoom' },
    { icon: '🛡️', name: 'Northwest' },
    { icon: '🚀', name: 'Bizee' },
    { icon: '🎨', name: 'Tailor Brands' },
    { icon: '🔑', name: 'Rocket Lawyer' },
  ]

  return (
    <div className="bg-paper border-t border-b border-border py-5 px-5 md:px-12 flex items-center justify-center gap-2 text-[13px] text-warm-gray flex-wrap">
      <span>Services we compare:</span>
      {services.map((s) => (
        <div
          key={s.name}
          className="bg-white border border-border rounded-[20px] px-3.5 py-[5px] text-[12px] font-medium text-medium flex items-center gap-[5px]"
        >
          {s.icon} {s.name}
        </div>
      ))}
    </div>
  )
}
