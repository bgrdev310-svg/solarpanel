import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description }) => (
    <div className="premium-glass-card hover-lift" style={{
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        border: '1px solid rgba(0, 212, 255, 0.1)',
        background: 'linear-gradient(135deg, rgba(20, 25, 30, 0.7) 0%, rgba(10, 12, 15, 0.5) 100%)',
        boxShadow: '0 10px 30px -10px rgba(0, 212, 255, 0.05), inset 0 0 20px rgba(0, 212, 255, 0.02)'
    }}>
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'rgba(0, 212, 255, 0.05)',
            border: '1px solid rgba(0, 212, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 212, 255, 0.2)'
        }}>
            {icon}
        </div>
        <h3 className="michroma-title" style={{ fontSize: '18px', color: '#fff', margin: 0, marginTop: '8px' }}>{title}</h3>
        <p style={{ color: 'var(--element-dim)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
            {description}
        </p>
    </div>
);

const ProcessStep = ({ stepNumber, title, description, isLast }) => (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00D4FF',
                fontFamily: 'Michroma',
                fontSize: '18px',
                zIndex: 2,
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)'
            }}>
                {stepNumber}
            </div>
            {!isLast && (
                <div className="process-line-desktop" style={{
                    flex: 1,
                    height: '2px',
                    background: 'linear-gradient(90deg, #00D4FF 0%, rgba(0, 212, 255, 0) 100%)',
                    zIndex: 1,
                    marginLeft: '0px',
                    marginRight: '-24px'
                }} />
            )}
        </div>
        <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>{title}</h4>
        <p style={{ color: 'var(--element-dim)', fontSize: '14px', lineHeight: 1.6, maxWidth: '90%' }}>
            {description}
        </p>
    </div>
);

const AdvantageBadge = ({ icon, text }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        transition: 'all 0.3s ease'
    }} className="hover-lift">
        <div style={{ color: '#00E676' }}>
            {icon}
        </div>
        <span style={{ color: '#fff', fontSize: '15px', fontWeight: 500 }}>{text}</span>
    </div>
);

