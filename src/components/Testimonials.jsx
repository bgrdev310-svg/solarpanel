import React from 'react';

const Star = ({ filled = true }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const Rating = ({ value = 5 }) => (
  <div className="tst-rating" aria-label={`${value} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`tst-star ${i < value ? 'is-filled' : ''}`}
        aria-hidden="true"
      >
        <Star filled={i < value} />
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ name, rating, content }) => {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

  return (
    <article className="tst-card premium-glass-card hover-lift">
      <header className="tst-header">
        <div className="tst-avatar" aria-hidden="true">
          <span className="tst-avatar__ring" />
          <span className="tst-avatar__text">{initials}</span>
        </div>

        <div className="tst-meta">
          <div className="tst-name">{name}</div>
          <div className="tst-sub">
            <Rating value={rating} />
            <span className="tst-badge">Verified local client</span>
          </div>
        </div>
      </header>

      <p className="tst-quote">“{content}”</p>
    </article>
  );
};

const styles = `
.tst-section {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 72px 40px 40px;
}

.tst-section::before {
  content: "";
  position: absolute;
  inset: -20px -10px;
  background:
    radial-gradient(520px 260px at 18% 6%, rgba(0, 212, 255, 0.10), transparent 64%),
    radial-gradient(520px 260px at 88% 18%, rgba(0, 212, 255, 0.07), transparent 62%),
    radial-gradient(520px 260px at 50% 92%, rgba(255, 255, 255, 0.04), transparent 66%);
  filter: blur(22px);
  opacity: 0.65;
  mask-image: radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 100%);
  pointer-events: none;
  z-index: 0;
}

.tst-headerBlock {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 44px;
}

.tst-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(0, 212, 255, 0.10);
  border: 1px solid rgba(0, 212, 255, 0.20);
  color: #00D4FF;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.tst-kickerDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00D4FF;
  box-shadow: 0 0 14px rgba(0, 212, 255, 0.55);
  opacity: 0.95;
}

.tst-title {
  margin: 0;
  font-size: 42px;
  line-height: 1.1;
}

.tst-subtitle {
  margin: 14px auto 0;
  max-width: 640px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 16px;
  line-height: 1.7;
}

.tst-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;
}

.tst-card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  padding: 28px 28px 26px;
  border: 1px solid rgba(0, 212, 255, 0.10);
  background: linear-gradient(135deg, rgba(20, 25, 30, 0.58) 0%, rgba(10, 12, 15, 0.42) 100%);
  box-shadow:
    0 16px 46px -18px rgba(0, 212, 255, 0.16),
    inset 0 0 26px rgba(0, 212, 255, 0.03);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tst-card:hover {
  border-color: rgba(0, 212, 255, 0.22);
  box-shadow:
    0 22px 60px -22px rgba(0, 212, 255, 0.22),
    0 10px 30px rgba(0, 0, 0, 0.35),
    inset 0 0 30px rgba(0, 212, 255, 0.05);
  background: linear-gradient(135deg, rgba(22, 28, 34, 0.66) 0%, rgba(10, 12, 15, 0.44) 100%);
}

.tst-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.tst-avatar {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  position: relative;
  display: grid;
  place-items: center;
  background: rgba(0, 212, 255, 0.06);
  border: 1px solid rgba(0, 212, 255, 0.16);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.12);
  flex-shrink: 0;
}

.tst-avatar__ring {
  position: absolute;
  inset: -10px;
  border-radius: 20px;
  background: radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.20), transparent 55%);
  filter: blur(10px);
  opacity: 0.7;
  pointer-events: none;
}

.tst-avatar__text {
  font-family: 'Michroma', sans-serif;
  font-size: 14px;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.92);
}

.tst-meta {
  min-width: 0;
  flex: 1;
}

.tst-name {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.2px;
}

.tst-sub {
  margin-top: 6px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.tst-badge {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.72);
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  white-space: nowrap;
}

.tst-rating {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.30);
}

.tst-star.is-filled { color: #00D4FF; }

.tst-quote {
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 15px;
  line-height: 1.75;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex: 1;
}

@media (max-width: 900px) {
  .tst-section { padding: 56px 20px 28px; }
  .tst-grid { grid-template-columns: 1fr; gap: 14px; }
  .tst-title { font-size: 34px; }
  .tst-sub {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
`;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Scott Charter',
      rating: 5,
      content:
        'After my initial solar installer went out of business, I was needing service for an issue. 512 Solar agreed to take a look and helped identify the problem and initiate resolution. I also worked with Austin at 512 and he worked with Solaredge to fix issues with my monitoring that had been a problem for a while. I would recommend Austin and 512 Solar for solar maintenance and repair! Thanks folks!',
    },
    {
      name: 'Holly B',
      rating: 5,
      content:
        'Our original solar installer went out of business without any notification or communication. We had an inverter go out and had to scramble to find a new installer. 512 was very responsive and quickly got our account switched to them and a great install team out to replace the inverter.',
    },
    {
      name: 'Joseph Cimorelli',
      rating: 5,
      content:
        'My system was down. My original installer (Wells Solar) went out of business. I called and and was treated like a long time customer. They took my system information, transferred me to their care and had back on line within 36 hours. Extremely pleased.',
    },
    {
      name: 'David McPhail',
      rating: 5,
      content:
        'Even being on the edge of their service area 512 Solar was able to get out to my property, install my new inverter and have my Solar system back up and producing again quickly. I’m really glad I found them!',
    },
  ];

  return (
    <section className="tst-section" aria-label="Testimonials">
      <style>{styles}</style>

      <div className="tst-headerBlock">
        <div className="tst-kicker">
          <span className="tst-kickerDot" aria-hidden="true" />
          Real results. Real Texans.
        </div>

        <h2 className="michroma-title tst-title">TESTIMONIALS</h2>
        <p className="tst-subtitle">
          When other installers disappear, we step in. Here’s what customers say about
          our maintenance, repair, and rapid recovery support.
        </p>
      </div>

      <div className="tst-grid">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} name={t.name} rating={t.rating} content={t.content} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

