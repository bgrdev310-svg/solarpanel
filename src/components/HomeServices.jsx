import React from 'react';
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

const HomeServices = () => {
    return (
        <section style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '72px 20px 40px'
        }}>
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
                {/* Card 1 - Solar Panel Installation (unchanged) */}
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
                {/* Card 2 - Commercial Solar Panel Services */}
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
                {/* Card 3 - Roof Inspection */}
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
                {/* Card 4 - EV Charging Station Installation */}
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
                {/* Card 5 - Maintenance & Cleaning (unchanged) */}
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
                {/* Card 6 - Roof Installation and Repair */}
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
            {/* View All Services Link */}
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                    <button className="cta-button" style={{
                        background: 'transparent',
                        border: '1px solid rgba(0, 212, 255, 0.5)',
                        color: '#00D4FF',
                        boxShadow: 'none',
                        fontSize: '15px',
                        padding: '16px 40px'
                    }}>
                        View All Services →
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default HomeServices;
