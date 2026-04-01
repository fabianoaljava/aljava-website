const reviews = [
  {
    name: 'John D.',
    role: 'Creative Director',
    avatar: '#1F4E79',
    quote:
      "Using this AI-powered design assistant has completely transformed the way I approach my projects. It's like having a professional designer on call 24/7. Highly recommend it!",
  },
  {
    name: 'Michael S.',
    role: 'Freelance Designer',
    avatar: '#2A9D8F',
    quote:
      'The design suggestions are spot on and the automated features save me so much time. I can focus more on creativity rather than getting bogged down in details.',
  },
  {
    name: 'David L.',
    role: 'Marketing Manager',
    avatar: '#F4A261',
    quote:
      "This tool is a game-changer! It's incredibly intuitive and the results are always impressive. I can't imagine working without it now.",
  },
  {
    name: 'James K.',
    role: 'Agency Founder',
    avatar: '#163A5F',
    quote:
      "I was skeptical at first, but this AI assistant exceeded all my expectations. It's easy to use and delivers professional-grade designs effortlessly.",
  },
  {
    name: 'Robert P.',
    role: 'Brand Strategist',
    avatar: '#1F7F74',
    quote:
      'What an amazing tool! The AI understands my needs perfectly and helps me create stunning designs in no time. My productivity has doubled!',
  },
  {
    name: 'William M.',
    role: 'UX Lead',
    avatar: '#DD8A3F',
    quote:
      "I love how this AI-powered assistant blends technology and creativity. It's a must-have for any designer looking to streamline their workflow.",
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
          Customer Success Stories
        </h2>
        <p
          className="mx-auto max-w-xl text-lg"
          style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
        >
          Discover how our platform has helped businesses create outstanding
          content effortlessly.
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
