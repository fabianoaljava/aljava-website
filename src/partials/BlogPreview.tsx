const posts = [
  {
    date: 'Apr 8, 2022',
    readTime: '6 min read',
    title: 'Starting and Growing a Career in Web Design',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80',
  },
  {
    date: 'Mar 15, 2022',
    readTime: '5 min read',
    title: 'Create a Landing Page That Performs Great',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
  },
  {
    date: 'Feb 28, 2022',
    readTime: '7 min read',
    title: 'How Can Designers Prepare for the Future?',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
  },
];

const BlogPreview = () => (
  <section style={{ backgroundColor: '#091722' }}>
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
      {/* Header row */}
      <div
        className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        data-reveal
      >
        <div className="max-w-[580px]">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
          >
            Blog
          </p>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Stay Inspired with Our Latest Insights
          </h2>
        </div>
        <a
          href="#"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold no-underline"
          style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
        >
          Read More
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8h10m-4-4l4 4-4 4"
            />
          </svg>
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {posts.map((post, idx) => (
          <a
            key={post.title}
            href="#"
            className="card-hover flex flex-col overflow-hidden rounded-2xl no-underline"
            style={{ backgroundColor: '#0F2433', border: '1px solid #1E3A4C' }}
            data-reveal
            data-reveal-delay={String(idx * 100 + 100) as any}
          >
            <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
                style={{ transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.transform =
                    'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
            </div>
            <div className="flex grow flex-col gap-3 p-6">
              <div
                className="flex items-center gap-3 text-xs"
                style={{ fontFamily: "'Inter', sans-serif", color: '#94A3B8' }}
              >
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3
                className="text-lg font-semibold leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif", color: '#FFFFFF' }}
              >
                {post.title}
              </h3>
              <span
                className="mt-auto text-sm font-semibold"
                style={{ fontFamily: "'Inter', sans-serif", color: '#2A9D8F' }}
              >
                Read Article →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export { BlogPreview };
