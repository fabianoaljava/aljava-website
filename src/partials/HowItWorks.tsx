const steps = [
  {
    number: '01',
    title: 'Tell us about your business',
    description:
      'Share a few details about what you do. No long forms. No complicated briefing.',
    color: '#1F4E79',
  },
  {
    number: '02',
    title: 'We generate your website',
    description:
      'We use AI to build your first version quickly — clean, structured and ready to go.',
    color: '#2A9D8F',
  },
  {
    number: '03',
    title: 'You review and go live',
    description: "Happy with it? We publish it. You're online.",
    color: '#F4A261',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      {/* Section header */}
      <div className="mb-16 max-w-[680px] md:mb-20" data-reveal>
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-widest"
          style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
        >
          How it Works
        </p>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#FFFFFF',
            fontWeight: 600,
            marginBottom: '1.25rem',
            lineHeight: 1.15,
          }}
        >
          Simple. Fast. Done.
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
        >
          See how we turn your idea into a clean, professional website — quickly
          and without the usual hassle.
        </p>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className="card-hover flex flex-col gap-6 rounded-2xl p-8"
            style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
            data-reveal
            data-reveal-delay={String(idx * 100 + 100) as any}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{
                backgroundColor: step.color,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {step.number}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  marginBottom: '0.625rem',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { HowItWorks };
