import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, Phone, Shield, ArrowRight, Check, Mail, Sparkles, Zap, BarChart3, Sun } from 'lucide-react';
import '../components/auth/auth.css';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignUp = location.pathname === '/signup';

  const [mode, setMode] = useState(isSignUp ? 'signup' : 'login');
  const [method, setMethod] = useState('username');
  const [showPwd, setShowPwd] = useState(false);
  const [showCpwd, setShowCpwd] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formKey, setFormKey] = useState(0);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpwd, setCpwd] = useState('');
  const [phone, setPhone] = useState('');
  const [cc, setCc] = useState('+213');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const otpRefs = useRef([]);

  useEffect(() => { setMode(location.pathname === '/signup' ? 'signup' : 'login'); }, [location.pathname]);

  useEffect(() => {
    if (otpTimer > 0) { const t = setInterval(() => setOtpTimer(v => v - 1), 1000); return () => clearInterval(t); }
  }, [otpTimer]);

  const strength = useCallback((p) => {
    if (!p) return { n: 0, l: '' };
    let s = 0;
    if (p.length >= 6) s++; if (p.length >= 10) s++; if (/[A-Z]/.test(p)) s++; if (/\d/.test(p)) s++; if (/[^A-Za-z0-9]/.test(p)) s++;
    if (s <= 2) return { n: 1, l: 'Weak' }; if (s <= 3) return { n: 2, l: 'Medium' }; return { n: 3, l: 'Strong' };
  }, []);

  const str = strength(password);

  const go = (m) => {
    setMode(m); setError(''); setSuccess(''); setOtpSent(false); setOtp(['','','','','','']); setFormKey(k => k + 1);
    navigate(m === 'signup' ? '/signup' : '/login', { replace: true });
  };

  const setMeth = (m) => { setMethod(m); setError(''); setOtpSent(false); setOtp(['','','','','','']); setFormKey(k => k + 1); };

  const otpChange = (i, v) => {
    if (!/^\d*$/.test(v)) return;
    const n = [...otp]; n[i] = v.slice(-1); setOtp(n);
    if (v && i < 5) otpRefs.current[i + 1]?.focus();
  };

  const otpKey = (i, e) => { if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus(); };

  const otpPaste = (e) => {
    e.preventDefault();
    const p = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const n = [...otp]; for (let i = 0; i < p.length; i++) n[i] = p[i]; setOtp(n);
    otpRefs.current[Math.min(p.length, 5)]?.focus();
  };

  const sendOtp = () => {
    if (!phone || phone.length < 6) { setError('Enter a valid phone number'); return; }
    setError(''); setLoading(true);
    setTimeout(() => { setLoading(false); setOtpSent(true); setOtpTimer(60); setSuccess('OTP sent!'); setTimeout(() => setSuccess(''), 3000); otpRefs.current[0]?.focus(); }, 1200);
  };

  const submit = (e) => {
    e.preventDefault(); setError('');
    if (method === 'username') {
      if (!username.trim()) { setError('Username is required'); return; }
      if (!password) { setError('Password is required'); return; }
      if (mode === 'signup') {
        if (!fullName.trim()) { setError('Full name is required'); return; }
        if (!email.trim()) { setError('Email is required'); return; }
        if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
        if (password !== cpwd) { setError('Passwords do not match'); return; }
      }
    } else {
      if (!otpSent) { setError('Send OTP first'); return; }
      if (otp.join('').length < 6) { setError('Enter complete OTP'); return; }
      if (mode === 'signup' && !fullName.trim()) { setError('Full name is required'); return; }
    }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(mode === 'login' ? 'Welcome back!' : 'Account created!'); setTimeout(() => navigate('/'), 1800); }, 1800);
  };

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="auth-page">
      {/* ═══ FULL BACKGROUND IMAGE ═══ */}
      <div className="auth-bg-layer">
        <img src="/loginbg.png" alt="Solar energy landscape" />
        <div className="auth-bg-overlay" />
      </div>

      {/* Particles overlay */}
      <div className="auth-dots">{[...Array(6)].map((_, i) => <div key={i} className="auth-dot" />)}</div>

      <div className="auth-layout">
        {/* ═══ LEFT — HERO CONTENT ═══ */}
        <div className="auth-hero">
          <div className="auth-hero-grid" />
          <div className="auth-hero-content">
            <div className="auth-hero-logo">
              <div className="auth-hero-logo-icon">
                <Sun />
              </div>
              SOLAR <b>PANEL</b>
            </div>
            <h2 className="auth-hero-tagline">
              Powering a<br />Sustainable<br /><span className="highlight">Future</span>
            </h2>
            <p className="auth-hero-sub">
              Monitor, manage, and maximize your solar energy production with real-time insights and intelligent analytics.
            </p>
          </div>
        </div>

        {/* ═══ RIGHT — FORM ═══ */}
        <div className="auth-form-side">
          <div className="auth-card">
          <div className="auth-head">
            <h1 className="auth-title">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h1>
            <p className="auth-subtitle">{mode === 'login' ? 'Sign in to continue your solar journey' : 'Start your solar journey today'}</p>
          </div>

          {/* Tabs */}
          <div className="auth-tabs">
            <button className={`auth-tab ${mode === 'login' ? 'on' : ''}`} onClick={() => go('login')}>Sign In</button>
            <button className={`auth-tab ${mode === 'signup' ? 'on' : ''}`} onClick={() => go('signup')}>Sign Up</button>
          </div>

          {/* Method toggle */}
          <div className="auth-methods">
            <button className={`auth-method ${method === 'username' ? 'on' : ''}`} onClick={() => setMeth('username')}>
              <User size={16} /> {mode === 'login' ? 'Username' : 'Email'}
            </button>
            <button className={`auth-method ${method === 'phone' ? 'on' : ''}`} onClick={() => setMeth('phone')}>
              <Phone size={16} /> Phone OTP
            </button>
          </div>

          {/* Messages */}
          {error && <div className="auth-err"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r=".75" fill="currentColor"/></svg>{error}</div>}
          {success && <div className="auth-ok"><Check size={16} />{success}</div>}

          <form onSubmit={submit} key={formKey}>
            <div className="auth-form-body" style={{ animation: 'a-up .35s ease both' }}>

              {/* ── USERNAME / EMAIL METHOD ── */}
              {method === 'username' && (
                <>
                  {mode === 'signup' && (
                    <div className="auth-fg">
                      <input id="a-name" value={fullName} onChange={e => setFullName(e.target.value)} placeholder=" " autoComplete="name" />
                      <label htmlFor="a-name">Full Name</label>
                    </div>
                  )}
                  {mode === 'signup' && (
                    <div className="auth-fg">
                      <input id="a-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder=" " autoComplete="email" />
                      <label htmlFor="a-email">Email Address</label>
                    </div>
                  )}
                  <div className="auth-fg">
                    <input id="a-user" value={username} onChange={e => setUsername(e.target.value)} placeholder=" " autoComplete="username" />
                    <label htmlFor="a-user">Username</label>
                  </div>
                  <div className="auth-fg">
                    <input id="a-pwd" type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder=" " autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} style={{ paddingRight: 48 }} />
                    <label htmlFor="a-pwd">Password</label>
                    <button type="button" className="auth-eye" onClick={() => setShowPwd(!showPwd)} tabIndex={-1}>{showPwd ? <EyeOff /> : <Eye />}</button>
                  </div>

                  {mode === 'signup' && password && (
                    <div className="auth-str" style={{ marginTop: -8, marginBottom: 4 }}>
                      {[1, 2, 3].map(n => (
                        <div key={n} className={`auth-str-seg ${str.n >= n ? `str-${n}` : ''}`}><div className="fill" /></div>
                      ))}
                      <span className={`auth-str-label ${str.n === 1 ? 'str-weak' : str.n === 2 ? 'str-med' : str.n === 3 ? 'str-strong' : ''}`}>{str.l}</span>
                    </div>
                  )}

                  {mode === 'signup' && (
                    <div className="auth-fg">
                      <input id="a-cpwd" type={showCpwd ? 'text' : 'password'} value={cpwd} onChange={e => setCpwd(e.target.value)} placeholder=" " autoComplete="new-password" style={{ paddingRight: 48 }} />
                      <label htmlFor="a-cpwd">Confirm Password</label>
                      <button type="button" className="auth-eye" onClick={() => setShowCpwd(!showCpwd)} tabIndex={-1}>{showCpwd ? <EyeOff /> : <Eye />}</button>
                    </div>
                  )}

                  {mode === 'login' && (
                    <div className="auth-extras">
                      <label className="auth-check-wrap" onClick={() => setRemember(!remember)}>
                        <div className={`auth-check ${remember ? 'on' : ''}`}>{remember && <Check size={12} />}</div>
                        <span className="auth-check-text">Remember me</span>
                      </label>
                      <button type="button" className="auth-forgot-btn">Forgot password?</button>
                    </div>
                  )}
                </>
              )}

              {/* ── PHONE OTP METHOD ── */}
              {method === 'phone' && (
                <>
                  {mode === 'signup' && (
                    <div className="auth-fg">
                      <input id="a-pname" value={fullName} onChange={e => setFullName(e.target.value)} placeholder=" " autoComplete="name" />
                      <label htmlFor="a-pname">Full Name</label>
                    </div>
                  )}

                  <div style={{ marginBottom: 24 }}>
                    <div className="auth-phone-row">
                      <input className="auth-cc" value={cc} onChange={e => setCc(e.target.value)} maxLength={5} />
                      <div className="auth-phone-fg">
                        <input value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="Enter phone number" autoComplete="tel" />
                        <label>Phone Number</label>
                      </div>
                    </div>
                  </div>

                  {!otpSent && (
                    <button type="button" className="auth-cta" onClick={sendOtp} disabled={loading} style={{ marginBottom: 24 }}>
                      {loading ? <div className="auth-spinner" /> : <><Mail size={18} /> Send OTP Code</>}
                    </button>
                  )}

                  {otpSent && (
                    <div className="auth-otp-wrap">
                      <div className="auth-otp-label">Enter Verification Code</div>
                      <div className="auth-otp-boxes" onPaste={otpPaste}>
                        {otp.map((d, i) => (
                          <input key={i} ref={el => otpRefs.current[i] = el} type="text" inputMode="numeric" maxLength={1}
                            className={`auth-otp-box ${d ? 'filled' : ''}`} value={d}
                            onChange={e => otpChange(i, e.target.value)} onKeyDown={e => otpKey(i, e)} />
                        ))}
                      </div>
                      <div className="auth-otp-info">
                        {otpTimer > 0 ? <>Resend in <strong>{fmt(otpTimer)}</strong></> :
                          <button type="button" onClick={sendOtp} disabled={loading}>Resend OTP</button>}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* CTA */}
              {(method === 'username' || otpSent) && (
                <button type="submit" className="auth-cta" disabled={loading}>
                  {loading ? <div className="auth-spinner" /> : <>{mode === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight size={18} /></>}
                </button>
              )}
            </div>
          </form>

          <div className="auth-div"><div className="auth-div-line" /><span className="auth-div-txt">{mode === 'login' ? 'New here?' : 'Already a member?'}</span><div className="auth-div-line" /></div>
          <div className="auth-switch">
            {mode === 'login'
              ? <>Don't have an account? <button onClick={() => go('signup')}>Create one</button></>
              : <>Already have an account? <button onClick={() => go('login')}>Sign in</button></>}
          </div>
          </div>
        </div>
      </div>

      {/* Mobile brand */}
      <div className="auth-mob-brand">
        <div className="auth-hero-logo">
          <div className="auth-hero-logo-icon">
            <Sun size={20} />
          </div>
          SOLAR <b>PANEL</b>
        </div>
        <p className="auth-hero-sub">Intelligent solar energy platform</p>
      </div>
    </div>
  );
};

export default AuthPage;
