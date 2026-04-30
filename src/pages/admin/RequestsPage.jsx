import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Eye, Calendar, User, Phone, Mail, MapPin, Filter, Search, ArrowUpRight } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const RequestsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const requests = [
    { id: 'REQ-001', name: 'John Smith', phone: '(555) 123-4567', email: 'john@example.com', address: '456 Oak St, City', service: 'Residential Solar', date: 'Oct 12, 2026', preferred: 'Oct 20, 2026', status: 'pending' },
    { id: 'REQ-002', name: 'Sarah Davis', phone: '(555) 987-6543', email: 'sarah@example.com', address: '789 Pine Ave, Town', service: 'Commercial Panel', date: 'Oct 11, 2026', preferred: 'Oct 25, 2026', status: 'pending' },
    { id: 'REQ-003', name: 'Michael Chen', phone: '(555) 456-7890', email: 'mike@example.com', address: '321 Elm Rd, Village', service: 'Battery Storage', date: 'Oct 10, 2026', preferred: 'Oct 18, 2026', status: 'accepted' },
    { id: 'REQ-004', name: 'Emily White', phone: '(555) 222-3333', email: 'emily@example.com', address: '555 Cedar Ln, Suburb', service: 'Maintenance', date: 'Oct 09, 2026', preferred: 'Oct 22, 2026', status: 'completed' },
    { id: 'REQ-005', name: 'James Brown', phone: '(555) 111-4444', email: 'james@example.com', address: '888 Maple Dr', service: 'Residential Solar', date: 'Oct 08, 2026', preferred: 'Oct 30, 2026', status: 'rejected' },
    { id: 'REQ-006', name: 'Lisa Johnson', phone: '(555) 333-5555', email: 'lisa@example.com', address: '222 Birch Way', service: 'Hybrid System', date: 'Oct 07, 2026', preferred: 'Nov 01, 2026', status: 'pending' },
  ];

  const filters = ['All', 'Pending', 'Accepted', 'Completed', 'Rejected'];
  const filtered = activeFilter === 'All' ? requests : requests.filter(r => r.status === activeFilter.toLowerCase());

  const counts = {
    All: requests.length,
    Pending: requests.filter(r => r.status === 'pending').length,
    Accepted: requests.filter(r => r.status === 'accepted').length,
    Completed: requests.filter(r => r.status === 'completed').length,
    Rejected: requests.filter(r => r.status === 'rejected').length,
  };

  const handleAccept = (req) => { setSelectedRequest(req); setIsModalOpen(true); };

  return (
    <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
      <motion.div className="admin-page-header" variants={fadeUp} transition={{ duration: 0.4 }}>
        <div>
          <h1 className="admin-page-title">Requests & Leads</h1>
          <p className="admin-page-subtitle">Manage incoming inquiries and schedule installations.</p>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div variants={fadeUp} transition={{ duration: 0.4, delay: 0.1 }} style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)} style={{
            padding: '8px 18px', borderRadius: 20, border: '1px solid',
            borderColor: activeFilter === f ? 'rgba(99,102,241,0.3)' : 'var(--admin-border)',
            background: activeFilter === f ? 'var(--admin-accent-light)' : 'rgba(255,255,255,0.03)',
            color: activeFilter === f ? 'var(--admin-accent-hover)' : 'var(--admin-text-secondary)',
            cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
            fontFamily: 'var(--admin-font)', transition: 'var(--admin-transition)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {f}
            <span style={{
              background: activeFilter === f ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)',
              padding: '1px 8px', borderRadius: 10, fontSize: '0.75rem'
            }}>{counts[f]}</span>
          </button>
        ))}
      </motion.div>

      {/* Table */}
      <motion.div className="admin-card" style={{ padding: 0, overflow: 'hidden' }} variants={fadeUp} transition={{ duration: 0.4, delay: 0.15 }}>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Client</th>
                <th>Service</th>
                <th>Preferred Date</th>
                <th>Request Date</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((req) => (
                <tr key={req.id}>
                  <td style={{ color: 'var(--admin-text-muted)', fontWeight: 600, fontFamily: 'monospace' }}>{req.id}</td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{req.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>{req.email}</div>
                  </td>
                  <td style={{ color: 'var(--admin-text-secondary)' }}>{req.service}</td>
                  <td style={{ color: 'var(--admin-text-secondary)' }}>{req.preferred}</td>
                  <td style={{ color: 'var(--admin-text-muted)' }}>{req.date}</td>
                  <td><span className={`badge ${req.status}`}>{req.status.charAt(0).toUpperCase() + req.status.slice(1)}</span></td>
                  <td>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                      <button className="admin-icon-btn" style={{ width: 34, height: 34 }} title="View">
                        <Eye size={15} />
                      </button>
                      {req.status === 'pending' && (
                        <>
                          <button className="admin-icon-btn" style={{ width: 34, height: 34, color: '#22c55e', borderColor: 'rgba(34,197,94,0.2)' }} title="Accept" onClick={() => handleAccept(req)}>
                            <Check size={15} />
                          </button>
                          <button className="admin-icon-btn" style={{ width: 34, height: 34, color: '#f43f5e', borderColor: 'rgba(244,63,94,0.2)' }} title="Reject">
                            <X size={15} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Accept & Schedule Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
          }} onClick={() => setIsModalOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: 580, margin: 20, maxHeight: '90vh', overflowY: 'auto',
                background: 'rgba(12, 14, 28, 0.98)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--admin-border)', borderRadius: 'var(--admin-radius-lg)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.5)', padding: '24px 20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Schedule Installation</h2>
                <button className="admin-icon-btn" onClick={() => setIsModalOpen(false)}><X size={18} /></button>
              </div>

              {selectedRequest && (
                <div style={{
                  background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.1)',
                  padding: 20, borderRadius: 'var(--admin-radius-sm)', marginBottom: 24,
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16,
                }}>
                  {[
                    { icon: <User size={16} />, label: 'Client', value: selectedRequest.name },
                    { icon: <Phone size={16} />, label: 'Phone', value: selectedRequest.phone },
                    { icon: <Mail size={16} />, label: 'Email', value: selectedRequest.email },
                    { icon: <MapPin size={16} />, label: 'Address', value: selectedRequest.address },
                  ].map((field, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ color: 'var(--admin-text-muted)', marginTop: 2 }}>{field.icon}</div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{field.label}</div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{field.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="admin-form-group">
                <label className="admin-label">Assign Technician</label>
                <select className="admin-input">
                  <option>Select Technician...</option>
                  <option>Tech Team A</option>
                  <option>Tech Team B</option>
                  <option>Master Electrician John</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 22 }}>
                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-label">Date</label>
                  <input type="date" className="admin-input" />
                </div>
                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-label">Time</label>
                  <input type="time" className="admin-input" />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Notes</label>
                <textarea className="admin-textarea" placeholder="Add instructions for the team..." style={{ minHeight: 80 }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 28 }}>
                <button className="admin-btn secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button className="admin-btn success" onClick={() => setIsModalOpen(false)}>
                  <Check size={16} /> Confirm Schedule
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RequestsPage;
