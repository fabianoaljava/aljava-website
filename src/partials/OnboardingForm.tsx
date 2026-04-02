import { useState } from 'react';

/* ── Types ─────────────────────────────────────────────────── */
type TextInputField = {
  type: 'text' | 'email' | 'tel' | 'url';
  key: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};
type TextareaField = {
  type: 'textarea';
  key: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};
type RadioField = {
  type: 'radio';
  key: string;
  label: string;
  options: string[];
  required?: boolean;
};
type CheckboxField = {
  type: 'checkbox-group';
  key: string;
  label: string;
  options: string[];
  required?: boolean;
};
type SingleCheck = {
  type: 'single-check';
  key: string;
  label: string;
  required?: boolean;
};
type AnyField =
  | TextInputField
  | TextareaField
  | RadioField
  | CheckboxField
  | SingleCheck;

type StepConfig = { title: string; subtitle: string; fields: AnyField[] };

type FormValues = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessDescription: string;
  businessStage: string;
  location: string;
  targetAudience: string;
  package: string;
  websiteGoals: string[];
  primaryAction: string;
  hasWebsite: string;
  currentWebsiteUrl: string;
  service1: string;
  service2: string;
  service3: string;
  showPrices: string;
  pricingDetails: string;
  style: string;
  toneOfVoice: string;
  hasBrandColors: string;
  brandColors: string;
  hasLogo: string;
  websitesLike: string;
  hasContent: string;
  hasImages: string;
  timeline: string;
  additionalInfo: string;
  consent: boolean;
};

