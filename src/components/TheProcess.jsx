import React from 'react';

const SurveyIcon = () => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
        <path d="M12 3L4 9V21H20V9L12 3Z" stroke="rgba(255,255,255,0.8)" />
        <path d="M9 21V12H15V21" stroke="#00D4FF" />
        <circle cx="12" cy="7" r="1.5" fill="#00D4FF" stroke="none" />
    </svg>
);

const InstallIcon = () => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
        <rect x="3" y="5" width="18" height="14" rx="2" transform="rotate(-10 12 12)" stroke="rgba(255,255,255,0.8)" />
        <path d="M12 2V22M3 12H21" transform="rotate(-10 12 12)" stroke="#00D4FF" />
    </svg>
);

const SaveIcon = () => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
        <path d="M12 2v20" stroke="currentColor" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#00D4FF" />
    </svg>
);

const ProcessCard = ({ number, title, description, Icon }) => {
    return (
        <div className="clean-process-card">
            <div className="card-pill-number">PHASE {number}</div>

            <div className="clean-card-icon">
                <Icon />
            </div>

            <h3 className="clean-card-title">{title}</h3>
            <p className="clean-card-desc">{description}</p>
        </div>
    );
};

const TheProcess = () => {
    return (
        <div className="process-wrapper-outer">
            <style>{`
                .process-wrapper-outer {
                    position: relative;
                    padding: 80px 20px;
                    max-width: 1100px; /* Tighter layout for perfect proportions */
                    margin: 0 auto;
                }

                .clean-header {
                    text-align: center;
                    margin-bottom: 70px;
                }

                .clean-header h2 {
                    font-family: 'Michroma', sans-serif;
                    font-size: 34px;
                    color: #fff;
                    margin-bottom: 20px;
                    letter-spacing: 1px;
                }

                .clean-header p {
                    color: #8b929b;
                    font-size: 16px;
                    max-width: 500px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                /* Laser Track Effect Detached from Cards */
                .laser-track-container {
                    width: 100%;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.05);
                    margin-bottom: 50px;
                    position: relative;
                }

                .laser-beam {
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 250px;
                    height: 3px;
                    background: #00D4FF;
                    box-shadow: 0 0 20px #00D4FF, 0 0 40px #00D4FF;
                    border-radius: 3px;
                    animation: blast 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }

                @keyframes blast {
                    0% { left: 0%; opacity: 0; transform: scaleX(0.5); }
                    15% { opacity: 1; transform: scaleX(1); }
                    85% { opacity: 1; transform: scaleX(1); }
                    100% { left: calc(100% - 250px); opacity: 0; transform: scaleX(0.5); }
                }

                .clean-process-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }

                .clean-process-card {
                    background: rgba(18, 20, 22, 0.6);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.04);
                    border-radius: 20px;
                    padding: 50px 32px 40px 32px;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .clean-process-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(0, 212, 255, 0.25);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3), inset 0 0 15px rgba(0,212,255,0.03);
                    background: rgba(22, 24, 28, 0.8);
                }

                /* Active Flare at the top inner edge */
                .clean-process-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 15%;
                    right: 15%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #00D4FF, transparent);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .clean-process-card:hover::before {
                    opacity: 1;
                }

                /* Elegant Pill Replace Clunky Numbers */
                .card-pill-number {
                    position: absolute;
                    top: 24px;
                    left: 24px;
                    font-family: 'Michroma', sans-serif;
                    font-size: 11px;
                    color: #fff;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 6px 14px;
                    border-radius: 99px;
                    letter-spacing: 1px;
                    transition: all 0.4s ease;
                }

                .clean-process-card:hover .card-pill-number {
                    color: #00D4FF;
                    background: rgba(0, 212, 255, 0.05);
                    border-color: rgba(0, 212, 255, 0.2);
                }

                /* Clean Centered Icon Container */
                .clean-card-icon {
                    width: 76px;
                    height: 76px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.015);
                    border: 1px solid rgba(255, 255, 255, 0.04);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 28px;
                    margin-top: 10px;
                    position: relative;
                    transition: all 0.4s ease;
                }

                .clean-card-icon::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40px;
                    height: 40px;
                    background: #00D4FF;
                    filter: blur(20px);
                    opacity: 0.15;
                    border-radius: 50%;
                    transition: opacity 0.4s ease;
                }

                .clean-process-card:hover .clean-card-icon {
                    background: rgba(0, 212, 255, 0.03);
                    border-color: rgba(0, 212, 255, 0.15);
                    transform: scale(1.05);
                }
                .clean-process-card:hover .clean-card-icon::after {
                    opacity: 0.3;
                }

                .clean-card-title {
                    font-family: 'Michroma', sans-serif;
                    font-size: 18px;
                    color: #fff;
                    margin-bottom: 16px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .clean-card-desc {
                    color: #8b929b;
                    font-size: 14px;
                    line-height: 1.7;
                    font-weight: 400;
                }

                @media (max-width: 900px) {
                    .clean-process-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }
                    .process-wrapper-outer {
                        padding: 60px 20px;
                    }
                    .laser-track-container {
                        display: none;
                    }
                }
            `}</style>

            <div className="clean-header">
                <h2>THE PROCESS</h2>
                <p>From consultation to grid independence, we handle everything with precision and care.</p>
            </div>

            <div className="laser-track-container">
                <div className="laser-beam"></div>
            </div>

            <div className="clean-process-grid">
                <ProcessCard
                    number="01"
                    title="SURVEY"
                    description="We analyze your roof's sunlight potential and custom engineer a solution."
                    Icon={SurveyIcon}
                />
                <ProcessCard
                    number="02"
                    title="INSTALL"
                    description="Precision engineering meets Texas durability. Fast, clean, expert installation."
                    Icon={InstallIcon}
                />
                <ProcessCard
                    number="03"
                    title="SAVE"
                    description="Watch your meter spin backward instantly. Track your generation in real-time."
                    Icon={SaveIcon}
                />
            </div>
        </div>
    );
};

export default TheProcess;
