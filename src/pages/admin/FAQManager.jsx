import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, GripVertical, Eye, EyeOff, Search } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const initialFaqs = [
  { id: 1, question: 'How long does installation take?', answer: 'Typically 1-2 days depending on the system size and complexity.', visible: true, category: 'Installation' },
  { id: 2, question: 'Do you offer financing?', answer: 'Yes, we have multiple financing options available including zero-down payment plans.', visible: true, category: 'Pricing' },
  { id: 3, question: 'What is the warranty period?', answer: 'We offer a 25-year warranty on panels and 10 years on inverters.', visible: true, category: 'Warranty' },
  { id: 4, question: 'How much can I save on electricity?', answer: 'Most homeowners save 50-80% on their electricity bills after installing solar panels.', visible: false, category: 'Savings' },
  { id: 5, question: 'Do solar panels work on cloudy days?', answer: 'Yes, solar panels still generate power on cloudy days, though at reduced efficiency.', visible: true, category: 'General' },
];

const FAQManager = () => {
  const [faqs, setFaqs] = useState(initialFaqs);

  const [searchTerm, setSearchTerm] = useState('');
  const filtered = useMemo(() => 
    faqs.filter(f => f.question.toLowerCase().includes(searchTerm.toLowerCase())),
    [faqs, searchTerm]
  );

  return (
    <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
      <motion.div className="admin-page-header" variants={fadeUp} transition={{ duration: 0.4 }}>
        <div>
          <h1 className="admin-page-title">FAQ Manager</h1>
          <p className="admin-page-subtitle">Manage frequently asked questions displayed on your site.</p>
        </div>
        <button className="admin-btn"><Plus size={16} /> Add FAQ</button>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={fadeUp} transition={{ duration: 0.4, delay: 0.1 }} style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }} className="admin-faq-stats">
        {[
          { label: 'Total FAQs', value: faqs.length, color: '#6366f1' },
          { label: 'Visible', value: faqs.filter(f => f.visible).length, color: '#22c55e' },
          { label: 'Hidden', value: faqs.filter(f => !f.visible).length, color: '#f59e0b' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '14px 24px', borderRadius: 12, background: `${s.color}10`,
            border: `1px solid ${s.color}20`, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: s.color }}>{s.value}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--admin-text-secondary)', fontWeight: 500 }}>{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Search */}
      <motion.div variants={fadeUp} transition={{ duration: 0.4, delay: 0.15 }} style={{ marginBottom: 20 }}>
        <div className="admin-search" style={{ width: '100%', maxWidth: 400 }}>
          <Search size={18} color="var(--admin-text-muted)" />
          <input type="text" placeholder="Search FAQs..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </motion.div>

      {/* FAQ List */}
      <motion.div variants={fadeUp} transition={{ duration: 0.4, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.map((faq) => (
          <div key={faq.id} className="admin-card admin-faq-item" style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <GripVertical size={18} color="var(--admin-text-muted)" style={{ cursor: 'grab', flexShrink: 0 }} />
            
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{faq.question}</span>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, padding: '2px 10px', borderRadius: 6,
                  background: 'rgba(99,102,241,0.1)', color: '#818cf8',
                }}>{faq.category}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--admin-text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {faq.answer}
              </div>
            </div>

            <div className="admin-faq-actions" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <button className="admin-icon-btn" style={{ width: 34, height: 34, color: faq.visible ? '#22c55e' : '#f59e0b', borderColor: faq.visible ? 'rgba(34,197,94,0.2)' : 'rgba(245,158,11,0.2)' }} title={faq.visible ? 'Visible' : 'Hidden'}>
                {faq.visible ? <Eye size={15} /> : <EyeOff size={15} />}
              </button>
              <button className="admin-icon-btn" style={{ width: 34, height: 34 }} title="Edit">
                <Edit2 size={15} />
              </button>
              <button className="admin-icon-btn" style={{ width: 34, height: 34, color: '#f43f5e', borderColor: 'rgba(244,63,94,0.2)' }} title="Delete">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQManager;