/* ── Steps ─────────────────────────────────────────────────── */
const STEPS: StepConfig[] = [
  {
    title: "Let's start with the basics",
    subtitle: 'Tell us who you are and what your business is called.',
    fields: [
      {
        type: 'text',
        key: 'name',
        label: 'Your name',
        required: true,
        placeholder: 'Jane Smith',
      },
      {
        type: 'email',
        key: 'email',
        label: 'Email address',
        required: true,
        placeholder: 'jane@yourbusiness.com',
      },
      {
        type: 'tel',
        key: 'phone',
        label: 'Phone number (optional)',
        placeholder: '+44 7700 000000',
      },
      {
        type: 'text',
        key: 'businessName',
        label: 'Business name',
        required: true,
        placeholder: 'Your Company Ltd',
      },
    ],
  },
  {
    title: 'Tell us about your business',
    subtitle: 'A few details so we understand what you do.',
    fields: [
      {
        type: 'textarea',
        key: 'businessDescription',
        label: 'What does your business do?',
        required: true,
        placeholder: 'Describe your offer and who you help.',
      },
      {
        type: 'radio',
        key: 'businessStage',
        label: 'What stage is your business at?',
        required: true,
        options: [
          'Just getting started',
          'Recently launched',
          'Already trading',
          'Growing and ready to improve',
          'Charity / community organisation',
        ],
      },
      {
        type: 'text',
        key: 'location',
        label: 'Where are you based or where do you operate?',
        required: true,
        placeholder: 'e.g. London, UK — or online',
      },
      {
        type: 'textarea',
        key: 'targetAudience',
        label: 'Who do you help or sell to? (optional)',
        placeholder: 'e.g. Local families, small business owners...',
      },
    ],
  },
  {
    title: 'What do you need from the website?',
    subtitle: 'Choose the option that fits where you are right now.',
    fields: [
      {
        type: 'radio',
        key: 'package',
        label: 'Which package are you most interested in?',
        required: true,
        options: [
          'Launch – Free for 3 months, then £29.90/month',
          'Studio – £39.90/month + one-off premium setup',
          'Advanced – £249.90/month',
          'Not sure yet',
        ],
      },
      {
        type: 'checkbox-group',
        key: 'websiteGoals',
        label: 'What is the main goal of your website?',
        required: true,
        options: [
          'Look professional online',
          'Help people contact me',
          'Generate leads',
          'Take bookings',
          'Sell products',
          'Build trust',
          'Share information',
          'Support a charity or cause',
        ],
      },
      {
        type: 'radio',
        key: 'primaryAction',
        label: 'What do you want people to do when they visit?',
        required: true,
        options: [
          'Call me',
          'Email me',
          'Fill in a contact form',
          'Book an appointment',
          'Buy something',
          'Learn more',
          'Donate',
          'Not sure yet',
        ],
      },
      {
        type: 'radio',
        key: 'hasWebsite',
        label: 'Do you already have a website?',
        required: true,
        options: [
          'No',
          'Yes, but it needs improving',
          'Yes, and I want to replace it',
        ],
      },
      {
        type: 'url',
        key: 'currentWebsiteUrl',
        label: 'Current website URL (optional)',
        placeholder: 'https://example.com',
      },
    ],
  },
  {
    title: 'What should we highlight?',
    subtitle: 'Add the main services, products or offers you want on the site.',
    fields: [
      {
        type: 'text',
        key: 'service1',
        label: 'Main service or offer 1',
        required: true,
        placeholder: 'e.g. Web design',
      },
      {
        type: 'text',
        key: 'service2',
        label: 'Main service or offer 2 (optional)',
        placeholder: 'e.g. SEO',
      },
      {
        type: 'text',
        key: 'service3',
        label: 'Main service or offer 3 (optional)',
        placeholder: 'e.g. Maintenance',
      },
      {
        type: 'radio',
        key: 'showPrices',
        label: 'Do you want to show prices on the website?',
        required: true,
        options: ['Yes', 'No', 'Not sure yet'],
      },
      {
        type: 'textarea',
        key: 'pricingDetails',
        label: 'Pricing details (optional)',
        placeholder: 'Share any pricing information you want to include.',
      },
    ],
  },
  {
    title: 'How should it feel?',
    subtitle: "We'll use this to shape the tone and style of the site.",
    fields: [
      {
        type: 'radio',
        key: 'style',
        label: 'Which style feels closest to your brand?',
        required: true,
        options: [
          'Clean and minimal',
          'Bold and modern',
          'Warm and friendly',
          'Premium and polished',
          'Calm and professional',
          'Not sure – choose for me',
        ],
      },
      {
        type: 'radio',
        key: 'toneOfVoice',
        label: 'Which tone of voice fits you best?',
        required: true,
        options: [
          'Friendly and approachable',
          'Professional and trustworthy',
          'Bold and confident',
          'Calm and clear',
          'Not sure – choose for me',
        ],
      },
      {
        type: 'radio',
        key: 'hasBrandColors',
        label: 'Do you already have brand colours?',
        required: true,
        options: ['Yes', 'No', 'Not sure'],
      },
      {
        type: 'text',
        key: 'brandColors',
        label: 'Brand colours (optional)',
        placeholder: 'e.g. Dark blue, white, gold',
      },
      {
        type: 'radio',
        key: 'hasLogo',
        label: 'Do you already have a logo?',
        required: true,
        options: ['Yes', 'No', 'I need help with that'],
      },
      {
        type: 'textarea',
        key: 'websitesLike',
        label: 'Share up to 3 websites you like (optional)',
        placeholder: 'Paste URLs or describe what you like about them.',
      },
    ],
  },
  {
    title: 'Almost done',
    subtitle: "A few final details, then we'll take it from there.",
    fields: [
      {
        type: 'radio',
        key: 'hasContent',
        label: 'Do you already have text/content for the website?',
        required: true,
        options: ['Yes', 'No', 'Some of it'],
      },
      {
        type: 'radio',
        key: 'hasImages',
        label: 'Do you have photos or images you want us to use?',
        required: true,
        options: ['Yes', 'No', 'Not yet'],
      },
      {
        type: 'radio',
        key: 'timeline',
        label: 'How soon do you want to get started?',
        required: true,
        options: [
          'As soon as possible',
          'Within the next 2 weeks',
          'Within the next month',
          'Just exploring for now',
        ],
      },
      {
        type: 'textarea',
        key: 'additionalInfo',
        label: 'Anything else we should know? (optional)',
        placeholder: 'Any extra details, questions or context...',
      },
      {
        type: 'single-check',
        key: 'consent',
        label: "I'm happy for Aljava Studio to contact me about this request.",
        required: true,
      },
    ],
  },
];

const INITIAL: FormValues = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  businessDescription: '',
  businessStage: '',
  location: '',
  targetAudience: '',
  package: '',
  websiteGoals: [],
  primaryAction: '',
  hasWebsite: '',
  currentWebsiteUrl: '',
  service1: '',
  service2: '',
  service3: '',
  showPrices: '',
  pricingDetails: '',
  style: '',
  toneOfVoice: '',
  hasBrandColors: '',
  brandColors: '',
  hasLogo: '',
  websitesLike: '',
  hasContent: '',
  hasImages: '',
  timeline: '',
  additionalInfo: '',
  consent: false,
};

/* ── Shared CSS-in-JS helpers ───────────────────────────────── */
const S = {
  bg: '#091722',
  surface: '#0F2433',
  border: '#1E3A4C',
  white: '#FFFFFF',
  light: '#D9E2EC',
  muted: '#94A3B8',
  teal: '#2A9D8F',
  amber: '#F4A261',
  blue: '#1F4E79',
  error: '#F87171',
};

const inputBase = {
  width: '100%',
  backgroundColor: S.bg,
  border: `1px solid ${S.border}`,
  borderRadius: '0.75rem',
  padding: '0.8rem 1rem',
  color: S.white,
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.9375rem',
  outline: 'none',
  boxSizing: 'border-box' as const,
};
const labelBase = {
  display: 'block',
  marginBottom: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: 500 as const,
  color: S.light,
  fontFamily: "'Inter', sans-serif",
};
const errBase = {
  fontSize: '0.8125rem',
  color: S.error,
  fontFamily: "'Inter', sans-serif",
  marginTop: '0.25rem',
};

