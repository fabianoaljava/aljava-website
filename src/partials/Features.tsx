const featureCards = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    ),
    title: 'High-Resolution Outputs',
    description:
      'Download your final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: 'Real-Time Collaboration',
    description:
      'Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
    title: 'Advanced Scheduling Tools',
    description:
      'Plan and schedule your design projects with ease. Use our scheduling tools to set deadlines, track milestones, and ensure timely delivery of your design work.',
  },
];

const Features = () => (
  <section id="features" style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      {/* Section header */}
      <div className="mb-16 max-w-[680px]" data-reveal>
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-widest"
          style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
        >
          Features
        </p>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#FFFFFF',
            fontWeight: 600,
            marginBottom: 0,
            lineHeight: 1.15,
          }}
        >
          Everything you need to create stunning designs
        </h2>
      </div>

      {/* 3-col cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {featureCards.map((card, idx) => (
          <div
            key={card.title}
            className="card-hover flex flex-col gap-5 rounded-2xl p-8"
            style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
            data-reveal
            data-reveal-delay={String(idx * 100 + 100) as any}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ backgroundColor: '#162D40', color: '#2A9D8F' }}
            >
              {card.icon}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Features };
