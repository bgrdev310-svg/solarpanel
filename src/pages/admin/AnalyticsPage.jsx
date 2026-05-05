import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, ArrowUpRight, DollarSign, Users, Zap, Clock } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';

const areaData = [
  { name: 'Jan', requests: 65, installations: 40 },
  { name: 'Feb', requests: 78, installations: 52 },
  { name: 'Mar', requests: 90, installations: 63 },
  { name: 'Apr', requests: 81, installations: 58 },
  { name: 'May', requests: 95, installations: 72 },
  { name: 'Jun', requests: 110, installations: 85 },
  { name: 'Jul', requests: 125, installations: 98 },
  { name: 'Aug', requests: 118, installations: 92 },
  { name: 'Sep', requests: 135, installations: 105 },
  { name: 'Oct', requests: 142, installations: 112 },
];

const barData = [
  { name: 'Residential', count: 420, revenue: 380 },
  { name: 'Commercial', count: 310, revenue: 520 },
  { name: 'Maintenance', count: 180, revenue: 90 },
  { name: 'Battery', count: 140, revenue: 210 },
  { name: 'Hybrid', count: 95, revenue: 160 },
];

const pieData = [
  { name: 'Website', value: 45 },
  { name: 'Referral', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Direct', value: 10 },
];
const PIE_COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#3b82f6'];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'rgba(12, 14, 28, 0.95)', backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12,
      padding: '12px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
    }}>
      <div style={{ fontWeight: 700, marginBottom: 6, fontSize: '0.85rem' }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: p.color }}>
          <span style={{ width: 8, height: 8, borderRadius: 3, background: p.color, display: 'inline-block' }} />
          {p.name}: <strong style={{ color: '#f0f2f5' }}>{p.value}</strong>
        </div>
      ))}
    </div>
  );
};

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const kpis = [
  { label: 'Conversion Rate', value: '68.5%', trend: '+2.4%', positive: true, icon: <TrendingUp size={20} />, color: '#22c55e' },
  { label: 'Avg. Revenue', value: '$3.8k', trend: '+14%', positive: true, icon: <DollarSign size={20} />, color: '#6366f1' },
  { label: 'Completion Time', value: '3.2d', trend: '-0.5d', positive: true, icon: <Clock size={20} />, color: '#3b82f6' },
  { label: 'Active Clients', value: '284', trend: '+12', positive: true, icon: <Users size={20} />, color: '#f59e0b' },
];

const topRegions = [
  { name: 'North District', pct: 38, color: '#6366f1' },
  { name: 'Downtown Area', pct: 28, color: '#22c55e' },
  { name: 'East Suburbs', pct: 20, color: '#3b82f6' },
  { name: 'South Valley', pct: 14, color: '#f59e0b' },
];

const AnalyticsPage = () => {

  return (
    <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
      <motion.div className="admin-page-header" variants={fadeUp} transition={{ duration: 0.4 }}>
        <div>
          <h1 className="admin-page-title">Analytics & Insights</h1>
          <p className="admin-page-subtitle">Visual performance overview for your business.</p>
        </div>
        <select className="admin-input" style={{ width: 'auto', background: 'rgba(255,255,255,0.04)' }}>
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>This Year</option>
          <option>All Time</option>
        </select>
      </motion.div>

      {/* KPI Row */}
      <motion.div className="admin-grid-4 admin-section-gap" variants={fadeUp} transition={{ duration: 0.4, delay: 0.1 }}>
        {kpis.map((kpi, i) => (
          <div key={i} className="admin-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: `${kpi.color}15`, color: kpi.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {kpi.icon}
              </div>
              <div className={`stat-trend ${kpi.positive ? 'positive' : 'negative'}`}>
                {kpi.positive ? <TrendingUp size={13} /> : <TrendingDown size={13} />} {kpi.trend}
              </div>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{kpi.value}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--admin-text-secondary)', marginTop: 4 }}>{kpi.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Charts Row */}
      <motion.div className="admin-grid-2 admin-section-gap" variants={fadeUp} transition={{ duration: 0.4, delay: 0.2 }}>
        <div className="admin-card" style={{ padding: '24px 24px 16px' }}>
          <div className="admin-card-header">
            <h2 className="admin-card-title">Requests & Installations</h2>
          </div>
          <div style={{ height: 300, width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="gReq" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gInst" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="name" stroke="#4a4f5e" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#4a4f5e" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="requests" stroke="#6366f1" strokeWidth={2.5} fill="url(#gReq)" name="Requests" />
                <Area type="monotone" dataKey="installations" stroke="#22c55e" strokeWidth={2.5} fill="url(#gInst)" name="Installations" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 8 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--admin-text-secondary)' }}>
              <span style={{ width: 10, height: 3, borderRadius: 2, background: '#6366f1' }} /> Requests
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--admin-text-secondary)' }}>
              <span style={{ width: 10, height: 3, borderRadius: 2, background: '#22c55e' }} /> Installations
            </span>
          </div>
        </div>

        <div className="admin-card" style={{ padding: '24px 24px 16px' }}>
          <div className="admin-card-header">
            <h2 className="admin-card-title">Services Breakdown</h2>
          </div>
          <div style={{ height: 300, width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="name" stroke="#4a4f5e" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#4a4f5e" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} name="Projects" />
                <Bar dataKey="revenue" fill="#22c55e" radius={[6, 6, 0, 0]} name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Bottom Row */}
      <motion.div className="admin-grid-2 admin-responsive-grid-main" style={{ gridTemplateColumns: '1fr 1.2fr' }} variants={fadeUp} transition={{ duration: 0.4, delay: 0.3 }}>
        <div className="admin-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="admin-card-title" style={{ alignSelf: 'flex-start', marginBottom: 16 }}>Client Sources</h2>
          <div style={{ height: 220, width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={4} dataKey="value" stroke="none">
                  {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 8 }}>
            {pieData.map((d, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--admin-text-secondary)' }}>
                <span style={{ width: 8, height: 8, borderRadius: 3, background: PIE_COLORS[i] }} /> {d.name} ({d.value}%)
              </span>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <h2 className="admin-card-title" style={{ marginBottom: 20 }}>Top Performing Regions</h2>
          {topRegions.map((r, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{r.name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--admin-text-secondary)', fontWeight: 600 }}>{r.pct}%</span>
              </div>
              <div style={{ height: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${r.pct}%`, background: r.color, borderRadius: 6, transition: 'width 1s ease', boxShadow: `0 0 10px ${r.color}40` }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnalyticsPage;
