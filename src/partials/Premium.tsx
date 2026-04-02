const Premium = () => (
  <section id="premium" style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      <div
        className="flex flex-col items-center justify-between gap-12 rounded-[2rem] p-10 md:flex-row md:items-start md:p-16"
        style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
        data-reveal
      >
        {/* Left column */}
        <div className="flex max-w-[540px] flex-col gap-8">
          <div>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
            >
              Premium Services
            </p>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#FFFFFF',
                fontWeight: 600,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              AI speed. Human polish.
            </h2>
          </div>
          <p
            className="text-lg leading-relaxed md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif", color: '#D9E2EC' }}
          >
            We use AI to move fast — but we don’t leave it there.
          </p>
          <div
            className="flex flex-col gap-2 border-l-2 py-1 pl-6"
            style={{ borderColor: '#2A9D8F' }}
          >
            <p
              className="text-base font-medium italic"
              style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
            >
              Fast to build. Properly finished.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="/contact/"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold no-underline"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Request a premium version
            </a>
          </div>
        </div>

        {/* Right column - Checklist */}
        <div
          className="w-full max-w-[420px] rounded-2xl bg-[#091722]/50 p-8 md:p-10"
          style={{ border: '1px solid #1E3A4C' }}
        >
          <p
            className="mb-6 text-sm font-medium"
            style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
          >
            Every premium site is refined with real design thinking:
          </p>
          <ul className="flex flex-col gap-5">
            {[
              'Better structure',
              'Better spacing',
              'Better typography',
              'Better user experience',
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#2A9D8F15', color: '#2A9D8F' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="11.66 3.5 5.25 9.91 2.33 7" />
                  </svg>
                </div>
                <span
                  className="text-lg font-medium"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: '#FFFFFF',
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export { Premium };
