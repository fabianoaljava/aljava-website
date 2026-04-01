const Navbar = () => (
  <header
    className="sticky top-0 z-50 w-full"
    style={{ backgroundColor: '#091722' }}
  >
    <div className="mx-auto flex max-w-[1200px] items-center justify-between p-5 md:px-8">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 no-underline">
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
        <span className="text-xl font-semibold tracking-tight text-white">
          AI Studio
        </span>
      </a>

      {/* Nav links */}
      <nav className="hidden items-center gap-8 md:flex">
        {['How it Works', 'Features', 'Pricing', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm font-medium no-underline transition-colors duration-200"
            style={{ color: '#94A3B8' }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = '#D9E2EC';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = '#94A3B8';
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="rounded-full px-5 py-2.5 text-sm font-semibold no-underline transition-all duration-200"
          style={{ backgroundColor: '#F4A261', color: '#091722' }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#DD8A3F';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#F4A261';
          }}
        >
          Get Started
        </a>
      </div>
    </div>
  </header>
);

export { Navbar };
