import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);

    React.useEffect(() => {
        let lastScrollY = window.scrollY;
        let timeoutId = null;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsAtTop(currentScrollY < 20);

            let action = '';
            if (currentScrollY < 10) {
                action = 'top';
                setVisible(true);
                clearTimeout(timeoutId);
            } else if (currentScrollY > lastScrollY) {
                action = 'down';
                setVisible(false);
                clearTimeout(timeoutId);
            } else {
                action = 'up';
                setVisible(true);
                clearTimeout(timeoutId);
                
                const waitTime = window.innerWidth > 768 ? 1800 : 1100;
                timeoutId = setTimeout(() => {
                    console.log('timeout triggered, hiding');
                    setVisible(false);
                }, waitTime);
            }
            console.log(`Scroll Event - current: ${currentScrollY}, last: ${lastScrollY}, action: ${action}`);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return ' active';
        if (path !== '/' && location.pathname.startsWith(path)) return ' active';
        return '';
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className={`navbar-container ${!visible ? 'nav-hidden' : 'nav-visible'} ${!isAtTop ? 'nav-scrolled' : ''}`} style={isAtTop ? { borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '20px', marginBottom: '24px' } : {}}>
                <nav className="flex-row items-center justify-between" style={{ padding: '0 8px' }}>
                    {/* Left Area - Logo */}
                    <div className="flex-row items-center">
                        <span className="michroma-title" style={{ fontSize: '20px', letterSpacing: '1px', WebkitTextStroke: '0px' }}>
                            SOLAR PANEL
                        </span>
                    </div>

                    {/* Middle Links Area - Hidden on mobile */}
                    <div className="nav-links-desktop flex-row items-center" style={{ gap: '32px' }}>
                        <Link to="/" className={`nav-link${isActive('/')}`} style={{ textDecoration: 'none' }}>Home</Link>
                        <Link to="/services" className={`nav-link${isActive('/services')}`} style={{ textDecoration: 'none' }}>Our Services</Link>
                        <Link to="/gallery" className={`nav-link${isActive('/gallery')}`} style={{ textDecoration: 'none' }}>Gallery</Link>
                        <Link to="/about" className={`nav-link${isActive('/about')}`} style={{ textDecoration: 'none' }}>About</Link>
                        <Link to="/contact" className={`nav-link${isActive('/contact')}`} style={{ textDecoration: 'none' }}>Contact</Link>
                    </div>

                    {/* Right Actions Area - Hidden on mobile */}
                    <div className="nav-actions-desktop flex-row items-center" style={{ gap: '16px' }}>
                        <div className="hover-lift flex-row items-center justify-center" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--panel-dark)', border: '1px solid var(--panel-border)', overflow: 'hidden', padding: '8px' }}>
                            <img src="/eco-house.png" alt="Eco House" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div className="hover-lift flex-row items-center justify-center" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--panel-dark)', border: '1px solid var(--panel-border)', overflow: 'hidden', padding: '6px' }}>
                            <img src="/sun.png" alt="Sun Settings" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>

                    {/* Hamburger Menu Button - Visible on mobile only */}
                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        style={{
                            display: 'none',
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '12px',
                            padding: '10px',
                            cursor: 'pointer',
                            flexDirection: 'column',
                            gap: '5px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '44px',
                            height: '44px',
                            transition: 'all 0.3s ease',
                            zIndex: 1001
                        }}
                    >
                        <span style={{
                            display: 'block', width: '20px', height: '2px',
                            backgroundColor: '#fff', borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none'
                        }} />
                        <span style={{
                            display: 'block', width: '20px', height: '2px',
                            backgroundColor: '#fff', borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            opacity: menuOpen ? 0 : 1
                        }} />
                        <span style={{
                            display: 'block', width: '20px', height: '2px',
                            backgroundColor: '#fff', borderRadius: '2px',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'
                        }} />
                    </button>
                </nav>
            </div>

            {/* Dark Overlay */}
            {menuOpen && (
                <div
                    onClick={closeMenu}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        zIndex: 1030,
                        transition: 'opacity 0.3s ease'
                    }}
                />
            )}

            {/* Full-Height Sidebar Menu - Slides from Right */}
            <div
                className="mobile-sidebar"
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '280px',
                    height: '100vh',
                    background: 'linear-gradient(180deg, rgba(15, 16, 17, 0.7) 0%, rgba(10, 11, 12, 0.75) 100%)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    borderLeft: '1px solid rgba(0, 212, 255, 0.1)',
                    boxShadow: menuOpen ? '-20px 0 60px rgba(0, 0, 0, 0.5)' : 'none',
                    zIndex: 1031,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px 24px 40px 24px',
                    gap: '8px',
                    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflowY: 'auto'
                }}
            >
                {/* Mobile Sidebar Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <span className="michroma-title" style={{ fontSize: '18px', letterSpacing: '1px', WebkitTextStroke: '0px' }}>
                        SOLAR PANEL
                    </span>
                    <button
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '12px',
                            padding: '10px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '44px',
                            height: '44px',
                            color: '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ fontSize: '20px', lineHeight: 1 }}>✕</span>
                    </button>
                </div>

                {/* Nav Links */}
                <Link to="/" onClick={closeMenu} className={`mobile-nav-link${isActive('/')}`}
                    style={{
                        textDecoration: 'none',
                        color: isActive('/') ? '#fff' : 'var(--element-dim)',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        fontSize: '18px',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        background: isActive('/') ? 'rgba(0, 212, 255, 0.08)' : 'transparent',
                        borderLeft: isActive('/') ? '3px solid #00D4FF' : '3px solid transparent'
                    }}>
                    Home
                </Link>
                <Link to="/services" onClick={closeMenu} className={`mobile-nav-link${isActive('/services')}`}
                    style={{
                        textDecoration: 'none',
                        color: isActive('/services') ? '#fff' : 'var(--element-dim)',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        fontSize: '18px',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        background: isActive('/services') ? 'rgba(0, 212, 255, 0.08)' : 'transparent',
                        borderLeft: isActive('/services') ? '3px solid #00D4FF' : '3px solid transparent'
                    }}>
                    Our Services
                </Link>
                <Link to="/gallery" onClick={closeMenu} className={`mobile-nav-link${isActive('/gallery')}`}
                    style={{
                        textDecoration: 'none',
                        color: isActive('/gallery') ? '#fff' : 'var(--element-dim)',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        fontSize: '18px',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        background: isActive('/gallery') ? 'rgba(0, 212, 255, 0.08)' : 'transparent',
                        borderLeft: isActive('/gallery') ? '3px solid #00D4FF' : '3px solid transparent'
                    }}>
                    Gallery
                </Link>
                <Link to="/about" onClick={closeMenu} className={`mobile-nav-link${isActive('/about')}`}
                    style={{
                        textDecoration: 'none',
                        color: isActive('/about') ? '#fff' : 'var(--element-dim)',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        fontSize: '18px',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        background: isActive('/about') ? 'rgba(0, 212, 255, 0.08)' : 'transparent',
                        borderLeft: isActive('/about') ? '3px solid #00D4FF' : '3px solid transparent'
                    }}>
                    About
                </Link>
                <Link to="/contact" onClick={closeMenu} className={`mobile-nav-link${isActive('/contact')}`}
                    style={{
                        textDecoration: 'none',
                        color: isActive('/contact') ? '#fff' : 'var(--element-dim)',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        fontSize: '18px',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        background: isActive('/contact') ? 'rgba(0, 212, 255, 0.08)' : 'transparent',
                        borderLeft: isActive('/contact') ? '3px solid #00D4FF' : '3px solid transparent'
                    }}>
                    Contact
                </Link>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                {/* Bottom Icons */}
                <div style={{
                    display: 'flex', gap: '14px', paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.06)', justifyContent: 'center'
                }}>
                    <div className="flex-row items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--panel-dark)', border: '1px solid var(--panel-border)', overflow: 'hidden', padding: '10px' }}>
                        <img src="/eco-house.png" alt="Eco House" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className="flex-row items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--panel-dark)', border: '1px solid var(--panel-border)', overflow: 'hidden', padding: '8px' }}>
                        <img src="/sun.png" alt="Sun Settings" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>

                {/* Branding at bottom */}
                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <span style={{ color: 'var(--element-darker)', fontSize: '12px', letterSpacing: '1px' }}>
                        © 2024 SOLAR PANEL
                    </span>
                </div>
            </div>
        </>
    );
};

export default React.memo(NavBar);