/* ── Component ─────────────────────────────────────────────── */
const OnboardingForm = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormValues>({ ...INITIAL });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const current = STEPS[step]!;
  const total = STEPS.length;
  const isLastStep = step === total - 1;

  const clearError = (key: string) =>
    setErrors((prev) => {
      const e = { ...prev };
      delete e[key];
      return e;
    });

  const setField = (key: string, val: string | string[] | boolean) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    clearError(key);
  };

  const toggleCheckbox = (key: string, opt: string) => {
    const cur = (values[key as keyof FormValues] as string[]) || [];
    setField(
      key,
      cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    current.fields.forEach((f) => {
      if (!f.required) return;
      const v = values[f.key as keyof FormValues];
      if (f.type === 'single-check' && !v)
        errs[f.key] = 'Please confirm to continue.';
      else if (f.type === 'checkbox-group' && (v as string[]).length === 0)
        errs[f.key] = 'Please select at least one option.';
      else if (typeof v === 'string' && v.trim() === '')
        errs[f.key] = 'This field is required.';
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    if (isLastStep) {
      setSubmitted(true);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Field renderers ── */
  const renderField = (field: AnyField) => {
    const err = errors[field.key];

    if (
      field.type === 'text' ||
      field.type === 'email' ||
      field.type === 'tel' ||
      field.type === 'url'
    ) {
      return (
        <div
          key={field.key}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor={field.key} style={labelBase}>
            {field.label}
            {field.required && (
              <span style={{ color: S.teal, marginLeft: '0.25rem' }}>*</span>
            )}
          </label>
          <input
            id={field.key}
            type={field.type}
            value={values[field.key as keyof FormValues] as string}
            onChange={(e) => setField(field.key, e.target.value)}
            placeholder={field.placeholder}
            style={{ ...inputBase, borderColor: err ? S.error : S.border }}
          />
          {err && <span style={errBase}>{err}</span>}
        </div>
      );
    }

    if (field.type === 'textarea') {
      return (
        <div
          key={field.key}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor={field.key} style={labelBase}>
            {field.label}
            {field.required && (
              <span style={{ color: S.teal, marginLeft: '0.25rem' }}>*</span>
            )}
          </label>
          <textarea
            id={field.key}
            rows={3}
            value={values[field.key as keyof FormValues] as string}
            onChange={(e) => setField(field.key, e.target.value)}
            placeholder={field.placeholder}
            style={{
              ...inputBase,
              resize: 'none',
              borderColor: err ? S.error : S.border,
            }}
          />
          {err && <span style={errBase}>{err}</span>}
        </div>
      );
    }

    if (field.type === 'radio') {
      const selected = values[field.key as keyof FormValues] as string;
      return (
        <div
          key={field.key}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <p style={{ ...labelBase, marginBottom: '0.75rem' }}>
            {field.label}
            {field.required && (
              <span style={{ color: S.teal, marginLeft: '0.25rem' }}>*</span>
            )}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {field.options.map((opt) => {
              const on = selected === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setField(field.key, opt)}
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '0.75rem',
                    cursor: 'pointer',
                    border: on
                      ? `1px solid ${S.teal}`
                      : `1px solid ${S.border}`,
                    backgroundColor: on ? 'rgba(42,157,143,0.12)' : S.bg,
                    color: on ? S.teal : S.muted,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: on ? 600 : 400,
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      flexShrink: 0,
                      backgroundColor: on ? S.teal : 'transparent',
                      border: on ? 'none' : `1px solid ${S.border}`,
                      display: 'inline-block',
                    }}
                  />
                  {opt}
                </button>
              );
            })}
          </div>
          {err && (
            <span style={{ ...errBase, marginTop: '0.5rem' }}>{err}</span>
          )}
        </div>
      );
    }

    if (field.type === 'checkbox-group') {
      const selected =
        (values[field.key as keyof FormValues] as string[]) || [];
      return (
        <div
          key={field.key}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <p style={{ ...labelBase, marginBottom: '0.75rem' }}>
            {field.label}
            {field.required && (
              <span style={{ color: S.teal, marginLeft: '0.25rem' }}>*</span>
            )}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {field.options.map((opt) => {
              const on = selected.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleCheckbox(field.key, opt)}
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '0.75rem',
                    cursor: 'pointer',
                    border: on
                      ? `1px solid ${S.amber}`
                      : `1px solid ${S.border}`,
                    backgroundColor: on ? 'rgba(244,162,97,0.12)' : S.bg,
                    color: on ? S.amber : S.muted,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: on ? 600 : 400,
                    transition: 'all 0.15s ease',
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {err && (
            <span style={{ ...errBase, marginTop: '0.5rem' }}>{err}</span>
          )}
        </div>
      );
    }

    if (field.type === 'single-check') {
      const checked = values[field.key as keyof FormValues] as boolean;

      let containerBorder = `1px solid ${S.border}`;
      if (err) containerBorder = `1px solid ${S.error}`;
      else if (checked) containerBorder = `1px solid ${S.teal}`;

      return (
        <div
          key={field.key}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
        >
          <label
            htmlFor={field.key}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              cursor: 'pointer',
              padding: '1rem',
              borderRadius: '0.75rem',
              transition: 'all 0.15s ease',
              border: containerBorder,
              backgroundColor: checked ? 'rgba(42,157,143,0.08)' : S.bg,
            }}
          >
            <input
              id={field.key}
              type="checkbox"
              checked={checked}
              onChange={(e) => setField(field.key, e.target.checked)}
              style={{
                marginTop: '0.1rem',
                accentColor: S.teal,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '0.875rem',
                color: S.light,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.6,
              }}
            >
              {field.label}
            </span>
          </label>
          {err && <span style={errBase}>{err}</span>}
        </div>
      );
    }

    return null;
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <section
        style={{ backgroundColor: S.bg, minHeight: 'calc(100vh - 140px)' }}
      >
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '6rem 1.25rem',
          }}
        >
          <div
            style={{
              backgroundColor: S.surface,
              border: `1px solid ${S.border}`,
              borderRadius: '1.5rem',
              padding: '3rem 2.5rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: 'rgba(42,157,143,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M6 14l6 6 10-10"
                  stroke={S.teal}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: S.white,
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              You&apos;re all set
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: S.muted,
                lineHeight: 1.7,
                marginBottom: '0.5rem',
              }}
            >
              Thanks — your request has been sent.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: S.muted,
                lineHeight: 1.7,
              }}
            >
              We&apos;ll review your details and come back to you with the next
              steps.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: S.light,
                lineHeight: 1.7,
                fontSize: '0.9375rem',
                borderLeft: `2px solid ${S.teal}`,
                paddingLeft: '1rem',
                textAlign: 'left',
                marginTop: '1.5rem',
              }}
            >
              No fluff. No long process. Just a clear way to get your website
              started.
            </p>
            <a
              href="/"
              style={{
                display: 'inline-block',
                marginTop: '2rem',
                padding: '0.8rem 2rem',
                backgroundColor: S.amber,
                color: S.bg,
                borderRadius: '0.75rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* ── Main wizard ── */
  const pct = Math.round(((step + 1) / total) * 100);

  return (
    <section
      style={{ backgroundColor: S.bg, minHeight: 'calc(100vh - 140px)' }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '4rem 1.25rem 6rem',
        }}
      >
        {/* Progress */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.75rem',
            }}
          >
            <span
              style={{
                fontSize: '0.8125rem',
                color: S.muted,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Step {step + 1} of {total}
            </span>
            <span
              style={{
                fontSize: '0.8125rem',
                color: S.teal,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              {pct}%
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: S.border,
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${pct}%`,
                height: '100%',
                backgroundColor: S.teal,
                borderRadius: '2px',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
          {/* Step dots — desktop */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
            }}
          >
            {STEPS.map((s, i) => {
              const isDone = i < step;
              const isCurrent = i === step;

              let dotBg = S.surface;
              if (isDone) dotBg = S.teal;
              else if (isCurrent) dotBg = S.blue;

              let dotBorder = `1px solid ${S.border}`;
              if (isDone) dotBorder = `1px solid ${S.teal}`;
              else if (isCurrent) dotBorder = `1px solid ${S.blue}`;

              const dotColor = i <= step ? S.white : S.muted;
              return (
                <div
                  key={s.title}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: dotBg,
                      border: dotBorder,
                      color: dotColor,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isDone ? '✓' : i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: '1.5rem',
            padding: 'clamp(1.5rem, 5vw, 3rem)',
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: S.white,
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              {current.title}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: S.muted,
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {current.subtitle}
            </p>
          </div>

          {/* Fields */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {current.fields.map((f) => renderField(f))}
          </div>

          {/* Nav buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: step === 0 ? 'flex-end' : 'space-between',
              marginTop: '2.5rem',
              gap: '1rem',
            }}
          >
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                style={{
                  padding: '0.8rem 1.75rem',
                  borderRadius: '0.75rem',
                  border: `1px solid ${S.border}`,
                  backgroundColor: 'transparent',
                  color: S.light,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ← Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '0.75rem',
                border: 'none',
                backgroundColor: S.amber,
                color: S.bg,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '0.9375rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {isLastStep ? 'Get my website started →' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OnboardingForm };
