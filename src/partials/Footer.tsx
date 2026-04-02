import logo from '../images/aljava_logo_dark.svg';

const Footer = () => (
  <footer style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
      {/* Top row */}
      <div className="mb-12 flex flex-col items-start justify-between gap-12 md:flex-row">
        {/* Brand */}
        <div className="flex max-w-[280px] flex-col gap-4">
          <div className="flex items-center gap-2">
            <a href="/" className="no-underline">
              <img src={logo.src} alt="Aljava" className="w-auto" />
            </a>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
            Simple websites for startups and small businesses — fast, clean and
            without the usual hassle.
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
              {[
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'What you get', href: '#what-you-get' },
                { label: 'Plans', href: '#plans' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm no-underline transition-colors"
                    style={{ color: '#D9E2EC' }}
                  >
                    {label}
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
              {[
                { label: 'About', href: '/about/' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Contact', href: '/contact/' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm no-underline transition-colors"
                    style={{ color: '#D9E2EC' }}
                  >
                    {label}
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
          <span style={{ color: '#D9E2EC', fontWeight: 600 }}>
            Aljava Studio
          </span>
        </p>
        <div className="flex gap-6">
          {[
            { label: 'Privacy Policy', href: '/privacy-policy/' },
            { label: 'Terms & Conditions', href: '/terms/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs no-underline transition-colors"
              style={{ color: '#94A3B8' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
