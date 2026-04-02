const items = [
  'A clean, modern website',
  'Mobile-friendly design',
  'Contact form',
  'Hosted and managed',
  'Fast setup',
  'No technical work required',
];

const CheckCircle = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    style={{ flexShrink: 0, marginTop: 2 }}
  >
    <circle cx="9" cy="9" r="9" fill="#2A9D8F" fillOpacity="0.15" />
    <path
      d="M5.5 9l2.5 2.5 4.5-4.5"
      stroke="#2A9D8F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatYouGet = () => (
  <section id="what-you-get" style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      <div
        className="flex flex-col items-center gap-12 md:flex-row md:gap-20"
        data-reveal
      >
        {/* Text side */}
        <div className="flex max-w-[520px] flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
            >
              What You Get
            </p>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: '#FFFFFF',
                fontWeight: 600,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Everything you need to get started
            </h2>
          </div>

          {/* Feature list */}
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle />
                <span
                  className="text-base leading-snug"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: '#D9E2EC',
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Supporting line */}
          <p
            className="text-base leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#94A3B8',
              borderLeft: '2px solid #2A9D8F',
              paddingLeft: '1rem',
            }}
          >
            You don't need to learn anything. We handle it.
          </p>
        </div>

        {/* Visual side */}
        <div className="w-full max-w-[480px] flex-1">
          <div
            className="overflow-hidden rounded-2xl"
            style={{ border: '1px solid #1E3A4C' }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
              alt="Clean, modern website on a laptop"
              className="block h-auto w-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { WhatYouGet };
