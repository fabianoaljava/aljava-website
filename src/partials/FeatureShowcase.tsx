const showcaseItems = [
  {
    tag: 'Feature Spotlight',
    headline: 'Transforming Imagination into Reality',
    body: [
      'Unlock the full potential of your creativity with our AI-powered design assistant. Explore new dimensions of design, from futuristic visuals to timeless craftsmanship, and witness how AI can turn your wildest ideas into stunning realities.',
      'Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals.',
    ],
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'AI generative design showcase',
    imageLeft: false,
  },
  {
    tag: 'Explore Further',
    headline: 'Witness the Future',
    body: [
      'Step beyond the ordinary with designs that defy conventions. Our AI conjures up imaginative visuals that push the boundaries of creativity.',
    ],
    bullets: [
      {
        title: 'Visualize the Impossible',
        text: 'Experience the perfect blend of form and function. Our AI ensures every design looks stunning and serves its purpose flawlessly.',
      },
      {
        title: 'Synergy and Style',
        text: 'Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to your creative projects.',
      },
      {
        title: 'Timeless Precision',
        text: 'Achieve the highest standards of design perfection with AI that understands your brand and amplifies it beautifully.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Futuristic tech visual',
    imageLeft: true,
  },
];

const FeatureShowcase = () => (
  <section style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto flex max-w-[1200px] flex-col gap-28 px-5 py-24 md:gap-40 md:px-8 md:py-32">
      {showcaseItems.map((item) => (
        <div
          key={item.headline}
          className={`flex flex-col ${
            item.imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center gap-12 md:gap-20`}
          data-reveal
        >
          {/* Text side */}
          <div className="flex max-w-[500px] flex-1 flex-col gap-6">
            <p
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
            >
              {item.tag}
            </p>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: '#FFFFFF',
                fontWeight: 600,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {item.headline}
            </h2>
            {item.body.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
              >
                {para}
              </p>
            ))}
            {item.bullets && (
              <div className="mt-2 flex flex-col gap-5">
                {item.bullets.map((bullet) => (
                  <div key={bullet.title} className="flex gap-4">
                    <div
                      className="w-0.5 shrink-0 rounded-full"
                      style={{
                        backgroundColor: '#2A9D8F',
                        alignSelf: 'stretch',
                      }}
                    />
                    <div>
                      <p
                        className="mb-1 font-semibold"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          color: '#FFFFFF',
                        }}
                      >
                        {bullet.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: '#94A3B8',
                        }}
                      >
                        {bullet.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image side */}
          <div className="w-full max-w-[480px] flex-1">
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                border: '1px solid #1E3A4C',
                transition: 'transform 0.4s ease',
                transform: 'translateY(0)',
              }}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="block h-auto w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export { FeatureShowcase };
