const brands = [
  { name: 'Dribbble', letter: 'D', color: '#E44D7B' },
  { name: 'Figma', letter: 'F', color: '#A259FF' },
  { name: 'Adobe', letter: 'A', color: '#FF0000' },
  { name: 'Notion', letter: 'N', color: '#FFFFFF' },
  { name: 'Webflow', letter: 'W', color: '#4353FF' },
  { name: 'Linear', letter: 'L', color: '#5E6AD2' },
  { name: 'Vercel', letter: 'V', color: '#FFFFFF' },
  { name: 'GitHub', letter: 'G', color: '#94A3B8' },
  { name: 'Slack', letter: 'S', color: '#4A154B' },
  { name: 'Asana', letter: 'A', color: '#F06A6A' },
];

// Duplicate for seamless infinite loop
const doubled = [...brands, ...brands];

const TrustedBy = () => (
  <section style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 pb-10 md:px-8">
      {/* Label */}
      <p
        className="mb-8 text-center text-xs uppercase tracking-[0.2em]"
        style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
      >
        Trusted by the world's leading teams
      </p>

      {/* Marquee track */}
      <div
        className="relative overflow-hidden"
        style={{
          mask: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="mx-10 flex shrink-0 select-none items-center gap-2.5"
              style={{ opacity: 0.55 }}
            >
              {/* Brand icon circle */}
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold"
                style={{
                  backgroundColor: `${brand.color}22`,
                  color: brand.color,
                }}
              >
                {brand.letter}
              </div>
              <span
                className="whitespace-nowrap text-sm font-semibold"
                style={{ fontFamily: "'Inter', sans-serif", color: '#D9E2EC' }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { TrustedBy };
