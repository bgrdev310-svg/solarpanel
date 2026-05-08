import React, { useState } from 'react';

// Reusing the premium card wrapper logic
const ContactCard = ({ children, title, details }) => (
    <div className="premium-card-wrapper hover-lift" style={{ cursor: 'pointer', transition: 'all 0.3s ease', flex: '1 1 300px', maxWidth: '350px' }}>
        <div className="premium-glass-card" style={{
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            minHeight: '200px',
            textAlign: 'center',
            height: '100%'
        }}>
            <div style={{ flexShrink: 0, marginBottom: '8px' }}>
                {children}
            </div>
            <div className="flex-col" style={{ gap: '8px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', margin: 0, letterSpacing: '0.5px' }}>{title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--element-light)', margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
                    {details}
                </p>
            </div>
            {/* Decorative corner indicator */}
            <div style={{
                position: 'absolute', top: '16px', right: '16px', width: '6px', height: '6px',
                borderRadius: '50%', backgroundColor: '#00D4FF', boxShadow: '0 0 10px #00D4FF', opacity: 0.6
            }} />
        </div>
    </div>
);

// High-End SVG Icons for the Contact page
const PhoneIcon = () => (
    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '40px', height: '40px', background: 'rgba(0, 212, 255, 0.15)', filter: 'blur(15px)', borderRadius: '50%', zIndex: 0 }} />
        <svg style={{ position: 'relative', zIndex: 1 }} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#phone-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
                <linearGradient id="phone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F2FF" />
                    <stop offset="100%" stopColor="#0088FF" />
                </linearGradient>
            </defs>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    </div>
);

const EmailIcon = () => (
    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '40px', height: '40px', background: 'rgba(0, 212, 255, 0.15)', filter: 'blur(15px)', borderRadius: '50%', zIndex: 0 }} />
        <svg style={{ position: 'relative', zIndex: 1 }} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#email-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
                <linearGradient id="email-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F2FF" />
                    <stop offset="100%" stopColor="#0088FF" />
                </linearGradient>
            </defs>
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
            <path d="Mm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
    </div>
);

const LocationIcon = () => (
    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '40px', height: '40px', background: 'rgba(0, 212, 255, 0.15)', filter: 'blur(15px)', borderRadius: '50%', zIndex: 0 }} />
        <svg style={{ position: 'relative', zIndex: 1 }} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#loc-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
                <linearGradient id="loc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F2FF" />
                    <stop offset="100%" stopColor="#0088FF" />
                </linearGradient>
            </defs>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    </div>
);

const WhatsAppIcon = () => (
    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '40px', height: '40px', background: 'rgba(37, 211, 102, 0.15)', filter: 'blur(15px)', borderRadius: '50%', zIndex: 0 }} />
        <svg style={{ position: 'relative', zIndex: 1 }} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#whatsapp-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
                <linearGradient id="whatsapp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25D366" />
                    <stop offset="100%" stopColor="#128C7E" />
                </linearGradient>
            </defs>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
    </div>
);

const InstagramIcon = () => (
    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: '40px', height: '40px', background: 'rgba(225, 48, 108, 0.15)', filter: 'blur(15px)', borderRadius: '50%', zIndex: 0 }} />
        <svg style={{ position: 'relative', zIndex: 1 }} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#insta-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
                <linearGradient id="insta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#833ab4" />
                    <stop offset="50%" stopColor="#fd1d1d" />
                    <stop offset="100%" stopColor="#fcb045" />
                </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    </div>
);

