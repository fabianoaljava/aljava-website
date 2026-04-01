const Footer = () => (
  <footer
    style={{ backgroundColor: '#091722', borderTop: '1px solid #1E3A4C' }}
  >
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
      {/* Top row */}
      <div className="mb-12 flex flex-col items-start justify-between gap-12 md:flex-row">
        {/* Brand */}
        <div className="flex max-w-[280px] flex-col gap-4">
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ backgroundColor: '#1F4E79' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L17 6V14L10 18L3 14V6L10 2Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </svg>
            </div>
            <span
              className="text-xl font-semibold"
              style={{ color: '#FFFFFF' }}
            >
              AI Studio
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
            AI-powered design assistant that transforms your creative vision
            into stunning realities.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#94A3B8' }}
            >
              Product
            </p>
            <ul className="flex flex-col gap-3">
              {['How it Works', 'Features', 'Pricing'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm no-underline transition-colors"
                    style={{ color: '#D9E2EC' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#94A3B8' }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {['About', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm no-underline transition-colors"
                    style={{ color: '#D9E2EC' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row"
        style={{ borderTop: '1px solid #1E3A4C' }}
      >
        <p className="text-xs" style={{ color: '#94A3B8' }}>
          Made by{' '}
          <span style={{ color: '#D9E2EC', fontWeight: 600 }}>
            Aljava Studio
          </span>{' '}
          | Powered by Astro
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms & Conditions'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs no-underline transition-colors"
              style={{ color: '#94A3B8' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
