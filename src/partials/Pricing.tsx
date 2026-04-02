import { useState } from 'react';

const CheckIcon = ({ color = '#2A9D8F' }: { color?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{ flexShrink: 0, marginTop: 3 }}
  >
    <circle cx="7" cy="7" r="7" fill={color} fillOpacity="0.15" />
    <path
      d="M4 7l2 2 4-4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type PlanData = {
  name: string;
  monthly: {
    price: string;
    description: string;
    subNote?: string;
    badge?: string;
  };
  yearly: {
    price: string;
    description: string;
    subNote?: string;
    badge?: string;
  };
  features: string[];
  note?: string; // e.g. "Best for: …" or positioning line
  cta: string;
  highlighted: boolean;
};

const plans: PlanData[] = [
  {
    name: 'Launch',
    monthly: {
      price: '£0',
      description: 'Free for 3 months',
      subNote: 'then £29.90/month',
    },
    yearly: {
      price: '£0',
      description: 'Free for 3 months',
      subNote: 'then £23.92/month (−20%)',
      badge: 'Save 20%',
    },
    features: [
      'Automated website',
      'Fast setup',
      'Clean and functional',
      'Hosting included',
    ],
    note: 'Best for: Startups, side projects, new businesses',
    cta: 'Get your free website',
    highlighted: false,
  },
  {
    name: 'Studio',
    monthly: {
      price: '£39.90',
      description: 'Per month + one-off setup',
    },
    yearly: {
      price: '£31.92',
      description: 'Per month, billed yearly',
      subNote: '+ one-off setup fee',
      badge: 'Save 20%',
    },
    features: [
      'Everything in Launch',
      '3 logo options',
      'Mini design system',
      'Styling based on websites you like',
      'Refined layout and spacing',
      'Stronger visual hierarchy',
    ],
    note: 'Premium without the endless meetings.',
    cta: 'Get started with Studio',
    highlighted: true,
  },
  {
    name: 'Advanced',
    monthly: {
      price: '£249.90',
      description: 'Per month',
    },
    yearly: {
      price: '£199.92',
      description: 'Per month, billed yearly',
      badge: 'Save 20%',
    },
    features: [
      'Everything in Studio',
      'Advanced UX',
      'Booking systems',
      'Ecommerce',
      'Automations',
      'Ongoing optimisation',
    ],
    note: 'Best for: Businesses ready to grow and scale',
    cta: 'Contact us',
    highlighted: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="plans" style={{ backgroundColor: '#091722' }}>
      <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
        {/* Header */}
        <div className="mb-16 text-center" data-reveal>
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
          >
            Plan
          </p>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Start simple. Grow when you're ready.
          </h2>
          <p
            className="mx-auto max-w-xl text-lg"
            style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
          >
            Choose the perfect plan for your design projects, from startups to
            enterprises.
          </p>

          {/* Monthly / Yearly toggle */}
          <div
            className="mt-8 inline-flex items-center gap-0 rounded-full p-1.5"
            style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: !isYearly ? '#1F4E79' : 'transparent',
                color: !isYearly ? '#FFFFFF' : '#94A3B8',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: isYearly ? '#1F4E79' : 'transparent',
                color: isYearly ? '#FFFFFF' : '#94A3B8',
              }}
            >
              Yearly
              {/* "Save 20%" pill */}
              <span
                className="rounded-full px-2 py-0.5 text-xs font-bold"
                style={{ backgroundColor: '#2A9D8F22', color: '#2A9D8F' }}
              >
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const billing = isYearly ? plan.yearly : plan.monthly;
            return (
              <div
                key={plan.name}
                className="card-hover relative flex flex-col gap-8 rounded-2xl p-7"
                style={{
                  backgroundColor: '#0F2433',
                  border: plan.highlighted
                    ? '1px solid #1F4E79'
                    : '1px solid #1E3A4C',
                  boxShadow: plan.highlighted
                    ? '0 0 40px rgba(31,78,121,0.12)'
                    : 'none',
                  transform: plan.highlighted ? 'scale(1.02)' : 'none',
                }}
                data-reveal
                data-reveal-delay={String(idx * 100 + 100) as any}
              >
                {/* Most popular badge */}
                {plan.highlighted && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: '#F4A261',
                      color: '#091722',
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Price block */}
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: plan.highlighted ? '#2A9D8F' : '#94A3B8',
                      }}
                    >
                      {plan.name}
                    </p>
                    {/* Yearly saving badge per card */}
                    {isYearly && billing.badge && (
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                        style={{
                          backgroundColor: '#2A9D8F22',
                          color: '#2A9D8F',
                        }}
                      >
                        {billing.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-1 flex items-end gap-1">
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '2.5rem',
                        lineHeight: 1,
                        color: '#FFFFFF',
                        fontWeight: 700,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {billing.price}
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: '#94A3B8',
                    }}
                  >
                    {billing.description}
                  </p>
                  {billing.subNote && (
                    <p
                      className="mt-1 text-xs"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: '#1F7F74',
                      }}
                    >
                      {billing.subNote}
                    </p>
                  )}
                </div>

                <div
                  className="h-px w-full"
                  style={{ backgroundColor: '#1E3A4C' }}
                />

                {/* Features */}
                <ul className="flex grow flex-col gap-3.5">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: '#D9E2EC',
                      }}
                    >
                      <CheckIcon
                        color={plan.highlighted ? '#F4A261' : '#2A9D8F'}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Plan note (Best for / positioning) */}
                {plan.note && (
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: plan.highlighted ? '#F4A261' : '#94A3B8',
                      borderLeft: '2px solid',
                      borderColor: plan.highlighted ? '#F4A261' : '#1E3A4C',
                      paddingLeft: '0.75rem',
                    }}
                  >
                    {plan.note}
                  </p>
                )}

                {/* CTA */}
                <a
                  href={plan.name === 'Advanced' ? '/contact/' : '#contact'}
                  className={plan.highlighted ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Pricing };