const ContactPage = () => {
    // Form state handling for glowing inputs
    const [focusedInput, setFocusedInput] = useState(null);
    const [isLocating, setIsLocating] = useState(false);
    const [locationStatus, setLocationStatus] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        zip: '',
        propertyType: '',
        preferredContact: '',
        timeline: '',
        monthlyBill: '',
        message: '',
        mapLink: '',
        services: [],
    });

    const serviceOptions = [
        'Solar Panel Installation',
        'Commercial Solar Panel Services',
        'Roof Inspection',
        'EV Charging Station Installation',
        'Maintenance & Cleaning',
        'Roof Installation and Repair',
    ];

    const updateField = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const toggleService = (service) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((item) => item !== service)
                : [...prev.services, service],
        }));
    };

    const detectLocation = () => {
        if (!navigator.geolocation) {
            setLocationStatus('Geolocation is not supported on this device/browser.');
            return;
        }

        setIsLocating(true);
        setLocationStatus('Detecting your location...');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const generatedLink = `https://maps.google.com/?q=${latitude},${longitude}`;
                setFormData((prev) => ({ ...prev, mapLink: generatedLink }));
                setLocationStatus('Location added successfully.');
                setIsLocating(false);
            },
            (error) => {
                const geoErrors = {
                    1: 'Location access was denied. You can still paste a Google Maps link manually.',
                    2: 'Location unavailable right now. Please try again in a few seconds.',
                    3: 'Location request timed out. Please try again.',
                };
                setLocationStatus(geoErrors[error.code] || 'Could not detect location right now.');
                setIsLocating(false);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLocationStatus('Request captured. Connect this form to your backend/email API to send it live.');
    };

    const inputStyle = (id) => ({
        width: '100%',
        padding: '16px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: focusedInput === id ? '1px solid #00F2FF' : '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '16px',
        fontFamily: "'Inter', sans-serif",
        outline: 'none',
        transition: 'all 0.3s ease',
        boxShadow: focusedInput === id ? '0 0 15px rgba(0, 242, 255, 0.15), inset 0 0 10px rgba(0, 242, 255, 0.05)' : 'none',
    });

    return (
        <section className="contact-page-root" style={{
            padding: '20px 40px 80px 40px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'transparent'
        }}>
            {/* Hero Header */}
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', marginBottom: '60px' }}>
                <div style={{
                    display: 'inline-block', padding: '8px 24px', background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)', borderRadius: '20px',
                    color: '#00D4FF', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', marginBottom: '20px'
                }}>
                    GET IN TOUCH
                </div>
                <h1 className="michroma-title" style={{ fontSize: '48px', margin: 0, textTransform: 'uppercase', lineHeight: 1.2, textShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}>
                    CONTACT EXPERT
                </h1>
                <p style={{ color: 'var(--element-dim)', fontSize: '18px', marginTop: '20px', maxWidth: '600px', margin: '20px auto 0 auto', lineHeight: 1.6 }}>
                    Ready to revolutionize your home's energy? Reach out today for a free, no-obligation engineering assessment.
                </p>
            </div>

            <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '60px' }}>

                {/* Info Cards Grid - Converted to Flex to allow perfectly centered wrapping items */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '24px',
                    width: '100%'
                }}>
                    <ContactCard title="Phone" details={<>+1 (800) 555-0199<br />Mon-Fri 8am-8pm CST</>}>
                        <PhoneIcon />
                    </ContactCard>
                    <ContactCard title="Email" details={<>hello@solarpanel.tx<br />Support: help@solarpanel.tx</>}>
                        <EmailIcon />
                    </ContactCard>
                    <ContactCard title="Headquarters" details={<>100 Energy Way, Suite 400<br />Austin, Texas 78701</>}>
                        <LocationIcon />
                    </ContactCard>
                    <ContactCard title="WhatsApp" details={<>+1 (800) 555-0199<br />24/7 Priority Support</>}>
                        <WhatsAppIcon />
                    </ContactCard>
                    <ContactCard title="Instagram" details={<>@solarpanel.tx<br />See our latest installs</>}>
                        <InstagramIcon />
                    </ContactCard>
                </div>

                {/* Form Section */}
                <div className="premium-glass-card request-card" style={{
                    padding: '48px',
                    borderRadius: '24px',
                    background: 'linear-gradient(145deg, rgba(20, 25, 30, 0.6) 0%, rgba(10, 15, 20, 0.8) 100%)',
                    border: '1px solid rgba(0, 212, 255, 0.15)',
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,212,255,0.03)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    width: '100%'
                }}>
                    <h2 className="michroma-title" style={{ fontSize: '28px', marginBottom: '32px', textAlign: 'center', color: '#fff' }}>
                        REQUEST A CONSULTATION
                    </h2>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div className="request-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>FULL NAME</label>
                                <input type="text" placeholder="John Doe"
                                    value={formData.fullName}
                                    style={inputStyle('name')}
                                    onChange={(e) => updateField('fullName', e.target.value)}
                                    onFocus={() => setFocusedInput('name')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>EMAIL ADDRESS</label>
                                <input type="email" placeholder="john@example.com"
                                    value={formData.email}
                                    style={inputStyle('email')}
                                    onChange={(e) => updateField('email', e.target.value)}
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                        </div>

                        <div className="request-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>PHONE NUMBER</label>
                                <input type="tel" placeholder="(555) 000-0000"
                                    value={formData.phone}
                                    style={inputStyle('phone')}
                                    onChange={(e) => updateField('phone', e.target.value)}
                                    onFocus={() => setFocusedInput('phone')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>ZIP CODE</label>
                                <input type="text" placeholder="78701"
                                    value={formData.zip}
                                    style={inputStyle('zip')}
                                    onChange={(e) => updateField('zip', e.target.value)}
                                    onFocus={() => setFocusedInput('zip')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                        </div>

                        <div className="request-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>PROPERTY TYPE</label>
                                <select
                                    value={formData.propertyType}
                                    style={inputStyle('propertyType')}
                                    onChange={(e) => updateField('propertyType', e.target.value)}
                                    onFocus={() => setFocusedInput('propertyType')}
                                    onBlur={() => setFocusedInput(null)}
                                >
                                    <option value="">Select type</option>
                                    <option value="home">Home</option>
                                    <option value="villa">Villa</option>
                                    <option value="apartment">Apartment Building</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>PREFERRED CONTACT</label>
                                <select
                                    value={formData.preferredContact}
                                    style={inputStyle('preferredContact')}
                                    onChange={(e) => updateField('preferredContact', e.target.value)}
                                    onFocus={() => setFocusedInput('preferredContact')}
                                    onBlur={() => setFocusedInput(null)}
                                >
                                    <option value="">Select method</option>
                                    <option value="phone">Phone Call</option>
                                    <option value="whatsapp">WhatsApp</option>
                                    <option value="email">Email</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>PROJECT TIMELINE</label>
                                <select
                                    value={formData.timeline}
                                    style={inputStyle('timeline')}
                                    onChange={(e) => updateField('timeline', e.target.value)}
                                    onFocus={() => setFocusedInput('timeline')}
                                    onBlur={() => setFocusedInput(null)}
                                >
                                    <option value="">Select timeline</option>
                                    <option value="urgent">ASAP (0-2 weeks)</option>
                                    <option value="month">This month</option>
                                    <option value="quarter">1-3 months</option>
                                    <option value="planning">Just planning</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>
                                REQUIRED SERVICES (SELECT ONE OR MORE)
                            </label>
                            <div className="service-pills-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                gap: '10px',
                            }}>
                                {serviceOptions.map((service) => {
                                    const selected = formData.services.includes(service);
                                    return (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            style={{
                                                textAlign: 'left',
                                                padding: '12px 14px',
                                                borderRadius: '12px',
                                                border: selected ? '1px solid rgba(0,242,255,0.75)' : '1px solid rgba(255,255,255,0.1)',
                                                background: selected ? 'rgba(0,242,255,0.12)' : 'rgba(255,255,255,0.02)',
                                                color: selected ? '#bff8ff' : 'rgba(255,255,255,0.88)',
                                                cursor: 'pointer',
                                                transition: 'all 0.25s ease',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {service}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="request-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>
                                    MONTHLY ELECTRIC BILL (OPTIONAL)
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. $120 / month"
                                    value={formData.monthlyBill}
                                    style={inputStyle('monthlyBill')}
                                    onChange={(e) => updateField('monthlyBill', e.target.value)}
                                    onFocus={() => setFocusedInput('monthlyBill')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>
                                    GOOGLE MAPS LINK (OPTIONAL)
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://maps.google.com/..."
                                    value={formData.mapLink}
                                    style={inputStyle('mapLink')}
                                    onChange={(e) => updateField('mapLink', e.target.value)}
                                    onFocus={() => setFocusedInput('mapLink')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button
                                type="button"
                                onClick={detectLocation}
                                disabled={isLocating}
                                style={{
                                    alignSelf: 'flex-start',
                                    padding: '10px 14px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0,242,255,0.35)',
                                    background: 'rgba(0,242,255,0.08)',
                                    color: '#8ff3ff',
                                    cursor: isLocating ? 'not-allowed' : 'pointer',
                                    opacity: isLocating ? 0.7 : 1,
                                    fontWeight: 600,
                                    fontSize: '13px',
                                }}
                            >
                                {isLocating ? 'Detecting location...' : 'Use my current location (GPS)'}
                            </button>
                            {locationStatus && (
                                <p style={{ margin: 0, fontSize: '12px', color: 'var(--element-dim)' }}>
                                    {locationStatus}
                                </p>
                            )}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                            <label style={{ color: 'var(--element-dim)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>HOW CAN WE HELP?</label>
                            <textarea
                                placeholder="Tell us about your home and energy goals..."
                                rows="4"
                                value={formData.message}
                                style={{ ...inputStyle('message'), resize: 'vertical' }}
                                onChange={(e) => updateField('message', e.target.value)}
                                onFocus={() => setFocusedInput('message')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </div>

                        <button className="cta-button" style={{
                            marginTop: '24px',
                            width: '100%',
                            padding: '20px',
                            fontSize: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '12px'
                        }} type="submit">
                            <span>SEND MESSAGE</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <style>{`
                .request-card select,
                .request-card input,
                .request-card textarea {
                    appearance: none;
                }

                @media (max-width: 900px) {
                    .contact-page-root {
                        padding: 16px 18px 56px 18px !important;
                    }

                    .request-card {
                        padding: 30px 20px !important;
                        border-radius: 18px !important;
                    }
                }

                @media (max-width: 640px) {
                    .request-grid-2,
                    .request-grid-3,
                    .service-pills-grid {
                        grid-template-columns: 1fr !important;
                        gap: 14px !important;
                    }

                    .request-card h2 {
                        font-size: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactPage;
