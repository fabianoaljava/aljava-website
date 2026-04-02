const CTA = () => (
  <section style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
      <div
        className="relative flex flex-col items-start gap-8 overflow-hidden rounded-3xl p-12 md:p-20"
        style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
        data-reveal
      >
        {/* Ambient glows */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #1F4E79 0%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #2A9D8F 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[640px]">
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              lineHeight: 1.15,
              margin: '0 0 1.25rem',
            }}
          >
            Get started
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
          >
            Get online fast with a clean, professional website — then upgrade to
            a more premium look when you’re ready.
          </p>
        </div>

        <div
          className="relative z-10 flex flex-col gap-4 sm:flex-row"
          data-reveal
          data-reveal-delay="200"
        >
          <a
            href="/get-started/"
            className="btn-primary inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold no-underline"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get your free website
          </a>
          <a
            href="/get-started/"
            className="btn-secondary inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold no-underline"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Request a premium version
          </a>
        </div>
      </div>
    </div>
  </section>
);

export { CTA };