const ImpactStat = ({ value, label }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, textAlign: 'center' }}>
        <div className="michroma-title" style={{
            fontSize: '48px',
            color: '#00E676',
            textShadow: '0 0 20px rgba(0, 230, 118, 0.4)'
        }}>
            {value}
        </div>
        <div style={{ color: 'var(--element-light)', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
            {label}
        </div>
    </div>
);


const ServicesPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px 20px 80px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '100px'
        }}>

            {/* 1. HERO SECTION */}
            <section style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="services-hero-section">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        padding: '8px 20px',
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        borderRadius: '20px',
                        color: '#00D4FF',
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '1px'
                    }}>
                        PREMIUM SOLAR EXPERTS
                    </div>
                    <h1 className="michroma-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, margin: 0 }}>
                        OUR SOLAR ENERGY SERVICES
                    </h1>
                    <p style={{ color: 'var(--element-light)', fontSize: '18px', lineHeight: 1.6, maxWidth: '500px', margin: 0 }}>
                        We provide complete solar solutions — from consultation and system design to exact installation and smart energy monitoring.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <button className="cta-button" style={{ fontSize: '15px', padding: '16px 32px' }}>
                                Get Free Quote
                            </button>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <button className="cta-button" style={{
                                background: 'transparent',
                                border: '1px solid rgba(0, 212, 255, 0.5)',
                                color: '#00D4FF',
                                boxShadow: 'none',
                                fontSize: '15px',
                                padding: '16px 32px'
                            }}>
                                Schedule Consultation
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Abstract Solar Illustration */}
                <div className="services-hero-media" style={{ flex: 1, minHeight: '400px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(0,212,255,0.15) 0%, transparent 60%)', zIndex: 0 }} />
                    <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="rgba(0, 212, 255, 0.8)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.4))' }}>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        {/* Sun lines */}
                        <line x1="1" y1="4" x2="4" y2="7"></line>
                        <line x1="23" y1="4" x2="20" y2="7"></line>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                    </svg>
                </div>
            </section>

            {/* 2. CORE SERVICES SECTION */}
            <section>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 className="michroma-title" style={{ fontSize: '32px', marginBottom: '16px' }}>CORE SERVICES</h2>
                    <p style={{ color: 'var(--element-dim)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                        End-to-end solar infrastructure tailored for high efficiency, seamless integration, and maximum durability.
                    </p>
                </div>
                <div className="services-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px'
                }}>
                    <ServiceCard
                        icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>}
                        title="Solar Panel Installation"
                        description="Professional installation of high-efficiency solar panels for residential and commercial properties using strictly Tier 1 equipment."
                    />
                    <ServiceCard
                        icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>}
                        title="Solar System Design"
                        description="Custom solar system design intricately optimized for energy production, specific roof structure, and geographical location."
                    />
                    <ServiceCard
                        icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>}
                        title="Energy Monitoring"
                        description="Real-time granular monitoring of solar energy production and home consumption through modern smart dashboards and mobile apps."
                    />
                    <ServiceCard
                        icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="12" height="16" rx="2" ry="2"></rect><line x1="10" y1="4" x2="14" y2="4"></line><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>}
                        title="Battery Storage Solutions"
                        description="Install advanced solar batteries to store excess daytime energy for night usage, offsetting grid peak hours and preventing outages."
                    />
                    <ServiceCard
                        icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>}
                        title="Maintenance & Cleaning"
                        description="Routine system inspection, automated diagnostics, cleaning services, and physical performance optimization to ensure max yield."
                    />
                    <ServiceCard
                        icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                        title="Solar Consultation"
                        description="Free personalized consultation to mathematically calculate potential savings, roof capacity, and absolute solar system requirements."
                    />
                </div>
            </section>

            {/* 3. HOW OUR PROCESS WORKS */}
            <section>
                <h2 className="michroma-title" style={{ fontSize: '32px', marginBottom: '40px' }}>HOW OUR PROCESS WORKS</h2>
                <div className="process-steps-container" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '24px'
                }}>
                    <ProcessStep stepNumber="01" title="Consultation" description="We evaluate your energy needs, savings potential, and roof viability at no cost." />
                    <ProcessStep stepNumber="02" title="System Design" description="Engineers custom design a high-efficiency layout specifically for your property." />
                    <ProcessStep stepNumber="03" title="Installation" description="Master journeymen install the premium hardware with meticulous precision." />
                    <ProcessStep stepNumber="04" title="Monitoring & Support" isLast={true} description="We hand over the keys to grid independence through lifetime app monitoring." />
                </div>
            </section>

            {/* 4. WHY CHOOSE US */}
            <section>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 className="michroma-title" style={{ fontSize: '32px', marginBottom: '16px' }}>WHY CHOOSE OUR SOLAR SERVICES</h2>
                </div>
                <div className="advantages-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px'
                }}>
                    <AdvantageBadge icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>} text="Certified Solar Engineers" />
                    <AdvantageBadge icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>} text="High Efficiency Panels" />
                    <AdvantageBadge icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>} text="Smart Energy Monitoring" />
                    <AdvantageBadge icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} text="Long-Term Warranty" />
                    <AdvantageBadge icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>} text="Fast Installation" />
                    <AdvantageBadge icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>} text="Eco-Friendly Clean Energy" />
                </div>
            </section>

            {/* 5. REAL IMPACT SECTION */}
            <section style={{
                background: 'rgba(0, 230, 118, 0.05)',
                border: '1px solid rgba(0, 230, 118, 0.1)',
                borderRadius: '32px',
                padding: '60px 40px',
                textAlign: 'center'
            }}>
                <h2 className="michroma-title" style={{ fontSize: '32px', marginBottom: '48px', color: '#fff' }}>THE REAL IMPACT</h2>
                <div className="impact-grid" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px'
                }}>
                    <ImpactStat value="-85%" label="Electricity Bills" />
                    <ImpactStat value="Zero" label="Carbon Footprint" />
                    <ImpactStat value="+6.8%" label="Property Value" />
                    <ImpactStat value="100%" label="Energy Independence" />
                </div>
            </section>

            {/* 6. CTA SECTION */}
            <section className="premium-glass-card" style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(10, 12, 15, 0.8) 100%)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                padding: '80px 40px',
                textAlign: 'center',
                borderRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: '#00D4FF', filter: 'blur(100px)', opacity: 0.2 }} />
                <h2 className="michroma-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: 0, position: 'relative', zIndex: 2 }}>
                    READY TO SWITCH TO SOLAR?
                </h2>
                <p style={{ color: 'var(--element-light)', fontSize: '18px', maxWidth: '500px', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
                    Start generating clean, grid-independent energy today.
                </p>
                <div style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <button className="cta-button" style={{ fontSize: '16px', padding: '16px 40px' }}>
                            Get Free Quote
                        </button>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <button className="cta-button" style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#fff',
                            boxShadow: 'none',
                            fontSize: '16px',
                            padding: '16px 40px'
                        }}>
                            Contact Our Experts
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;
