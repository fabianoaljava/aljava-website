const faqs = [
  {
    q: 'How does it work?',
    a: 'We take a few details about your business and generate a clean website using AI. Then we review it to make sure it looks right and is ready to go live.',
  },
  {
    q: 'Is it really free to start?',
    a: 'Yes. You can start with a free website for 3 months. After that, it continues at £29.90/month if you want to keep it live.',
  },
  {
    q: 'Can I customise my website?',
    a: 'Yes — but we keep it simple. You can upgrade to the Studio plan if you want a more refined look, branding and layout improvements.',
  },
  {
    q: "What's the difference between Launch and Studio?",
    a: 'Launch is fast and functional. Studio adds a more polished, premium feel with logo options, design system and better visual structure.',
  },
  {
    q: 'Do I need to manage anything technical?',
    a: 'No. We handle hosting, setup and updates. You just tell us what you need.',
  },
  {
    q: 'Can I upgrade later?',
    a: 'Yes. You can start simple and upgrade anytime as your business grows.',
  },
  {
    q: 'How long does it take to get online?',
    a: 'Usually within a few days. The goal is to get you live quickly, not stuck in a long process.',
  },
  {
    q: 'Do you offer refunds?',
    a: "You're not locked in. If it's not right for you, you can cancel anytime.",
  },
  {
    q: 'Can you add booking, ecommerce or automation?',
    a: "Yes — that's part of the Advanced plan. Perfect if you want to grow beyond a simple website.",
  },
];

const FAQ = () => (
  <section id="faq" style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col items-start gap-16 md:flex-row md:gap-24">
        {/* Left heading */}
        <div className="shrink-0 md:w-[360px]" data-reveal>
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
          >
            Everything you need to know before getting started. Can't find your
            answer? Just get in touch.
          </p>
        </div>

        {/* Right FAQ list */}
        <div
          className="flex flex-1 flex-col"
          data-reveal
          data-reveal-delay="200"
        >
          {faqs.map((faq, idx) => (
            <details
              key={faq.q}
              className="group"
              style={{
                borderBottom: '1px solid #1E3A4C',
                paddingTop: idx === 0 ? 0 : undefined,
              }}
            >
              <summary
                className="flex items-center justify-between gap-4 py-5"
                style={{ listStyle: 'none' }}
              >
                <span
                  className="text-base font-medium"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: '#FFFFFF',
                  }}
                >
                  {faq.q}
                </span>
                <div
                  className="faq-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#162D40', color: '#2A9D8F' }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <line x1="6" y1="0" x2="6" y2="12" />
                    <line x1="0" y1="6" x2="12" y2="6" />
                  </svg>
                </div>
              </summary>
              <p
                className="pb-5 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { FAQ };
