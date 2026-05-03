import React from 'react';

/* ---------- Shared Icon Wrapper ---------- */
const IconFrame = ({ children, glowColor = 'rgba(0, 212, 255, 0.25)' }) => (
  <div className="icon-frame" style={{ '--glow-color': glowColor }}>
    <div className="icon-frame__bloom" />
    <div className="icon-frame__inner">{children}</div>
  </div>
);

/* ---------- Icons ---------- */
const MapPinIcon = () => (
  <IconFrame glowColor="rgba(255, 180, 80, 0.3)">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="#FFB450" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  </IconFrame>
);

const ContactIcon = () => (
  <IconFrame glowColor="rgba(37, 211, 102, 0.3)">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  </IconFrame>
);

const ShieldIcon = () => (
  <IconFrame glowColor="rgba(0, 212, 255, 0.35)">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  </IconFrame>
);

/* ---------- Feature Card ---------- */
const FeatureCard = ({ icon, label, title, subtitle, accent }) => (
  <article
    className="feature-card"
    tabIndex={0}
    role="button"
    aria-label={`${title} — ${subtitle}`}
    style={{ '--accent': accent }}
  >
    <div className="feature-card__sheen" />
    <span className="feature-card__pulse" aria-hidden="true" />

    <div className="feature-card__icon">{icon}</div>

    <div className="feature-card__content">
      <span className="feature-card__label">{label}</span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__subtitle">{subtitle}</p>
    </div>

    <svg className="feature-card__arrow" width="18" height="18"
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  </article>
);

/* ---------- Styles ---------- */
const styles = `
.feature-cards-section {
  width: 100%;
  margin-top: 12px;
}

.feature-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-lg, 20px);
}

@media (max-width: 900px) {
  .feature-cards-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .feature-cards-grid { grid-template-columns: 1fr; }
}

.feature-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 120px;
  padding: 22px;
  border-radius: 18px;
  background: linear-gradient(145deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.3s ease,
              box-shadow 0.4s ease;
}

.feature-card:hover,
.feature-card:focus-visible {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.35),
    0 0 0 1px color-mix(in srgb, var(--accent) 20%, transparent);
  outline: none;
}

.feature-card__sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg,
    transparent 30%,
    color-mix(in srgb, var(--accent) 12%, transparent) 50%,
    transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.8s ease;
  pointer-events: none;
}
.feature-card:hover .feature-card__sheen { transform: translateX(100%); }

.feature-card__pulse {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
  animation: fc-pulse 2.4s ease-in-out infinite;
}
@keyframes fc-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.3); }
}

.feature-card__content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.feature-card__label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.85;
}

.feature-card__title {
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  margin: 2px 0 0;
  letter-spacing: 0.2px;
}

.feature-card__subtitle {
  font-size: 13.5px;
  color: var(--element-dim, rgba(255, 255, 255, 0.6));
  margin: 0;
  line-height: 1.5;
}

.feature-card__arrow {
  color: rgba(255, 255, 255, 0.25);
  flex-shrink: 0;
  transition: color 0.3s ease, transform 0.3s ease;
}
.feature-card:hover .feature-card__arrow {
  color: var(--accent);
  transform: translateX(4px);
}

.icon-frame {
  position: relative;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.feature-card:hover .icon-frame { transform: scale(1.08); }

.icon-frame__bloom {
  position: absolute;
  inset: 8px;
  background: var(--glow-color);
  filter: blur(16px);
  border-radius: 50%;
  transition: filter 0.4s ease;
}
.feature-card:hover .icon-frame__bloom { filter: blur(22px); }

.icon-frame__inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  backdrop-filter: blur(8px);
}

@media (prefers-reduced-motion: reduce) {
  .feature-card,
  .feature-card__sheen,
  .feature-card__arrow,
  .icon-frame,
  .icon-frame__bloom,
  .feature-card__pulse {
    transition: none !important;
    animation: none !important;
  }
}
`;

/* ---------- Main Component ---------- */
const FeatureCards = () => {
  return (
    <section className="feature-cards-section" aria-label="Key features">
      <style>{styles}</style>

      <div className="feature-cards-grid">
        <FeatureCard
          icon={<MapPinIcon />}
          label="Service Area"
          title="Texas Proud"
          subtitle="Dallas · Austin · Houston"
          accent="#FFB450"
        />
        <FeatureCard
          icon={<ContactIcon />}
          label="Support"
          title="Always Reachable"
          subtitle="24/7 availability"
          accent="#25D366"
        />
        <FeatureCard
          icon={<ShieldIcon />}
          label="Warranty"
          title="25-Year Guarantee"
          subtitle="Full coverage, no fine print"
          accent="#00D4FF"
        />
      </div>
    </section>
  );
};

export default FeatureCards;
