import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import PublicLayout from './components/PublicLayout';
import AdminLayout from './components/admin/AdminLayout';

const Home = lazy(() => import('./pages/Home'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));

// Admin Pages
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage'));
const AnalyticsPage = lazy(() => import('./pages/admin/AnalyticsPage'));
const HomepageManager = lazy(() => import('./pages/admin/HomepageManager'));
const FAQManager = lazy(() => import('./pages/admin/FAQManager'));
const CalendarPage = lazy(() => import('./pages/admin/CalendarPage'));
const ContactManager = lazy(() => import('./pages/admin/ContactManager'));
const RequestsPage = lazy(() => import('./pages/admin/RequestsPage'));
const SettingsPage = lazy(() => import('./pages/admin/SettingsPage'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', width: '100%' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTop: '3px solid #6366f1', borderRadius: '50%', animation: 'spin 1s linear infinite' }}>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Auth Routes (standalone — no layout wrapper) */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />

          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/FAQPage" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/GalleryPage" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="homepage-manager" element={<HomepageManager />} />
            <Route path="faq-manager" element={<FAQManager />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="contact-manager" element={<ContactManager />} />
            <Route path="requests" element={<RequestsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
