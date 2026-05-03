import React from 'react';
import { Pill, Circle, TextLine } from './Placeholders';

const HeroBento = () => {
    return (
        <div className="hero-bento">

            {/* REAL TEXT: POSITIONED HOVERING ON THE LEFT FOR DESKTOP, STACKED FOR MOBILE */}

            {/* POWER YOUR HOME */}
            <div className="hero-title-top">
                <h1 className="michroma-title" style={{ margin: 0 }}>POWER YOUR<br className="mobile-break" /> HOME</h1>
            </div>

            {/* WITH THE SUN */}
            <div className="hero-title-bottom">
                <h1 className="michroma-title" style={{ margin: 0 }}>WITH THE SUN</h1>
            </div>

            {/* CONTENT AREA BELOW TITLES */}
            <div className="hero-content-area">
                <p className="subheadline">
                    Professional solar installation and sustainable energy solutions tailored for Texas homes.
                </p>
                {/* Desktop Button - Hidden on Mobile via CSS order/display trick or we just keep one button and move it */}
                <button className="cta-button desktop-cta" onClick={() => window.dispatchEvent(new Event('openContactModal'))}>
                    start with us
                </button>
            </div>

            {/* MOBILE ONLY: Dedicated Image Element */}
            <div className="hero-mobile-image-container">
                <img src="/heroimg2.png" alt="Solar House" className="hero-mobile-image" fetchPriority="high" loading="eager" />
            </div>

            {/* ===== STATUS PILL (bottom-right cutout) ===== */}
            <div className="hero-status-pill flex-row items-center hover-lift">
                <div className="flex-row" style={{ gap: '-12px' }}>
                    {/* Custom Icon Bubbles */}
                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--panel-dark)', border: '2px solid var(--panel-dark)', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src="/solar-panel.png" alt="Solar Panel" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--panel-dark)', border: '2px solid var(--panel-dark)', zIndex: 2, marginLeft: '-12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src="/sun.png" alt="Sun" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--panel-dark)', border: '2px solid var(--panel-dark)', zIndex: 1, marginLeft: '-12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src="/flash.png" alt="Flash" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>
                </div>
                <div className="flex-col" style={{ gap: '2px', marginLeft: '12px', textAlign: 'left', whiteSpace: 'nowrap' }}>
                    <span style={{ fontWeight: 700, fontSize: '18px', color: '#fff', lineHeight: 1 }}>100k+</span>
                    <span style={{ fontSize: '13px', color: 'var(--element-dim)', lineHeight: 1 }}>Texas Clients</span>
                </div>
            </div>

            {/* Mobile Button - Shown at bottom on mobile */}
            <button className="cta-button mobile-cta" onClick={() => window.dispatchEvent(new Event('openContactModal'))}>
                start with us
            </button>

        </div>
    );
};

export default HeroBento;
