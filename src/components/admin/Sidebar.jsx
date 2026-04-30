import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Home, 
  HelpCircle, 
  Calendar, 
  Contact, 
  ClipboardList, 
  Settings,
  Zap,
  LogOut,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const mainNav = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
    { path: '/admin/requests', icon: <ClipboardList size={20} />, label: 'Requests' },
    { path: '/admin/calendar', icon: <Calendar size={20} />, label: 'Schedule' },
  ];

  const manageNav = [
    { path: '/admin/homepage-manager', icon: <Home size={20} />, label: 'Homepage' },
    { path: '/admin/faq-manager', icon: <HelpCircle size={20} />, label: 'FAQ Manager' },
    { path: '/admin/contact-manager', icon: <Contact size={20} />, label: 'Contact Info' },
    { path: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="admin-sidebar-header">
        <div className="admin-sidebar-logo">
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--admin-gradient-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(99, 102, 241, 0.35)'
          }}>
            <Zap size={20} color="#fff" />
          </div>
          <span>SolarAdmin</span>
        </div>
        {/* Close button - visible only on mobile/tablet via CSS */}
        <button className="admin-sidebar-close" onClick={closeSidebar}>
          <X size={18} />
        </button>
      </div>

      <div className="admin-nav">
        <div style={{ padding: '0 18px', marginBottom: 8 }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--admin-text-muted)' }}>Main</span>
        </div>
        {mainNav.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path} 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}

        <div style={{ padding: '20px 18px 8px', marginBottom: 0 }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--admin-text-muted)' }}>Manage</span>
        </div>
        {manageNav.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path} 
            className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}

        <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--admin-border)' }}>
          <NavLink to="/" className="admin-nav-item" style={{ color: 'var(--admin-danger)' }}>
            <LogOut size={20} />
            <span>Exit Admin</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
