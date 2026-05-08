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
        <div className="services-page" style={{
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
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* solar panel */}
                                <path d="M3 14l18-4" />
                                <path d="M4 20l3-10 14-3-3 12H4z" />
                                <path d="M8.2 10.2l2.2 9.2" />
                                <path d="M12.5 9.4l2.1 9" />
                                <path d="M6 15.5h12.8" />
                                {/* sun */}
                                <path d="M18.2 3.6l1.2-1.2" />
                                <path d="M20.6 6h1.7" />
                                <path d="M18.7 6a2.2 2.2 0 1 0-4.4 0a2.2 2.2 0 0 0 4.4 0z" />
                            </svg>
                        }
                        title="Solar Panel Installation"
                        description="Professional installation of high-efficiency solar panels for residential and commercial properties using strictly Tier 1 equipment."
                    />
                    <ServiceCard
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* commercial building */}
                                <path d="M4 21V6a2 2 0 0 1 2-2h6v17" />
                                <path d="M12 8h6a2 2 0 0 1 2 2v11" />
                                <path d="M3 21h18" />
                                {/* windows */}
                                <path d="M7 7h2" />
                                <path d="M7 10h2" />
                                <path d="M7 13h2" />
                                <path d="M15 12h2" />
                                <path d="M15 15h2" />
                                {/* rooftop panel hint */}
                                <path d="M12.5 6.2l7-1.5" />
                            </svg>
                        }
                        title="Commercial Solar Panel Services"
                        description="Scalable solar energy solutions designed for businesses, warehouses, and commercial facilities to reduce operational costs and maximize ROI."
                    />
                    <ServiceCard
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* roof/house */}
                                <path d="M4 10.5l8-6 8 6" />
                                <path d="M6 10.5V20h7" />
                                {/* magnifier */}
                                <path d="M14.5 15.5a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0z" />
                                <path d="M17.2 18.2L15 16" />
                            </svg>
                        }
                        title="Roof Inspection"
                        description="Comprehensive roof assessment and structural analysis to evaluate solar readiness, identify potential issues, and ensure optimal panel placement."
                    />
                    <ServiceCard
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* charger */}
                                <path d="M6 3h7a2 2 0 0 1 2 2v6" />
                                <path d="M6 21V5a2 2 0 0 1 2-2" />
                                <path d="M6 21h9a2 2 0 0 0 2-2v-6" />
                                <path d="M10 7h3" />
                                {/* plug + bolt */}
                                <path d="M18 11h2v4a2 2 0 0 1-2 2h-1" />
                                <path d="M12 11l-2 4h3l-2 4" />
                            </svg>
                        }
                        title="EV Charging Station Installation"
                        description="Professional installation of electric vehicle charging stations for homes and businesses, powered by clean solar energy for sustainable transportation."
                    />
                    <ServiceCard
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* wrench */}
                                <path d="M21 7a6 6 0 0 1-8.6 5.4L6 18.8a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8l6.4-6.4A6 6 0 0 1 17 3l-2 2 3 3 2-1z" />
                                {/* sparkle */}
                                <path d="M9 4l.6 1.8L11 6.4l-1.4.6L9 8.8l-.6-1.8L7 6.4l1.4-.6L9 4z" />
                            </svg>
                        }
                        title="Maintenance & Cleaning"
                        description="Routine system inspection, automated diagnostics, cleaning services, and physical performance optimization to ensure max yield."
                    />
                    <ServiceCard
                        icon={
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                {/* roof/house */}
                                <path d="M3.5 11l8.5-6.5 8.5 6.5" />
                                <path d="M6.5 10.8V20h11V10.8" />
                                {/* hammer */}
                                <path d="M14.2 13.2l4.8-4.8" />
                                <path d="M17.3 6.3l1.7 1.7" />
                                <path d="M13.2 14.2l-2.4 2.4a2 2 0 0 0 0 2.8l.4.4" />
                            </svg>
                        }
                        title="Roof Installation and Repair"
                        description="Expert roof installation, replacement, and repair services to ensure your property is structurally sound and ready for solar panel integration."
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
