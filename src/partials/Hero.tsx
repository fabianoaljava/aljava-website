const Hero = () => (
  <section id="hero" style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-8 md:px-8 md:py-16">
      <div
        className="relative flex flex-col items-start overflow-hidden rounded-[2.5rem] md:flex-row"
        style={{ backgroundColor: '#0F2433', minHeight: '580px' }}
        data-reveal
      >
        {/* Text content */}
        <div className="z-10 flex max-w-[600px] flex-1 flex-col justify-center gap-8 p-10 md:p-14">
          <div className="flex flex-col gap-4">
            <h1
              className="font-bold leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.25rem)',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              Just a website.
              <br />
              No fluff.
            </h1>
            <p
              className="max-w-[480px] text-base leading-relaxed md:text-lg"
              style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
            >
              Get online fast with a clean, professional website — then upgrade
              to a more premium look when you’re ready.
            </p>

            <p>
              Built for startups, small businesses and charities that just need
              something that works — without the usual agency process.
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-3"
            data-reveal
            data-reveal-delay="200"
          >
            <a
              href="#"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold no-underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Get your free website
            </a>
            <a
              href="#"
              className="btn-secondary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold no-underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Hero image – using provided local asset */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-full md:h-full md:w-[60%]">
          <div className="relative h-full w-full">
            <img
              src="/assets/images/hero.png"
              alt="AI Design Dashboard"
              className="absolute inset-0 h-full w-full object-cover object-left-top"
              style={{ borderRadius: '0 2.5rem 2.5rem 0' }}
            />
            {/* Left fade overlay so text reads cleanly */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, #0F2433 0%, rgba(15,36,51,0.6) 45%, transparent 75%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Hero };
