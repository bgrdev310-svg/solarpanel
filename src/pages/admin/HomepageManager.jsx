import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Save, RotateCcw, Image as ImageIcon, Eye, ChevronDown, ChevronUp, GripVertical } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const sections = [
  { id: 'hero', title: 'Hero Section', desc: 'Main banner with headline and CTA', fields: [
    { label: 'Main Title', type: 'text', value: 'Power Your Future With Solar Energy' },
    { label: 'Subtitle', type: 'textarea', value: 'Reliable, sustainable, and affordable solar panel installations.' },
    { label: 'CTA Button Text', type: 'text', value: 'Get a Free Quote' },
    { label: 'Background Image', type: 'image' },
  ]},
  { id: 'about', title: 'About Preview', desc: 'Company introduction', fields: [
    { label: 'Heading', type: 'text', value: 'Why Choose Our Solar Panels?' },
    { label: 'Description', type: 'textarea', value: 'Industry-leading solar technology with a 25-year warranty.' },
  ]},
  { id: 'services', title: 'Service Cards', desc: 'Showcase offerings', fields: [
    { label: 'Section Title', type: 'text', value: 'Our Services' },
    { label: 'Service 1', type: 'text', value: 'Residential Solar' },
    { label: 'Service 2', type: 'text', value: 'Commercial Solutions' },
  ]},
  { id: 'testimonials', title: 'Testimonials', desc: 'Customer reviews', fields: [
    { label: 'Section Title', type: 'text', value: 'What Our Clients Say' },
  ]},
];

const HomepageManager = () => {
  const [expanded, setExpanded] = useState('hero');

  return (
    <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
      <motion.div className="admin-page-header" variants={fadeUp} transition={{ duration: 0.4 }}>
        <div>
          <h1 className="admin-page-title">Homepage Manager</h1>
          <p className="admin-page-subtitle">Edit your public-facing homepage content.</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="admin-btn secondary"><RotateCcw size={16} /> Reset</button>
          <button className="admin-btn"><Save size={16} /> Save Changes</button>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} transition={{ duration: 0.4, delay: 0.1 }} className="admin-responsive-grid-sidebar" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {sections.map((s) => (
            <div key={s.id} className="admin-card" style={{ padding: 0 }}>
              <div onClick={() => setExpanded(expanded === s.id ? '' : s.id)} style={{
                padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                cursor: 'pointer', background: expanded === s.id ? 'rgba(99,102,241,0.04)' : 'transparent',
              }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <GripVertical size={16} color="var(--admin-text-muted)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{s.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>{s.desc}</div>
                  </div>
                </div>
                {expanded === s.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {expanded === s.id && (
                <div style={{ padding: '0 24px 24px', borderTop: '1px solid var(--admin-border)', paddingTop: 20 }}>
                  {s.fields.map((f, fi) => (
                    <div key={fi} className="admin-form-group">
                      <label className="admin-label">{f.label}</label>
                      {f.type === 'text' && <input type="text" className="admin-input" defaultValue={f.value} />}
                      {f.type === 'textarea' && <textarea className="admin-textarea" defaultValue={f.value} />}
                      {f.type === 'image' && (
                        <div style={{ border: '2px dashed var(--admin-border)', padding: 30, textAlign: 'center', borderRadius: 10, cursor: 'pointer', background: 'rgba(255,255,255,0.02)' }}>
                          <ImageIcon size={28} color="var(--admin-text-muted)" />
                          <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', marginTop: 8 }}>Click or drag to upload</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="admin-card" style={{ position: 'sticky', top: 20, height: 'fit-content' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--admin-border)' }}>
            <h2 className="admin-card-title" style={{ margin: 0 }}>Live Preview</h2>
            <div style={{ display: 'flex', gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f43f5e' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            </div>
          </div>
          <div style={{ borderRadius: 10, overflow: 'hidden', height: 420, background: 'linear-gradient(160deg, #0a0c1a, #1a1035, #0f1115)', padding: '40px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 30, right: 30, width: 60, height: 60, borderRadius: '50%', background: 'rgba(99,102,241,0.15)', filter: 'blur(20px)' }} />
            <h1 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 10 }}>Power Your Future With Solar Energy</h1>
            <p style={{ color: '#7a8190', marginBottom: 20, fontSize: '0.82rem', lineHeight: 1.6 }}>Reliable, sustainable, and affordable solar panel installations.</p>
            <button style={{ background: 'var(--admin-gradient-1)', color: 'white', padding: '10px 22px', borderRadius: 8, border: 'none', width: 'fit-content', fontWeight: 600, fontSize: '0.85rem', boxShadow: '0 4px 16px rgba(99,102,241,0.3)' }}>Get a Free Quote</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomepageManager;
