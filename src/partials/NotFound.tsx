const NotFound = () => (
  <section
    style={{ backgroundColor: '#091722', minHeight: 'calc(100vh - 140px)' }}
    className="flex items-center justify-center px-5"
  >
    {/* Ambient glow */}
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, rgba(31,78,121,0.22) 0%, transparent 60%)',
      }}
    />

    <div className="relative z-10 flex max-w-[560px] flex-col items-center gap-8 text-center">
      {/* 404 number */}
      <div className="relative select-none">
        <span
          className="block font-bold leading-none"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(7rem, 20vw, 12rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(31,78,121,0.5)',
            letterSpacing: '-0.05em',
          }}
        >
          404
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center font-bold leading-none"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(7rem, 20vw, 12rem)',
            color: '#1F4E79',
            opacity: 0.15,
            letterSpacing: '-0.05em',
          }}
          aria-hidden="true"
        >
          404
        </span>
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-4">
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 600,
            color: '#FFFFFF',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Page Not Found
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="/"
          className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold no-underline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 3L5 8l5 5"
            />
          </svg>
          Back to Home
        </a>
        <a
          href="#"
          className="btn-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold no-underline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Contact Support
        </a>
      </div>

      {/* Decorative dots */}
      <div className="mt-4 flex items-center gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i === 2 ? '8px' : '4px',
              height: i === 2 ? '8px' : '4px',
              backgroundColor: i === 2 ? '#2A9D8F' : '#1E3A4C',
            }}
          />
        ))}
      </div>
    </div>
  </section>
);

export { NotFound };
