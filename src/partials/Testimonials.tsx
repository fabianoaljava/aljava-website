const reviews = [
  {
    name: 'Sarah T.',
    role: 'Founder, Bloom Coffee',
    avatar: '#1F4E79',
    quote:
      'We needed a website for our new cafe in days, not weeks. Aljava Studio got us live with a stunning, professional site before our grand opening. The speed is unmatched.',
  },
  {
    name: 'Mark R.',
    role: 'Director, Green Steps NGO',
    avatar: '#2A9D8F',
    quote:
      "As a small charity, we didn't have the budget for a big agency. Aljava gave us a credible online presence that looks like it cost thousands. Truly a life-saver.",
  },
  {
    name: 'Elena G.',
    role: 'CEO, TechFlow Startup',
    avatar: '#F4A261',
    quote:
      'The Launch plan was perfect for our MVP. We recently upgraded to the Studio plan for a more refined brand identity, and the transition was seamless and professional.',
  },
  {
    name: 'James W.',
    role: 'Property Consultant',
    avatar: '#163A5F',
    quote:
      "I'm not a tech person, so I wanted someone to handle everything. Aljava Studio takes care of the technical fluff so I can focus entirely on my clients and business.",
  },
  {
    name: 'Olivia L.',
    role: 'E-commerce Founder',
    avatar: '#1F7F74',
    quote:
      "The Advanced plan's automation features have saved me hours of manual work every week. It's fast to build, but properly finished with excellent user experience.",
  },
  {
    name: 'Daniel K.',
    role: 'Independent Consultant',
    avatar: '#DD8A3F',
    quote:
      'The clean, modern design has significantly improved my conversion rates. People now take my business seriously because of the professional site Aljava built for me.',
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F4A261">
        <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.88l-3.09 1.63.59-3.44L2 4.635l3.455-.505z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      <div className="mb-16 text-center" data-reveal>
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-widest"
          style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
        >
          Testimonials
        </p>
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#FFFFFF',
            fontWeight: 600,
            marginBottom: '1rem',
            lineHeight: 1.15,
          }}
        >
          Real businesses. Real results.
        </h2>
        <p
          className="mx-auto max-w-xl text-lg"
          style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
        >
          See how startups and small businesses went from nothing to a clean,
          professional online presence — quickly and without the usual hassle.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {reviews.map((r, idx) => (
          <div
            key={r.name}
            className="card-hover flex flex-col gap-5 rounded-2xl p-7"
            style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
            data-reveal
            data-reveal-delay={String((idx % 3) * 100 + 100) as any}
          >
            <Stars />
            <p
              className="grow text-sm leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: '#D9E2EC' }}
            >
              "{r.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{
                  backgroundColor: r.avatar,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {r.name.charAt(0)}
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: '#FFFFFF',
                  }}
                >
                  {r.name}
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: '#94A3B8',
                  }}
                >
                  {r.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Testimonials };
