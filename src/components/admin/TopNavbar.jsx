import React, { useState } from 'react';
import { Search, Bell, Menu, Moon, Sun, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'New installation request from John Smith', time: '2 min ago', unread: true },
    { id: 2, text: 'Schedule confirmed for Oct 15', time: '1 hour ago', unread: true },
    { id: 3, text: 'FAQ section updated successfully', time: '3 hours ago', unread: false },
  ];

  return (
    <div className="admin-topbar">
      <div className="admin-topbar-left">
        {/* Hamburger menu - visible on tablet/mobile via CSS */}
        <button className="admin-mobile-menu-btn" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
        
        <div className="admin-search">
          <Search size={18} color="var(--admin-text-muted)" />
          <input type="text" placeholder="Search anything..." />
          <kbd style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid var(--admin-border)',
            borderRadius: 6, padding: '2px 8px', fontSize: '0.72rem', color: 'var(--admin-text-muted)',
            fontFamily: 'var(--admin-font)', whiteSpace: 'nowrap'
          }}>⌘ K</kbd>
        </div>
      </div>

      <div className="admin-topbar-right">
        <button className="admin-icon-btn">
          <Moon size={18} />
        </button>

        <div style={{ position: 'relative' }}>
          <button className="admin-icon-btn" onClick={() => setShowNotifications(!showNotifications)}>
            <Bell size={18} />
            <span style={{
              position: 'absolute', top: 6, right: 6,
              width: 8, height: 8, background: '#f43f5e',
              borderRadius: '50%', border: '2px solid var(--admin-bg)'
            }} />
          </button>

          {showNotifications && (
            <div className="admin-notif-dropdown" style={{
              position: 'absolute', top: '110%', right: 0, width: 340,
              background: 'rgba(12, 14, 28, 0.98)', backdropFilter: 'blur(20px)',
              border: '1px solid var(--admin-border)', borderRadius: 'var(--admin-radius)',
              boxShadow: 'var(--admin-shadow-lg)', zIndex: 100, overflow: 'hidden'
            }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--admin-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Notifications</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--admin-accent)', cursor: 'pointer', fontWeight: 600 }}>Mark all read</span>
              </div>
              {notifications.map(n => (
                <div key={n.id} style={{
                  padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.03)',
                  cursor: 'pointer', transition: 'background 0.2s',
                  background: n.unread ? 'rgba(99, 102, 241, 0.04)' : 'transparent',
                }}>
                  <div style={{ fontSize: '0.88rem', marginBottom: 4, color: n.unread ? 'var(--admin-text-primary)' : 'var(--admin-text-secondary)' }}>
                    {n.unread && <span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--admin-accent)', borderRadius: '50%', marginRight: 8 }} />}
                    {n.text}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>{n.time}</div>
                </div>
              ))}
              <div style={{ padding: '12px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--admin-accent)', cursor: 'pointer', fontWeight: 600 }}>View all notifications</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="admin-profile">
          <div className="admin-avatar">A</div>
          <div className="admin-topbar-profile-info">
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--admin-text-primary)' }}>Admin</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--admin-text-muted)' }}>Super Admin</span>
          </div>
          <ChevronDown className="admin-topbar-chevron" size={14} color="var(--admin-text-muted)" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
