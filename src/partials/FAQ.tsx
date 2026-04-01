const faqs = [
  {
    q: 'How does the AI generate designs?',
    a: 'Our AI uses advanced machine learning models trained on millions of design patterns to generate unique, tailored designs based on your brief and preferences.',
  },
  {
    q: 'Can I customize the AI-generated designs?',
    a: 'Absolutely. Every design can be refined and customized using our intuitive editor. Adjust colors, fonts, layouts, and more to match your vision perfectly.',
  },
  {
    q: 'What support options are available?',
    a: 'We offer email support on all plans. Pro users get priority support, and Enterprise clients have a dedicated account manager available 24/7.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'Yes! Our Free plan lets you experience the core features without any credit card required. Upgrade anytime when you need more power.',
  },
  {
    q: 'How secure is my data?',
    a: 'We take security seriously. All data is encrypted in transit and at rest. We are SOC 2 Type II compliant and your designs are never used to train our models.',
  },
  {
    q: 'What integrations are available?',
    a: 'We integrate with Figma, Adobe XD, Sketch, Notion, Asana, Slack, Jira, and GitHub. More integrations are added regularly based on user feedback.',
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
            Have questions about our AI-Powered Design Assistant? Find answers
            to the most common questions below.
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
