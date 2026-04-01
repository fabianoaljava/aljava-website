const integrations = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Asana',
  'Slack',
  'Notion',
  'Jira',
  'GitHub',
];

const Integrations = () => (
  <section style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      <div
        className="flex flex-col items-start justify-between gap-10 rounded-2xl p-10 md:flex-row md:items-center md:p-14"
        style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
      >
        {/* Left text */}
        <div className="max-w-[480px]">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: '#2A9D8F' }}
          >
            Integrations
          </p>
          <h2
            className="mb-4 font-bold"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#FFFFFF',
            }}
          >
            Seamless Tool Integration
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
            AI Studio offers seamless integration with a variety of popular
            design and project management tools, ensuring a smooth and efficient
            workflow.
          </p>
        </div>

        {/* Logo grid */}
        <div className="flex max-w-[420px] flex-wrap gap-4">
          {integrations.map((tool) => (
            <div
              key={tool}
              className="rounded-xl px-4 py-2.5 text-sm font-medium"
              style={{
                backgroundColor: '#162D40',
                border: '1px solid #1E3A4C',
                color: '#D9E2EC',
              }}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { Integrations };
