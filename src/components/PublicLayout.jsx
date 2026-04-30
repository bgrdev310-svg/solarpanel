import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import ContactModal from './ContactModal';

const PublicLayout = () => {
  return (
    <div className="bento-app-container">
      <NavBar />
      <Outlet />
      <Footer />
      <ContactModal />
    </div>
  );
};

export default PublicLayout;
