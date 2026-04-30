import React from 'react';
import { motion } from 'motion/react';
import { Save, Phone, Mail, MapPin, Clock, Share2, Link, Globe } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const ContactManager = () => {
  return (
    <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
      <motion.div className="admin-page-header" variants={fadeUp} transition={{ duration: 0.4 }}>
        <div>
          <h1 className="admin-page-title">Contact Info Manager</h1>
          <p className="admin-page-subtitle">Update your business contact details shown publicly.</p>
        </div>
        <button className="admin-btn"><Save size={16} /> Save Changes</button>
      </motion.div>

      <motion.div className="admin-grid-2" variants={fadeUp} transition={{ duration: 0.4, delay: 0.1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="admin-card">
            <h2 className="admin-card-title" style={{ marginBottom: 20 }}>Primary Contact</h2>
            {[
              { icon: <Phone size={18} />, label: 'Mobile Number', value: '+1 (555) 123-4567', color: '#22c55e' },
              { icon: <Mail size={18} />, label: 'Email Address', value: 'hello@solarpanel.com', color: '#3b82f6' },
              { icon: <Clock size={18} />, label: 'Working Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM', color: '#f59e0b' },
            ].map((f, i) => (
              <div key={i} className="admin-form-group">
                <label className="admin-label">{f.label}</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--admin-border)', borderRadius: 10, padding: '10px 16px', transition: 'var(--admin-transition)' }}>
                  <div style={{ color: f.color, flexShrink: 0 }}>{f.icon}</div>
                  <input type="text" defaultValue={f.value} style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--admin-text-primary)', outline: 'none', fontFamily: 'var(--admin-font)', fontSize: '0.92rem' }} />
                </div>
              </div>
            ))}
            <div className="admin-form-group">
              <label className="admin-label">Office Address</label>
              <div style={{ display: 'flex', gap: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--admin-border)', borderRadius: 10, padding: '12px 16px' }}>
                <MapPin size={18} color="#f43f5e" style={{ flexShrink: 0, marginTop: 2 }} />
                <textarea defaultValue="123 Solar Way, Green Energy District, Cityville, 12345" style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--admin-text-primary)', outline: 'none', resize: 'vertical', minHeight: 60, fontFamily: 'var(--admin-font)', fontSize: '0.92rem' }} />
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h2 className="admin-card-title" style={{ marginBottom: 20 }}>Social Media</h2>
            {[
              { icon: <Link size={18} />, label: 'Instagram', value: '@solarpanel_official', color: '#e1306c' },
              { icon: <Share2 size={18} />, label: 'Facebook', value: 'facebook.com/solarpanel', color: '#1877f2' },
              { icon: <Phone size={18} />, label: 'WhatsApp', value: '+1 (555) 123-4567', color: '#25d366' },
            ].map((f, i) => (
              <div key={i} className="admin-form-group">
                <label className="admin-label">{f.label}</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--admin-border)', borderRadius: 10, padding: '10px 16px' }}>
                  <div style={{ color: f.color }}>{f.icon}</div>
                  <input type="text" defaultValue={f.value} style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--admin-text-primary)', outline: 'none', fontFamily: 'var(--admin-font)', fontSize: '0.92rem' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="admin-card">
            <h2 className="admin-card-title" style={{ marginBottom: 20 }}>Map Location</h2>
            <div className="admin-form-group">
              <label className="admin-label">Google Maps Embed URL</label>
              <textarea className="admin-textarea" defaultValue="https://maps.google.com/embed?..." style={{ minHeight: 70 }} />
            </div>
            <div style={{ height: 220, borderRadius: 10, overflow: 'hidden', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--admin-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
              <Globe size={32} color="var(--admin-text-muted)" />
              <span style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem' }}>Map Preview</span>
            </div>
          </div>

          <div className="admin-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 className="admin-card-title" style={{ margin: 0 }}>Public Preview</h2>
            </div>
            <div style={{ borderRadius: 12, background: 'linear-gradient(160deg, #0a0c1a, #1a1035)', padding: 24, border: '1px solid var(--admin-border)' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 16 }}>Contact Us</div>
              {[
                { icon: <Phone size={14} />, text: '+1 (555) 123-4567' },
                { icon: <Mail size={14} />, text: 'hello@solarpanel.com' },
                { icon: <MapPin size={14} />, text: '123 Solar Way, Cityville' },
                { icon: <Clock size={14} />, text: 'Mon-Fri 9AM-6PM' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, fontSize: '0.85rem', color: 'var(--admin-text-secondary)' }}>
                  <span style={{ color: '#6366f1' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactManager;
