import React from 'react';
import { motion } from 'motion/react';
import { FileText, Clock, CheckCircle, CheckSquare, Plus, Edit, HelpCircle, Contact, Calendar, TrendingUp, TrendingDown, ArrowUpRight, Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const miniChartData = [
  { v: 20 }, { v: 35 }, { v: 28 }, { v: 45 }, { v: 38 }, { v: 55 }, { v: 48 }, { v: 62 }, { v: 58 }, { v: 72 }, { v: 65 }, { v: 80 },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const DashboardPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Requests', value: '124', trend: '+12%', positive: true, icon: <FileText size={22} />, gradient: 'var(--admin-gradient-1)', color: '#6366f1' },
    { label: 'Pending Requests', value: '18', trend: '3 urgent', positive: false, icon: <Clock size={22} />, gradient: 'var(--admin-gradient-3)', color: '#f43f5e' },
    { label: 'Installations', value: '45', trend: '+5%', positive: true, icon: <CheckSquare size={22} />, gradient: 'var(--admin-gradient-4)', color: '#22c55e' },
    { label: 'Revenue', value: '$48.2k', trend: '+18%', positive: true, icon: <DollarSign size={22} />, gradient: 'var(--admin-gradient-2)', color: '#3b82f6' },
  ];

  const recentRequests = [
    { name: 'John Smith', service: 'Residential Solar', date: 'Oct 12, 2026', status: 'pending' },
    { name: 'Sarah Davis', service: 'Commercial Panel', date: 'Oct 11, 2026', status: 'accepted' },
    { name: 'Michael Chen', service: 'Battery Storage', date: 'Oct 10, 2026', status: 'completed' },
    { name: 'Emily White', service: 'Maintenance', date: 'Oct 09, 2026', status: 'pending' },
  ];

  const quickActions = [
    { label: 'Schedule', icon: <Calendar size={24} />, color: '#6366f1', path: '/admin/calendar' },
    { label: 'Edit Home', icon: <Edit size={24} />, color: '#22c55e', path: '/admin/homepage-manager' },
    { label: 'Add FAQ', icon: <HelpCircle size={24} />, color: '#f59e0b', path: '/admin/faq-manager' },
    { label: 'Contacts', icon: <Contact size={24} />, color: '#8b5cf6', path: '/admin/contact-manager' },
  ];

  const upcomingSchedule = [
    { time: '09:00 AM', client: 'J. Thompson', type: 'Installation', color: '#6366f1' },
    { time: '11:30 AM', client: 'M. Rodriguez', type: 'Site Survey', color: '#22c55e' },
    { time: '02:00 PM', client: 'K. Williams', type: 'Maintenance', color: '#f59e0b' },
  ];

  return (
    <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
      {/* Header */}
      <motion.div className="admin-page-header" variants={fadeUp} transition={{ duration: 0.4 }}>
        <div>
          <h1 className="admin-page-title">Welcome back, Admin 👋</h1>
          <p className="admin-page-subtitle">Here's what's happening with your business today.</p>
        </div>
        <button className="admin-btn" onClick={() => navigate('/admin/requests')}>
          <Plus size={18} /> New Request
        </button>
      </motion.div>

      {/* Stat Cards */}
      <motion.div className="admin-grid-4 admin-section-gap" variants={fadeUp} transition={{ duration: 0.4, delay: 0.1 }}>
        {stats.map((stat, i) => (
          <div key={i} className="admin-card" style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: stat.gradient, opacity: 0.08, borderRadius: '50%', filter: 'blur(20px)' }} />
            <div className="stat-widget">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="stat-icon" style={{ background: `${stat.color}18`, color: stat.color }}>
                  {stat.icon}
                </div>
                <div style={{ height: 40, width: 80 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={miniChartData}>
                      <defs>
                        <linearGradient id={`mini-${i}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={stat.color} stopOpacity={0.3} />
                          <stop offset="100%" stopColor={stat.color} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="v" stroke={stat.color} strokeWidth={2} fill={`url(#mini-${i})`} dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-trend ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <motion.div className="admin-grid-2 admin-section-gap admin-responsive-grid-main" style={{ gridTemplateColumns: '1.5fr 1fr' }} variants={fadeUp} transition={{ duration: 0.4, delay: 0.2 }}>
        {/* Recent Requests */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h2 className="admin-card-title">Recent Requests</h2>
            <button className="admin-btn secondary" onClick={() => navigate('/admin/requests')} style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
              View All <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((req, i) => (
                  <tr key={i} style={{ cursor: 'pointer' }}>
                    <td style={{ fontWeight: 600 }}>{req.name}</td>
                    <td style={{ color: 'var(--admin-text-secondary)' }}>{req.service}</td>
                    <td style={{ color: 'var(--admin-text-secondary)' }}>{req.date}</td>
                    <td><span className={`badge ${req.status}`}>{req.status.charAt(0).toUpperCase() + req.status.slice(1)}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Upcoming Schedule */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h2 className="admin-card-title">Today's Schedule</h2>
              <button className="admin-btn secondary" onClick={() => navigate('/admin/calendar')} style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
                <Calendar size={14} /> Full View
              </button>
            </div>
            {upcomingSchedule.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '12px 0',
                borderBottom: i < upcomingSchedule.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none'
              }}>
                <div style={{
                  width: 4, height: 40, borderRadius: 4, background: item.color, flexShrink: 0,
                  boxShadow: `0 0 10px ${item.color}40`
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.client}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-secondary)' }}>{item.type}</div>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--admin-text-muted)', fontWeight: 600 }}>{item.time}</div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="admin-card">
            <h2 className="admin-card-title" style={{ marginBottom: 16 }}>Quick Actions</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {quickActions.map((action, i) => (
                <div key={i} onClick={() => navigate(action.path)} style={{
                  padding: '18px 14px', borderRadius: 'var(--admin-radius-sm)',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--admin-border)',
                  cursor: 'pointer', textAlign: 'center',
                  transition: 'var(--admin-transition)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                }}>
                  <div style={{ color: action.color }}>{action.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{action.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;
