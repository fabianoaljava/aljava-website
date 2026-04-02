import { useEffect, useState } from 'react';

import logo from '../images/aljava_logo_dark.svg';

const navLinks = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'What you get', href: '#what-you-get' },
  { label: 'Plans', href: '#plans' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Map scroll 0→80px to background opacity 0→1
  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 80, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const bgColor = `rgba(9, 23, 34, ${scrollProgress * 0.95})`;
  const backdropBlur = scrollProgress > 0.1 ? 'blur(12px)' : 'none';

  return (
    <>
      {/* ── Main bar ──────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 w-full transition-colors duration-200"
        style={{
          backgroundColor: bgColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between p-5 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center no-underline">
            <img src={logo.src} alt="Aljava" className="w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium no-underline transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D9E2EC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94A3B8';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + mobile burger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#"
              className="hidden rounded-full px-5 py-2.5 text-sm font-semibold no-underline transition-all duration-200 md:block"
              style={{
                backgroundColor: '#F4A261',
                color: '#091722',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#DD8A3F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F4A261';
              }}
            >
              Get Started
            </a>

            {/* Burger button — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl md:hidden"
              style={{ backgroundColor: 'rgba(31,78,121,0.2)' }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: '#D9E2EC',
                  transform: menuOpen
                    ? 'translateY(8px) rotate(45deg)'
                    : 'none',
                }}
              />
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: '#D9E2EC',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: '#D9E2EC',
                  transform: menuOpen
                    ? 'translateY(-8px) rotate(-45deg)'
                    : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ────────────────────────────────── */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          backgroundColor: '#091722',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          paddingTop: '80px', // height of navbar
        }}
      >
        <nav className="flex flex-col px-6 py-8">
          {/* Nav links */}
          <ul className="mb-8 flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b py-4 text-2xl font-semibold no-underline"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: '#FFFFFF',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.3s ease ${
                      0.05 * idx
                    }s, transform 0.3s ease ${0.05 * idx}s`,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block w-full rounded-2xl py-4 text-center text-lg font-semibold no-underline"
            style={{
              fontFamily: "'Inter', sans-serif",
              backgroundColor: '#F4A261',
              color: '#091722',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s',
            }}
          >
            Get Started for Free
          </a>
        </nav>
      </div>
    </>
  );
};

export { Navbar };
