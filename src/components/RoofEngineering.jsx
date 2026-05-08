import React from 'react';

// Reusing Checkmark from SmartMonitoring for consistency
const Checkmark = () => (
    <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);



const RoofEngineering = () => {
    return (
        <section className="roof-section" style={{
            marginTop: '100px',
            marginBottom: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            padding: '0 40px'
        }}>
            {/* Right side for zigzag layout: Content (placed first in DOM for zig zag) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderRadius: '20px',
                    color: '#00D4FF',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    alignSelf: 'flex-start'
                }}>
                    THE INSTALLATION
                </div>

                <h2 className="michroma-title" style={{ fontSize: '42px', margin: 0, textTransform: 'uppercase', lineHeight: 1.2 }}>
                    PRECISION ROOF<br />ENGINEERING
                </h2>

                <p style={{ color: 'var(--element-light)', fontSize: '20px', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    We don't just install; we optimize.
                </p>
                <p style={{ color: 'var(--element-dim)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                    Every Texas home has a unique sun-path profile that requires expert analysis. We engineer your system to maximize output based on your specific roof architecture.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <Checkmark />
                        <div>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Roof Mapping</span>
                            <span style={{ fontSize: '14px', color: 'var(--element-dim)' }}>We use satellite data to find the highest-efficiency angles for your specific roof.</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <Checkmark />
                        <div>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Storm-Proof Mounting</span>
                            <span style={{ fontSize: '14px', color: 'var(--element-dim)' }}>Specialized racking systems designed to withstand 130+ MPH Texas winds.</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <Checkmark />
                        <div>
                            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Max-Yield Placement</span>
                            <span style={{ fontSize: '14px', color: 'var(--element-dim)' }}>Strategic panel positioning to ensure your system produces power from sunrise to sunset.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left side: High Quality PNG Image instead of SVG */}
            <div className="roof-engineering-image-wrapper" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                    src="/house-solarpanel.webp" 
                    alt="Precision Roof Engineering Solar Panel House" 
                    className="responsive-house-img animate-float"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(0, 212, 255, 0.1))',
                    }}
                />
            </div>
        </section>
    );
};

export default RoofEngineering;
